import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Progress
{
    constructor()
    {
        this.list = $('.news__list')
        this.item = $('.news__item')

        const update = (progress) =>
        {
            this.list.css('--progress', progress)
        }

        ScrollTrigger.create(
        {
            trigger: this.list, start: 'top center', end: 'bottom center', scrub: true,
            onUpdate: self => update(self.progress)
        })

        this.init()
    }

    init()
    {
        this.item.each((i, el) => 
        {
            let self = $(el)

            ScrollTrigger.create(
            {
                trigger: self, start: 'top center-=50', end: 'bottom center-=50',
                onEnter: () => self.addClass('active'),
                onLeaveBack: () => self.removeClass('active')
            })
        })
    }
}