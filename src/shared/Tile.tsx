import { makeStyles, mergeStyles, Stack, useTheme } from '@fluentui/react'
import { FunctionComponent } from 'react'
import { SubTitle } from '.'

interface TileProps {
  title: string
}

const useStyles = () => {
  const theme = useTheme()
  return mergeStyles({
    margin: 16,
    padding: 16,
    backgroundColor: theme.palette.white,
    boxShadow: theme.effects.elevation4
  })
}

export const Tile: FunctionComponent<TileProps> = ({ title, children }) => {
  const cls = useStyles()
  return (
    <Stack className={cls} tokens={{ childrenGap: 8 }}>
      <SubTitle>{title}</SubTitle>
      <Stack tokens={{ childrenGap: 8 }}>{children}</Stack>
    </Stack>
  )
}
