export default class Footer
{
    constructor()
    {
        this.footer = $('footer')
        this.logo = this.footer.find('.footer__logo--parent')

        this.logoAnimation()
    }

    logoAnimation()
    {
        this.logo.names = this.logo.find('.footer__logo--names')
        this.logo.name = this.logo.find('.footer__logo--name')

        let counter = 0

        this.logo.name.eq(counter).addClass('active')
        this.changeSize(this.logo.name.eq(counter))

        setInterval(() => 
        {
            counter++

            if(counter >= this.logo.name.length) counter = 0

            this.logo.name.removeClass('active')
            this.logo.name.eq(counter).addClass('active')

            this.changeSize(this.logo.name.eq(counter))
        }, 2000)
    }

    changeSize(name)
    {
        let width = name.width()
        this.logo.names.css('--width', `${width / window.innerWidth * 100}rem`)
    }
}