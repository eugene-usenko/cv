import { Stack } from '@fluentui/react'
import { useSummaryInfo } from '../data'

export const Summary = () => {
    const items: string[] = useSummaryInfo()

    return (
        <Stack>
            {items.map((s: string, i: number) => (
                <p key={i}>{s}</p>
            ))}
        </Stack>
    )
}
