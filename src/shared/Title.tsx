import { mergeStyles, IRawStyle, useTheme, FontSizes } from '@fluentui/react'
import { ReactNode } from 'react'

interface ITitleProps {
  children: ReactNode
  style?: IRawStyle
  className?: string
  uppercase?: boolean
}

export const Title = ({ children, style, className, uppercase = false }: ITitleProps) => {
  const css = mergeStyles(
    {
      fontSize: FontSizes.size28,
      fontWeight: 600,
      textTransform: uppercase ? 'uppercase' : undefined
    },
    style,
    className
  )
  return <h2 className={css}>{children}</h2>
}

export const SubTitle = ({ children, ...props }: ITitleProps) => (
  <Title {...props} style={{ fontSize: FontSizes.size16 }}>
    {children}
  </Title>
)
