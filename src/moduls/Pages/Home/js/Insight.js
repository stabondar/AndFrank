import gsap from 'gsap'

export default class Insight
{
    constructor()
    {
        this.line = $('.insight__line')

        this.line.each((i, el) =>
        {
            let self = $(el)

            this.duplicate(self)
            this.animation(self)
        })

    }

    duplicate(self)
    {
        let items = self.find('.insight__row')

        items.each((i, el) =>
        {
            self.append(el.cloneNode(true))
        })
    }

    animation(self)
    {
        this.row = self.find('.insight__row')

        const lineWidth = this.row[0].offsetWidth;
        let duration = Math.abs(lineWidth / 140);

        if(window.innerWidth < 479)
        {
            duration = duration * 2
        }
        // let duration = this.row.children().length

        this.tl = gsap.timeline({repeat: -1})
        this.tl.to(this.row, {duration: duration, xPercent: -100, ease: 'none'})
    }
}