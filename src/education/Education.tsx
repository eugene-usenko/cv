import { Link, Stack } from '@fluentui/react'
import { useIntl } from 'react-intl'
import { IEducation, useEducationInfo } from '../data'
import { SubTitle } from '../shared'
import { i18nString } from '../shared/intl'
import { isBlank } from '../shared/string'

export const Education = () => {
    const education: IEducation[] = useEducationInfo()
    const intl = useIntl()

    const onRenderEducationItem = (item: IEducation) => {
        if (isBlank(item.link)) return <span>{item.name}</span>
        return <Link href={item.link}>{item.name}</Link>
    }

    return (
        <Stack>
            <SubTitle uppercase={true}>{i18nString(intl, 'cv.education')}</SubTitle>
            <ul>
                {education.map((item, key) => (
                    <li key={key}>{onRenderEducationItem(item)}</li>
                ))}
            </ul>
        </Stack>
    )
}
