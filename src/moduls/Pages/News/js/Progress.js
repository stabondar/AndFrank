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

        this.progressScroll = ScrollTrigger.create(
        {
            trigger: this.list, start: 'top center', end: 'bottom center', scrub: true,
            onUpdate: self => update(self.progress)
        })

        this.init()
        this.refresh()
    }

    init()
    {
        this.item.each((i, el) => 
        {
            let self = $(el)

            this.checkActive = ScrollTrigger.create(
            {
                trigger: self, start: 'top center-=50', end: 'bottom center-=50',
                onEnter: () => self.addClass('active'),
                onLeaveBack: () => self.removeClass('active')
            })
        })
    }

    refresh()
    {
        let filters = $('.news__next')
        // let items

        filters.on('click', () => 
        {
            setTimeout(() =>
            {   
                // items = $('.news__item')
                this.progressScroll.refresh()
                this.checkActive.kill()

                this.item = $('.news__item')
                this.init()
            }, 400)
        })
    }
}