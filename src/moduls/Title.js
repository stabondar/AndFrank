import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {SplitText} from 'gsap/SplitText'
import FontFaceObserver from 'fontfaceobserver';

import SplitTextResize from './Components/SplitTextResize'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default class Title
{
    constructor()
    {
        let mm = gsap.matchMedia()
        let isDesktop = '(min-width: 991px)'
        let isMobile = '(min-width: 480px) and (max-width: 991px)'
        let enter = 'top 90%'
        let splitLine, splitWord

        const lineAnimation = () =>
        {
            let item = $('[text-line]')
            splitLine = new SplitText(item, {type: 'lines'})

            $(item).each(function()
            {
                let self = $(this)
                let lines = self.find(splitLine.lines)
                let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.06}})

                tl.fromTo(lines, {opacity: 0}, {opacity: 1, stagger: 0.1})

                ScrollTrigger.create({
                    trigger: self,
                    start: enter,
                    onEnter: () => tl.play()
                })

                // ScrollTrigger.create({
                //     trigger: self,
                //     start: enter,
                //     onUpdate: () => tl.play()
                // })
            })
        }
        
        let titleFont = new FontFaceObserver('PP Editorial New')
        titleFont.load().then(function () 
        {
            lineAnimation()
            const lineAnimationResize = new SplitTextResize(splitLine, lineAnimation)
        })
    }
}
