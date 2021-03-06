import { IStyle, mergeStyleSets, Pivot, PivotItem } from '@fluentui/react'
import { useIntl } from 'react-intl'
import { ContactInfo as ContactInfo } from './contact'
import { Education } from './education'
import { Experience } from './experience'
import { i18nString } from './shared/intl'
import { Summary } from './summary'

const useStyle = () => {
    // const theme = useTheme()
    return mergeStyleSets({
        app: {
            // background: theme.palette.neutralLighterAlt,
            width: 700,
            height: '100%'
        } as IStyle
    })
}

export const App = () => {
    const style = useStyle()
    const intl = useIntl()

    return (
        <div className={style.app}>
            <ContactInfo />
            <Pivot linkSize='large'>
                <PivotItem headerText={i18nString(intl, 'pivot.cv')}>
                    <Summary />
                    <Experience />
                    <Education />
                </PivotItem>
                <PivotItem headerText={i18nString(intl, 'pivot.projects')}>Coming soon!</PivotItem>
            </Pivot>
        </div>
    )
}
