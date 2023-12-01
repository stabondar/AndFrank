export default class Nav
{
    constructor()
    {
        this.nav = $('.nav')
        this.items = $('.nav__tab')
        this.dropParent = $('.nav__drop--parent')
        this.dropItem = $('.nav__drop')

        this.hovers()
        this.delays()
    }

    hovers()
    {
        this.items.each((i, el) =>
        {
            let self = $(el)
            let thisDrop = this.dropItem.eq(i)

            self.on('mouseenter', () =>
            {
                this.nav.addClass('hovered')
                this.dropItem.removeClass('active')
                this.items.removeClass('active')

                this.dropParent.addClass('open')
                thisDrop.addClass('active')
                self.addClass('active')
            })
        })

        this.nav.on('mouseleave', () =>
        {
            this.dropParent.removeClass('open')
            this.dropItem.removeClass('active')
            this.items.removeClass('active')
            this.nav.removeClass('hovered')
        })
    }

    delays()
    {
        this.dropItem.each((i, el) =>
        {
            let self = $(el)
            let links = self.find('.nav__drop--link')

            let delay 
            links.each((i, el) => 
            {
                delay = i * 0.1 + 0.2
                $(el).css('--delay', `${delay}s`)
            })

            self.find('.nav__drop--links').siblings().css('--delay', `${delay + 0.1}s`)
        })
    }
}