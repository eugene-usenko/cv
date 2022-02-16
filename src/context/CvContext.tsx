import React, { createContext, useContext, useReducer } from 'react'
import { Tab } from '.'

type Action =
    | { type: 'toggle-tab'; tab: Tab }
    | { type: 'toggle-additional-info'; show: boolean }
    | { type: 'toggle-compact-mode'; compact: boolean }

interface State {
    currentTab: Tab
    showAdditionalInfo: boolean
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'toggle-tab': {
            const { tab } = action
            return { ...state, currentTab: tab }
        }
        case 'toggle-additional-info': {
            const { show } = action
            return { ...state, showAdditionalInfo: show }
        }
        default:
            return state
    }
}

type CvContextProps = {
    children?: React.ReactNode
}

interface CvContextValue {
    state: State
    dispatch?: (a: Action) => void
}

const CvContext = createContext({} as CvContextValue)
const defaultState: State = { currentTab: Tab.CV, showAdditionalInfo: false }

export const CvContextProvider = ({ children }: CvContextProps) => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const value: CvContextValue = { state, dispatch }
    return <CvContext.Provider value={value}>{children}</CvContext.Provider>
}

export const useCurrentTab = (): Tab => {
    const { state } = useContext(CvContext)
    return state.currentTab
}

export const useShowAdditionalInfo = (): boolean => {
    const { state } = useContext(CvContext)
    return state.showAdditionalInfo
}

export interface ICvContextActions {
    toggleTab: (tab: Tab) => void
    toggleShowAdditionalInfo: (show: boolean) => void
}

export const useCvContextActions = (): ICvContextActions => {
    const { dispatch } = useContext(CvContext)

    const toggleTab = (tab: Tab) => {
        if (dispatch) dispatch({ type: 'toggle-tab', tab })
    }

    const toggleShowAdditionalInfo = (show: boolean) => {
        if (dispatch) dispatch({ type: 'toggle-additional-info', show })
    }

    return { toggleShowAdditionalInfo, toggleTab }
}
