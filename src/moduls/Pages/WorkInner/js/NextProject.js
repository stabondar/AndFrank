import gsap from 'gsap'

export default class NextProject
{
    constructor()
    {
        this.line = $('.next-project__row')

        this.duplicate()
        this.animation()
    }

    duplicate()
    {
        let items = this.line.find('.next-project__line')

        items.each((i, el) =>
        {
            this.line.append(el.cloneNode(true))
        })
    }

    animation()
    {
        this.row = $('.next-project__line')

        this.tl = gsap.timeline({repeat: -1})
        this.tl.to(this.row, {duration: 18, xPercent: -100, ease: 'none'})
    }
}