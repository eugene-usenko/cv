import { Label, Stack } from '@fluentui/react'
import { useIntl } from 'react-intl'
import { SubTitle, useSummaryInfo } from '../shared'
import { i18nString } from '../shared/intl'

export const Summary = () => {
  const items: string[] = useSummaryInfo()
  const intl = useIntl()

  return (
    <Stack>
      {/* <SubTitle>{i18nString(intl, 'cv.summary')}</SubTitle> */}
      {items.map((s: string, i: number) => (
        <p key={i}>{s}</p>
      ))}
    </Stack>
  )
}
