import App from "../../App"

export default class Footer
{
    constructor()
    {
        this.app = new App()
        this.lenis = this.app.scroll.lenis

        this.footer = $('footer')
        this.logo = this.footer.find('.footer__logo--parent')

        this.logoAnimation()
        this.scrollTop()
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

    scrollTop() 
    {
        this.scrollTrigger = $('#scroll-top')
        this.scrollTrigger.on('click', () => 
        {
            this.lenis.scrollTo(0, { duration: 1, force: true })
        })
    }
}