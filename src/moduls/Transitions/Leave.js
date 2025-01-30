import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import App from '../../App'
import { changeLoaderTheme } from '../Components/ChangeLoaderTheme'

gsap.registerPlugin(ScrollTrigger)

export default class Leave
{
    constructor(container, done)
    {
        const app = new App()
        const scroll = app.scroll.lenis

        gsap.to(container, {opacity: 1, duration: 0.3})

        let loader = $('.loader')
        let nav = $('.nav')
        let body = $('body')

        $('.nav__tab').removeClass('w--current')
        loader.addClass('loading')
        body.removeClass('burger-open')

        const scrollTo = () => scroll.scrollTo(0, {offset: 0, duration: 0.1, immediate: true})
        const complete = () => { done(), scrollTo(), ScrollTrigger.killAll() }

        changeLoaderTheme()

        scroll.start()

        let tl = gsap.timeline({defaults: {duration: 0.5, ease: 'power1'}, onStart: () => loader.removeClass('hide')})
        tl.fromTo(loader, {opacity: 0}, {opacity: 1, onComplete: complete})

    }
}