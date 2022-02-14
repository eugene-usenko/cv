import { IContact, IEducation, IExperiance } from '.'
import data from '../data.json'

export const useContactInfo = (): IContact => data.contact
export const useSummaryInfo = (): string[] => data.summary || []
export const useEducationInfo = (): IEducation[] => data.education || []
export const useExperianceInfo = (): IExperiance[] => data.experience || []
