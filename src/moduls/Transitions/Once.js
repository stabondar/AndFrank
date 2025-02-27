import gsap from 'gsap'

import App from "../../App"
import { changeLoaderTheme } from "../Components/ChangeLoaderTheme"

export default class Once
{
    constructor(container)
    {
        const app = new App
        const scroll = app.scroll.lenis

        
        this.loader = $('.loader')
        gsap.set(container, {autoAlpha: 1})
        
        this.loader.addClass('loading')
        
        const scrollTo = () => scroll.scrollTo(0, {offset: 0, duration: 0.1, immediate: true})
        
        changeLoaderTheme()
        
        scroll.start()
        

        let tl = gsap.timeline({defaults: {duration: 0.5, ease: 'power1'}})
        tl.to(this.loader, {opacity: 0, onStart: scrollTo, delay: 0.4, onComplete: () => this.hideLoader()})

    }

    hideLoader() 
    {
        this.loader.addClass('hide')
    }
}