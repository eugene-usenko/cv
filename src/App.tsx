import { IStyle, mergeStyleSets, Separator, useTheme } from '@fluentui/react'
import { ContactInfo as ContactInfo } from './contact'
import { Education } from './education'
import { Experience } from './experience'
import { Summary } from './summary'

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

  return (
    <div className={style.app}>
      <ContactInfo />
      <Summary />
      <Experience />
      <Education />
    </div>
  )
}
