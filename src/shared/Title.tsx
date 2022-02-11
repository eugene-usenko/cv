import { mergeStyles, IRawStyle } from '@fluentui/react'
import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
  style?: IRawStyle
  className?: string
}

export const Title = ({ children, style, className }: TitleProps) => {
  const css = mergeStyles(
    {
      fontSize: 24,
      fontWeight: 600
    },
    style,
    className
  )
  return <h2 className={css}>{children}</h2>
}

export const SubTitle = ({ children, ...props }: TitleProps) => (
  <Title {...props} style={{ fontSize: 20 }}>
    {children}
  </Title>
)
