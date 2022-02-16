import { FontSizes, IStyle, mergeStyleSets, Stack, useTheme } from '@fluentui/react'
import { useContactInfo } from '../context'
import { isBlank } from '../shared/'
import { ContactAction } from './ContactAction'

const useStyle = () => {
    const theme = useTheme()
    return mergeStyleSets({
        info: {
            background: theme.palette.white,
            paddingTop: 32,
            paddingBottom: 16
        } as IStyle,
        name: {
            fontSize: FontSizes.size28,
            margin: '8px 0'
        } as IStyle,
        position: {
            fontSize: FontSizes.size16,
            color: theme.palette.neutralSecondaryAlt
        } as IStyle
    })
}

export const ContactInfo = () => {
    const style = useStyle()
    const { name, phone, location, email, linkedin, position } = useContactInfo()

    const onPhoneClicked = () => alert('Coming soon!')
    const onLocationClicked = () => alert('Coming soon!')
    const onEmailClicked = () => alert('Coming soon!')
    const onLinkedinClicked = () => {
        if (isBlank(linkedin)) return
        window.location.assign(linkedin!)
    }

    return (
        <Stack horizontal verticalAlign='center' horizontalAlign='space-between' className={style.info}>
            <Stack>
                <div className={style.name}>{name}</div>
                <div className={style.position}>{position}</div>
            </Stack>
            <Stack>
                <ContactAction text={phone} iconName='CellPhone' onClick={onPhoneClicked} />
                <ContactAction text={email} iconName='Mail' onClick={onEmailClicked} />
                <ContactAction text={location} iconName='MapPin' onClick={onLocationClicked} />
                <ContactAction text={linkedin} iconName='LinkedInLogo' onClick={onLinkedinClicked} />
            </Stack>
        </Stack>
    )
}
