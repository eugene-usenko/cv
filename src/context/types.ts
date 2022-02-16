export interface IContact {
    name: string
    position?: string
    phone?: string
    email?: string
    location?: string
    linkedin?: string
}

export interface IEducation {
    name: string
    link?: string
}

export interface IExperiance {
    summary: string | string[]
    dates: string
    role: string
    employer?: string
    customer?: string
    teamSize?: string
    technologies: string[]
}

export enum Tab {
    CV = 'CV',
    PROJECTS = 'PROJECTS'
}
