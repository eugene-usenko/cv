import data from '../data.json'

interface IContact {
  name: string
  position?: string
  phone?: string
  email?: string
  location?: string
  linkedin?: string
}
export const useContactInfo = (): IContact => data.contact
export const useSummaryInfo = (): string[] => data.summary || []
