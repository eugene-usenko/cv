import { Icon, mergeStyleSets, Stack, useTheme } from '@fluentui/react'
import { isBlank } from '../shared'

interface ICustomerProps {
    hasBulletBefore?: boolean
    hasBulletAfter?: boolean
    iconName: string
    title?: string
    value?: string
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
        }
    })
}

export const Bullet = () => {
    const style = useStyle()
    return <span className={style.bullet}>&#8226;</span>
}

export const HeaderToken = ({ value, title, iconName }: ICustomerProps) => {
    const style = useStyle()
    if (isBlank(value)) return null

    return (
        <Stack horizontal tokens={{ childrenGap: 4 }} verticalAlign='center' className={style.token} title={title}>
            <Icon iconName={iconName} className={style.icon} />
            <span>{value}</span>
        </Stack>
    )
}
