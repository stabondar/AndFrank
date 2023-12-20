export default class Burger
{
    constructor()
    {
        this.icon = $('.nav__burger')
        this.body = $('body')
        this.burger = $('.burger')
        this.items = this.burger.find('.burger__item')
        this.dropItems = this.burger.find('.burger__drop--item')
        this.logo = $('.nav__logo')

        this.open()
        this.addDelay()
        this.accordion()
    }

    open()
    {
        this.icon.on('click', () => 
        {
            if(this.body.hasClass('burger-open'))
            {
                this.body.removeClass('burger-open')
                this.items.removeClass('open')
            } else
            {
                this.body.addClass('burger-open')
            }
        })

        this.dropItems.on('click', () =>
        {
            this.body.removeClass('burger-open')
            this.items.removeClass('open')
        })
    }

    addDelay()
    {
        this.items.each((i, el) =>
        {
            let self = $(el)

            self.css('--delay', `${0.1 * i + 0.1}s`)
        })

        this.logo.on('click', () => this.body.removeClass('burger-open'))
    }

    accordion()
    {
        this.items.each((i, el) => 
        {
            let self = $(el)
            let top = self.find('.burger__top')

            top.on('click', () =>
            {
                if(self.hasClass('open'))
                {
                    this.items.removeClass('open')
                } else
                {
                    this.items.removeClass('open')
                    self.addClass('open')
                }
            })
        })
    }
}