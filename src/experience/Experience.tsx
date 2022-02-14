import { Separator, Stack, StackItem } from '@fluentui/react'
import { useIntl } from 'react-intl'
import { IExperiance, useExperianceInfo } from '../context'
import { SubTitle } from '../shared'
import { i18nString } from '../shared/intl'
import { Summary } from './Summary'
import { HeaderToken } from './HeaderToken'
import { Technologies } from './Technologies'

const ExperienceItem = ({ role, dates, customer, teamSize, summary, technologies }: IExperiance) => {
  const intl = useIntl()
  return (
    <Stack>
      <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 20 }}>
        <SubTitle>{role}</SubTitle>
        <HeaderToken value={dates} iconName='Calendar' title={i18nString(intl, 'experience.dates.title')} />
        <HeaderToken value={customer} iconName='MapPin' title={i18nString(intl, 'experience.customer.title')} />
        <HeaderToken value={teamSize} iconName='Group' title={i18nString(intl, 'experience.team-size.title')} />
      </Stack>
      <Summary value={summary} />
      <Technologies value={technologies} />
      <Separator />
    </Stack>
  )
}

export const Experience = () => {
  const experience: IExperiance[] = useExperianceInfo()

  return (
    <Stack>
      <Separator />
      {experience.map((item, key) => (
        <StackItem key={key}>
          <ExperienceItem {...item} />
        </StackItem>
      ))}
    </Stack>
  )
}
