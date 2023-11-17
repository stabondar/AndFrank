import gsap from 'gsap'

export default class Insight
{
    constructor()
    {
        this.line = $('.insight__line')

        this.duplicate()
        this.animation()
    }

    duplicate()
    {
        let items = this.line.find('.insight__row')

        items.each((i, el) =>
        {
            this.line.append(el.cloneNode(true))
        })
    }

    animation()
    {
        this.row = $('.insight__row')

        this.tl = gsap.timeline({repeat: -1})
        this.tl.to(this.row, {duration: 10, xPercent: -100, ease: 'none'})
    }
}