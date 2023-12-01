import gsap from 'gsap'

export default class Enter
{
    constructor(container, pageAnimation, checkPage)
    {
        const main = $(container)
        $('img').removeAttr('srcset')
        let loader = $('.loader')

        gsap.set(main, {autoAlpha: 1})
        let tl = gsap.timeline({defaults: {duration: 0.5, ease: 'power1'}})
        
        tl.to(loader, {opacity: 0, onStart: () => {pageAnimation(), checkPage()}, 
        onComplete: () => loader.removeClass('loading')}, 0.3)

    }
}