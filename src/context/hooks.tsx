import { IContact, IEducation } from '.'
import data from '../data.json'

export const useContactInfo = (): IContact => data.contact
export const useSummaryInfo = (): string[] => data.summary || []
export const useEducationInfo = (): IEducation[] => data.education || []
