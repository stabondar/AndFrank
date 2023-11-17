import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Counter
{
    constructor()
    {
        this.item = $('.numbers__index').children()

        this.getNumbers()
        this.animation()
    }

    animation()
    {
        this.item.each((i, el) => 
        {
            const increase = {thisNumber: 0}

            let self = $(el)
            let number = self.attr('data-number')

            let tl = gsap.timeline({paused: true})

            tl.to(increase, {duration: 1, thisNumber: number, onUpdate: () => self.text(increase.thisNumber.toFixed(0))})

            ScrollTrigger.create(
            {
                trigger: self, start: 'top 80%', 
                onEnter: () => tl.play()
            })
        })
    }

    getNumbers()
    {
        this.item.each((i, el) =>
        {
            let number = $(el).text()

            $(el).attr('data-number', number)
            $(el).text('0')
        })
    }
}