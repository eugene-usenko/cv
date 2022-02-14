interface ISummaryProps {
  value: string | string[]
}

export const Summary = ({ value }: ISummaryProps) => {
  if (Array.isArray(value))
    return (
      <>
        {value.map((v, k) => (
          <p key={k}>{v}</p>
        ))}
      </>
    )
  return <p>{value}</p>
}
