import { IStyle, mergeStyles, mergeStyleSets, PrimaryButton, Stack, useTheme } from '@fluentui/react'
import { useIntl } from 'react-intl'
import { Tile, Title } from './shared'
import { i18nString } from './shared/intl'

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
      background: theme.palette.neutralLighterAlt,
      height: '100%'
    } as IStyle
  })
}

export const App = () => {
  const style = useStyle()
  const intl = useIntl()
  return (
    <Stack horizontalAlign='center' className={style.app}>
      <Title>{i18nString(intl, 'cv.title')}</Title>
      <Stack>
        <Tile title='Summary of Qualifications'>
          <PrimaryButton>ABC</PrimaryButton>
          <p>Thisi a text</p>
        </Tile>
      </Stack>
      <div>Nav</div>
    </Stack>
  )
}
