import Swiper from 'swiper';
import 'swiper/css';

import '../../../../styles/pages/home/clients.scss'

export default class Clients
{
    constructor()
    {
        this.wrapper = $('.clients__wrapper')
        this.arrows = $('.clients__arrows')

        this.duplicate()
        this.init()
    }

    duplicate()
    {
        let items = this.wrapper.find('.clients__item--parent')

        items.each((i, el) =>
        {
            this.wrapper.children().append(el.cloneNode(true))
        })
    }

    init()
    {
        this.swiper = new Swiper(this.wrapper[0], 
        {
            loop: true,
            speed: 400, 
            spaceBetween: 0,
            centeredSlides: true,
            slidesPerView: 'auto',
            grabCursor: true,
            touchEventsTarget: 'wrapper',
        })

        this.swiper.slideToLoop(0, 0)
        
        this.arrows.children().eq(0).on('click', () => this.swiper.slidePrev())
        this.arrows.children().eq(1).on('click', () => this.swiper.slideNext())
    }
}