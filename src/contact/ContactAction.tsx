import { FontIcon, IStyle, mergeStyleSets, Stack, useTheme } from '@fluentui/react'
import { FunctionComponent } from 'react'
import { isBlank } from '../shared/string'

interface ContactActionProps {
    text?: string
    iconName: string
    onClick: () => void
}

const useStyle = () => {
    const theme = useTheme()
    return mergeStyleSets({
        action: {
            color: theme.palette.neutralSecondaryAlt,
            margin: 4,
            cursor: 'pointer'
        } as IStyle,
        text: {
            marginRight: 8
        } as IStyle
    })
}

export const ContactAction: FunctionComponent<ContactActionProps> = ({ text, iconName, onClick }) => {
    const style = useStyle()
    if (isBlank(text)) return null
    return (
        <Stack horizontal verticalAlign='center' horizontalAlign='end' className={style.action} onClick={onClick}>
            <div className={style.text}>{text}</div>
            <FontIcon iconName={iconName} />
        </Stack>
    )
}
