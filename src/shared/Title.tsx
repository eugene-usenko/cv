import { mergeStyles, IRawStyle, useTheme, FontSizes } from '@fluentui/react'
import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
  style?: IRawStyle
  className?: string
}

export const Title = ({ children, style, className }: TitleProps) => {
  const css = mergeStyles(
    {
      fontSize: FontSizes.size28,
      fontWeight: 600
    },
    style,
    className
  )
  return <h2 className={css}>{children}</h2>
}

export const SubTitle = ({ children, ...props }: TitleProps) => (
  <Title {...props} style={{ fontSize: FontSizes.size16 }}>
    {children}
  </Title>
)
