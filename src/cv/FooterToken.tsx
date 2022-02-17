import { Icon, IStyle, mergeStyleSets, Stack, useTheme } from '@fluentui/react'
import { isBlank } from '../shared'

interface ICustomerProps {
    iconName?: string
    title?: string
    children?: React.ReactNode
}

const useStyle = () => {
    const theme = useTheme()
    return mergeStyleSets({
        token: {
            color: theme.palette.neutralSecondaryAlt
        },
        bullet: {
            paddingLeft: 8,
            paddingRight: 8,
            color: theme.palette.neutralSecondaryAlt
        },
        icon: {
            color: theme.palette.themePrimary
        } as IStyle
    })
}

export const Bullet = () => {
    const style = useStyle()
    return <span className={style.bullet}>&#8226;</span>
}

export const FooterToken = ({ children, title, iconName }: ICustomerProps) => {
    const style = useStyle()
    if (!children) return null

    return (
        <Stack horizontal tokens={{ childrenGap: 8 }} verticalAlign='center' className={style.token} title={title}>
            {!isBlank(iconName) && <Icon iconName={iconName} className={style.icon} />}
            {typeof children === 'string' ? <span>{children}</span> : children}
        </Stack>
    )
}
