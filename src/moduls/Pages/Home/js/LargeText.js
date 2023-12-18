import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class LargeText
{
    constructor()
    {
        this.parent = $('.large-text')

        this.animation = gsap.to(this.parent, {'--font': 70})

        ScrollTrigger.create(
        {
            trigger: this.parent, start: 'top top', end: 'bottom bottom', scrub: true,
            animation: this.animation, onUpdate: self => this.setHeight()
        })
    }   

    setHeight()
    {
        this.height = this.parent.find('._70').height()

        this.parent.css('--height', `${this.height}px`)

        ScrollTrigger.update()
    }
}