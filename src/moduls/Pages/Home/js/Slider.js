import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default class Slider
{
    constructor()
    {
        this.hero = $('.hero')
        this.wrapper = this.hero.find('.hero__slider')[0]

        this.hero.find('.btn').removeAttr('batch')

        this.progress = $('.hero__progress')
        this.botParent = $('.hero__bot')
        this.botItems = $('.hero__bot--item')

        
        this.slideDuration = 4000
        
        this.addBars()
        this.activeBar = this.bars.eq(0)

        this.init()
    }

    init()
    {
        this.swiper = new Swiper(this.wrapper, 
        {
            modules: [Autoplay],
            loop: true,
            speed: 1000, 
            slidesPerView: 1,
            spaceBetween: 10,
            grabCursor: true,
            autoplay: 
            {
                delay: this.slideDuration,
                disableOnInteraction: false,
            },
        })

        this.swiper.on('activeIndexChange', () => 
        {
            this.index = this.swiper.realIndex

            this.changeActive()
        })

        this.autoProgress()
    }

    addBars()
    {
        let bar = `<div class="hero__progress--bar"></div>`

        this.botItems.each((i, el) =>
        {
            this.progress.append(bar)
        })

        this.bars = this.progress.find('.hero__progress--bar')
    }

    autoProgress()
    {
        const tick = () => 
        {
            this.timeLeft = this.swiper.autoplay.timeLeft
            this.activeBar.css('--progress', `${this.timeLeft / this.slideDuration}`)

            window.requestAnimationFrame(tick)
        }

        tick()
    }

    changeActive()
    {
        this.activeBotItem = this.botItems.eq(this.index)
        this.botItems.removeClass('active')
        this.activeBotItem.addClass('active')

        this.activeBar = this.bars.eq(this.index)
        this.bars.removeClass('active')
        this.activeBar.addClass('active')

        let bgColor = this.activeBotItem.attr('this-bg')
        this.botParent.css('background-color', `var(--${bgColor})`)

        this.video = $('.hero__slider--item').eq(this.index).find('video')

        this.video.each((i, el) =>
        {
            let self = $(el)

            self[0].currentTime = 0
        })
    }
}