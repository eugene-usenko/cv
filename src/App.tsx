import { IStyle, mergeStyleSets, Pivot, PivotItem } from '@fluentui/react'
import { useIntl } from 'react-intl'
import { ContactInfo as ContactInfo } from './contact'
import { CvTab } from './cv/CvTab'
import { ProjectList } from './projects/ProjectList'
import { i18nString } from './shared/intl'

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
            <Pivot linkSize='large' styles={{ itemContainer: { paddingTop: 16 } }}>
                <PivotItem headerText={i18nString(intl, 'pivot.cv')}>
                    <CvTab />
                </PivotItem>
                <PivotItem headerText={i18nString(intl, 'pivot.projects')}>
                    <ProjectList />
                </PivotItem>
            </Pivot>
        </div>
    )
}
