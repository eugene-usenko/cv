import { FormattedMessage, IntlShape } from 'react-intl'
import { useIntl } from 'react-intl'
import { messages } from './locale/en'

export type MessageId = keyof typeof messages
export type Values = Record<string, any>

export const i18n = (id: MessageId, values?: Values): JSX.Element => {
  return <FormattedMessage id={id} values={values} />
}

export const i18nString = (intl: IntlShape, id: MessageId, values?: Values): string => {
  return intl.formatMessage({ id }, values)
}

export const useI18nString = (id: MessageId, values?: Values): string => {
  const intl = useIntl()
  return i18nString(intl, id, values)
}
