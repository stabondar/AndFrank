import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class ExpandingText
{
    constructor(title, descr, section, size)
    {
        this.title = title
        this.descr = descr
        this.section = section
        this.size = size

        this.text = this.title.find('._70')
        this.text.addClass('expanding-text')

        this.init()
    }

    init()
    {
        this.tl = gsap.timeline({paused: true})
        this.tl.to(this.descr, {opacity: 0, duration: 0.2}, 0)
        .to(this.text, {'--font': this.size, duration: 1}, '<')
        .to(this.text, {'--font-tb': this.size * 0.5, duration: 1}, '<')

        ScrollTrigger.create(
        {
            trigger: this.section, start: 'top top', end: 'bottom bottom', scrub: true,
            animation: this.tl
        })
    }
}