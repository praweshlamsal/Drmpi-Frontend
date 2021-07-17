export interface ISlider {
    Description: string,
    Title: string,
    sliderImage: {
        url: string
    }
}

export interface IMainSlider {
    MainSlider: ISlider[],
    AcademicPrograms: IAcademicPrograms
    AboutUs: IAboutUs
}

export interface IAcademicPrograms {
    SectionTitle: string,
    Cards: TAcademicCard[]
}

export interface IAboutUs {
    SectionTitle: string,
    AboutTitle: string,
    AboutDescription: string,
    AboutImage: {
        url: string
    }
}

export type TAcademicCard = {
    id: number,
    CardTitle: string,
    CardDescription: string,
    CardUrl: string,
    CardIcon: {
        url: string
    }
}