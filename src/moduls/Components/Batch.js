import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Batch
{
    constructor()
    {
        let items = $('[batch]')

        ScrollTrigger.batch(items,
        {
            start: 'top 85%',
            interval: 0.2,
            onEnter: batch => { gsap.to(batch, {opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power1', onStart: () => $(batch).addClass('animating'), }) }
        })
    } 
}