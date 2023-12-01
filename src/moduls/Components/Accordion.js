import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import App from '../../App'

gsap.registerPlugin(ScrollTrigger)

export default class Accordion
{
    constructor()
    {
        this.app = new App()
        this.lenis = this.app.scroll.lenis

        this.delay = 450
        this.items = $('[accordion]')

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
        this.items.each((i, el) => 
        {
            let self = $(el)
            let top = self.children().eq(0)

            top.on('click', () => 
            {
                if(self.hasClass('active'))
                {
                    self.removeClass('active')
                    this.resize()
                } else 
                {
                    this.items.removeClass('active')
                    self.addClass('active')
                    this.resize()
                }
            })
        })
    }
}