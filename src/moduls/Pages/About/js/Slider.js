import gsap from 'gsap'
import { Observer } from 'gsap/Observer'

gsap.registerPlugin(Observer)

export default class Slider
{
    constructor()
    {
        this.section = $('.a-slider')
        this.item = this.section.find('.a-slider__item')

        this.item.find('img').attr('draggable', false)

        this.prevSlide = 0

        this.appendDots()
        this.autoSlide()
        this.obsSwipe()
    }

    appendDots()
    {
        this.section.append(`<div class="a-slider__dots"></div>`)
        this.dots = this.section.find('.a-slider__dots')

        this.item.each((i,el) =>
        {
            this.dots.append(`<div class="a-slider__dot"></div>`)
        })

        this.dot = this.dots.find('.a-slider__dot')
        this.dot.eq(0).addClass('active')

        this.dot.on('click', (e) =>
        {
            let self = $(e.currentTarget)
            let index = self.index()

            this.changeSlide(index)

            this.index = index
            clearInterval(this.interval)
            this.autoSlide()
        })
    }

    changeSlide(index)
    {
        this.item.removeClass('active')
        this.item.eq(index).addClass('active')

        this.dot.removeClass('active')
        this.dot.eq(index).addClass('active')

        this.prevSlide = index
    }

    autoSlide()
    {
        this.index = 0

        this.interval = setInterval(() =>
        {
            this.index++

            if(this.index > this.item.length - 1)
            {
                this.index = 0
            }

            this.changeSlide(this.index)
        }, 5000)
    }

    obsSwipe()
    {
        Observer.create(
        {
            trigger: this.section,
            type: 'pointer',
            onDragEnd: (self) =>
            {
                self.deltaX > 0 ? this.prevSlide++ : this.prevSlide--

                if(this.prevSlide >= this.item.length) this.prevSlide = 0
                if(this.prevSlide < 0) this.prevSlide = this.item.length - 1

                this.changeSlide(this.prevSlide)
                clearInterval(this.interval)
                this.autoSlide()
            }
        })
    }
}