import { useSummaryInfo } from '../data'
import { Education } from './Education'
import { Experience } from './Experience'
import { Summary } from './Summary'

export const CvTab = () => {
    const summary: string[] = useSummaryInfo()

    return (
        <>
            <Summary value={summary} />
            <Experience />
            <Education />
        </>
    )
}
