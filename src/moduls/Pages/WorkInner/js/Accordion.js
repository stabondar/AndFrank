import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import App from '../../../../App'

gsap.registerPlugin(ScrollTrigger)

export default class Accordion
{
    constructor()
    {
        this.app = new App()
        this.lenis = this.app.scroll.lenis

        this.delay = 450
        this.trigger = $('.work__descsr--more')
        this.triggerText = this.trigger.find('._18')
        this.items = $('.work__descr--hidden')

        this.textOPen = 'Mehr lesen'
        this.textClose = 'Weniger lesen'

        this.init()
    }

    resize()
    {
        setTimeout(() => 
        {
            ScrollTrigger.refresh()
            this.lenis.resize()
        }, this.delay)
    }

    init()
    {
        this.trigger.on('click', () => 
        {
            if(this.items.hasClass('open'))
            {
                this.items.removeClass('open')
                this.trigger.removeClass('hide')
                this.resize()
                this.triggerText.text(this.textOPen)
            } else
            {
                this.items.addClass('open')
                this.trigger.addClass('hide')
                this.resize()
                this.triggerText.text(this.textClose)
            }

        })
    }
}