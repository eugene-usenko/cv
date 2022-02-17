import { mergeStyleSets, Stack, StackItem, useTheme } from '@fluentui/react'

interface ITechnologiesProps {
    value: string[]
}

const useStyles = () => {
    const theme = useTheme()
    return mergeStyleSets({
        root: {
            color: theme.palette.neutralSecondaryAlt
        },
        bullet: {
            paddingLeft: 4,
            paddingRight: 4,
            color: theme.palette.neutralSecondaryAlt
        }
    })
}

const Bullet = () => {
    const styles = useStyles()
    return <span className={styles.bullet}>&#8226;</span>
}

export const Technologies = ({ value }: ITechnologiesProps) => {
    const styles = useStyles()
    const onRenderItem = (item: string, hasBullet: boolean) => {
        return (
            <Stack horizontal verticalAlign='center'>
                {hasBullet && <Bullet />}
                <span>{`${item}`}</span>
            </Stack>
        )
    }

    return (
        <Stack horizontal className={styles.root}>
            {value.map((item, key) => (
                <StackItem key={key}>{onRenderItem(item, key > 0)}</StackItem>
            ))}
        </Stack>
    )
}
