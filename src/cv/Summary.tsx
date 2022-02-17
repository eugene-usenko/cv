import { mergeStyles } from '@fluentui/react'

interface ISummaryProps {
    value: string | string[]
}

export const Summary = ({ value }: ISummaryProps) => {
    const cls = mergeStyles({
        // paddingTop: 8,
        paddingBottom: 8
    })
    if (Array.isArray(value))
        return (
            <>
                {value.map((v, k) => (
                    <div key={k} className={cls}>
                        {v}
                    </div>
                ))}
            </>
        )
    return <div className={cls}>{value}</div>
}
