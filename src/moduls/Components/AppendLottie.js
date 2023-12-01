import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import lottie from 'lottie-web';

gsap.registerPlugin(ScrollTrigger)

export default class AppendLottie
{
    constructor(item, useScroll)
    {
        this.item = item
        this.link = this.item.attr('link')

        this.append()
        if(useScroll) this.toggleScroll()
    }

    append()
    {
        let sequence = { frame: 0 }
        let animation = lottie.loadAnimation(
        {
            container: this.item[0],
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: this.link
        })

        this.tl = gsap.timeline({repeat: -1})

        animation.addEventListener('DOMLoaded', () => 
        {
            this.tl.to(sequence,
            {
                frame: animation.totalFrames - 1,
                ease: 'none',
                onUpdate: () => animation.goToAndStop(sequence.frame, true),
                duration: animation.totalFrames / 30
            })
        })
    }

    toggleScroll()
    {
        ScrollTrigger.create(
        {
            trigger: this.item, start: 'top bottom', end: 'bottom top', 
            onToggle: self => self.isActive ? this.tl.restart() : this.tl.pause()
        })
    }
}