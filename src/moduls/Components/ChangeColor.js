import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class ChangeColor 
{
    constructor()
    {
        $('[start-theme]').each(function()
        {
            let self = $(this)
            let thisColor = self.attr('start-theme')

            ScrollTrigger.create(
            {
                trigger: self,
                start: 'top 50%', end: 'bottom 50%',
                onEnter: () => $('main').attr('theme', thisColor),
                onLeaveBack: () => $('main').removeAttr('theme'),
            })
        })

        $('[end-theme]').each(function()
        {
            let self = $(this)
            let thisColor = self.attr('end-theme')

            ScrollTrigger.create(
            {
                trigger: self,
                start: 'top 50%', end: 'bottom 50%',
                onEnter: () => $('main').removeAttr('theme'),
                onLeaveBack: () => $('main').attr('theme', thisColor),
            })
        })
    }
}