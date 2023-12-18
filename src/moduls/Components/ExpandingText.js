import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class ExpandingText
{
    constructor(title, descr, section)
    {
        this.title = title
        this.descr = descr
        this.section = section

        this.text = this.title.find('._70')
        this.text.addClass('expanding-text')

        this.init()
    }

    init()
    {
        this.tl = gsap.timeline({paused: true})
        this.tl.to(this.descr, {opacity: 0, duration: 0.2}, 0)
        .to(this.text, {'--font': 600, duration: 1}, '<')

        ScrollTrigger.create(
        {
            trigger: this.section, start: 'top top', end: 'bottom bottom', scrub: true,
            animation: this.tl
        })
    }
}