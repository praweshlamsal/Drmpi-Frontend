export interface ISlider {
    Description: string,
    Title: string,
    sliderImage: {
        url: string
    }
}

export interface IMainSlider {
    MainSlider: ISlider[]
}