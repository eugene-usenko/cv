import { IStyle, Label, mergeStyleSets, Separator, Stack, StackItem } from '@fluentui/react'
import { useIntl } from 'react-intl'
import { IExperiance, useExperianceInfo } from '../context'
import { i18nString } from '../shared/intl'
import { HeaderToken } from './HeaderToken'
import { Summary } from './Summary'
import { Technologies } from './Technologies'

const useStyle = () =>
    mergeStyleSets({
        item: {
            paddingTop: 16
        } as IStyle
    })

const ExperienceItem = ({ role, dates, customer, teamSize, summary, technologies, employer }: IExperiance) => {
    const intl = useIntl()
    return (
        <>
            <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
                <Label>{role}</Label>
                <HeaderToken value={employer} iconName='MapPin' title={i18nString(intl, 'experience.employer.title')} />
                <HeaderToken value={dates} iconName='Calendar' title={i18nString(intl, 'experience.dates.title')} />
                <HeaderToken value={customer} iconName='MapPin' title={i18nString(intl, 'experience.customer.title')} />
                <HeaderToken value={teamSize} iconName='Group' title={i18nString(intl, 'experience.team-size.title')} />
            </Stack>
            <Summary value={summary} />
            <Technologies value={technologies} />
            <Separator />
        </>
    )
}

export const Experience = () => {
    const experience: IExperiance[] = useExperianceInfo()
    const style = useStyle()

    return (
        <Stack>
            {experience.map((item, key) => (
                <StackItem key={key} className={style.item}>
                    <ExperienceItem {...item} />
                </StackItem>
            ))}
        </Stack>
    )
}
