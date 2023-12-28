import gsap from 'gsap'

export default class Clients
{
    constructor()
    {
        this.parent = $('.kunden__rows')
        this.row = this.parent.find('.kunden__wrapper')

        this.duplicate()
        this.init()
    }

    duplicate()
    {
        this.row.each((i, el) =>
        {
            let self = $(el)
            let list = self.children()
            let clone = list.clone()
            self.append(clone)
        })
    }

    init()
    {
        
        this.row.each((i, el) => 
        {
            
            let direction = i % 2 == 0 ? -1 : 1
            
            let self = $(el)
            let list = self.children()
            
            let item = list.children()

            let duration = 30 + item.length

            let tl = gsap.timeline({repeat: -1, defaults: {ease: 'none'}})

            tl.to(list, {duration: duration, xPercent: 100 * direction}, 0)

            item.on('mouseenter', () => tl.pause())
            item.on('mouseleave', () => tl.play())
        })
    }
}