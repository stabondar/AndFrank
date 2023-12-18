import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import App from '../../../../App'

gsap.registerPlugin(ScrollTrigger)

export default class AspectRatio
{
    constructor()
    {
        this.app = new App()
        this.lenis = this.app.scroll.lenis

        this.img = $('.gallery__item img')
        this.halfWidth = window.innerWidth / 2

        this.img.each((i, el) =>
        {
            let self = $(el)

            self.on('load', () => this.checkSizes(self))
            // this.addTrigger(self)
        })
    }

    resize()
    {
        setTimeout(() => {
            ScrollTrigger.update()
            this.lenis.resize()
        }, 1);
    }

    addTrigger(item)
    {
        ScrollTrigger.create(
        {
            trigger: item, start: 'top 150%', onEnter: () => this.checkSizes(item)
        })
    }

    checkSizes(item)
    {
        let parent = item.parent()
        let thisWidth = item[0].naturalWidth
        let thisHeight = item[0].naturalHeight

        if(thisWidth > thisHeight)
        {
            parent.addClass('gallery__item--horizontal')

            this.resize()
        }
    }
}