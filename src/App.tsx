import { IStyle, mergeStyles, mergeStyleSets, PrimaryButton, Separator, Stack, useTheme } from '@fluentui/react'
import { useIntl } from 'react-intl'
import { ContactInfo as ContactInfo } from './contact'
import { Tile, Title, useContactInfo } from './shared'
import { i18nString } from './shared/intl'
import { Summary } from './summary'

// const iconClass = mergeStyles({
//   fontSize: 50,
//   height: 50,
//   width: 50,
//   margin: '0 25px'
// })

const useStyle = () => {
  const theme = useTheme()
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
      <Separator />
      <Summary />
      <Separator />
      <Stack>
        <Tile title={i18nString(intl, 'section.profile')}>
          <p>Profile text A</p>
          <p>Profile text B</p>
        </Tile>
        <Tile title='Summary of Qualifications'>
          <PrimaryButton>ABC</PrimaryButton>
          <p>Thisi a text</p>
        </Tile>
      </Stack>
      <div>Nav</div>
    </div>
  )
}
