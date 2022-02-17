import { IStyle, Label, mergeStyleSets, Stack, StackItem } from '@fluentui/react'
import { useIntl } from 'react-intl'
import { IExperiance, useExperianceInfo } from '../data'
import { i18nString } from '../shared/intl'
import { Summary } from './Summary'
import { FooterToken } from './FooterToken'
import { Technologies } from './Technologies'

const useStyle = () =>
    mergeStyleSets({
        root: { paddingTop: 16 } as IStyle
        // item: {
        //     paddingTop: 16
        // } as IStyle,
        // summary: {
        //     paddingBottom: 8
        // } as IStyle
    })

const ExperienceItem = ({ role, dates, summary, technologies }: IExperiance) => {
    const intl = useIntl()
    return (
        <Stack>
            <Label>{role}</Label>
            <Summary value={summary} />
            <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 24 }}>
                <FooterToken iconName='Calendar' title={i18nString(intl, 'experience.dates.title')}>
                    {dates}
                </FooterToken>
                <FooterToken iconName='Design' title={i18nString(intl, 'experience.toolbox.title')}>
                    <Technologies value={technologies} />
                </FooterToken>
            </Stack>
        </Stack>
    )
}

export const Experience = () => {
    const experience: IExperiance[] = useExperianceInfo()
    const style = useStyle()
    return (
        <Stack tokens={{ childrenGap: 24 }} className={style.root}>
            {experience.map((item, key) => (
                <StackItem key={key}>
                    <ExperienceItem {...item} />
                </StackItem>
            ))}
        </Stack>
    )
}
