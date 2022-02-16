interface ISummaryProps {
    value: string | string[]
}

export const Summary = ({ value }: ISummaryProps) => {
    if (Array.isArray(value))
        return (
            <>
                {value.map((v, k) => (
                    <div key={k} style={{ paddingBottom: 8 }}>
                        {v}
                    </div>
                ))}
            </>
        )
    return <div>{value}</div>
}
