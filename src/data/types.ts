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
    role: string
    dates: string
    technologies: string[]
}
