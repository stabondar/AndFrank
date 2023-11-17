import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'

import Scroll from './moduls/Scroll.js'
import Nav from './moduls/Nav.js'
import Footer from './moduls/Components/Footer.js'

let instance = null

export default class App {
    constructor()
    {
        if(instance) return instance
        instance = this

        this.scroll = new Scroll()
        this.lenis = this.scroll.lenis

        /*
        *   once Load
        */
        this.nav = new Nav()
        this.footer = new Footer()

        /*
        *   modules for pages
        */

       const namespace = 'barba-page'
       
       const checkPages = async () =>
       {   
            this.lenis.scrollTo(1, {force: true})
            const main = $('main')

            this.title = await import('./moduls/Title.js').then(module => new module.default)
            this.utils = await import('./moduls/Utils.js').then(module => new module.default)
            this.batch = await import('./moduls/Components/Batch.js').then(module => new module.default)
            if(main.attr(namespace) == 'home') this.page = await import('./moduls/Pages/Home/index.js').then(module => new module.default)
        }

        barba.use(barbaPrefetch)

        barba.init(
        {
            schema: 
            {
                prefix: 'barba',
                namespace: 'page'
            },
            debug: true,
            timeout: 7000,
            transitions: 
            [
                // Once Opening
                {
                    name: 'once',
                    once (data)
                    {
                        checkPages()
                        // const forms = new Forms()
                        // const pageAnimation = async () =>
                        // {
                        //     if(data.next.namespace == 'home')
                        //     {
                        //         let animation = await import('./moduls/Transitions/HomeLoader.js').then(module => new module.default)
                        //     }
                        //     if(data.next.namespace == 'values')
                        //     {
                        //         let animation = await import('./moduls/Transitions/ValuesLoader.js').then(module => new module.default)
                        //     }
                        // }

                        // let globalLoader = null
                        // if(globalLoader == null)
                        // {
                        //     globalLoader = await import('./moduls/Transitions/GlobalLoader.js').then(module => new module.default(checkPages, pageAnimation))
                        // }
                    }
                },
                {
                    // name: 'transition',
                    // async leave(data)
                    // {
                    //     const done = this.async()
                    //     instance.leave = await import('./moduls/Transitions/Leave.js').then(module => new module.default(data.current.container, done))
                    // },
                    // async enter(data)
                    // {
                    //     const pageAnimation = async () =>
                    //     {
                    //         if(data.next.namespace == 'home')
                    //         {
                    //             let animation = await import('./moduls/Transitions/HomeLoader.js').then(module => new module.default)
                    //         }
                    //     }

                    //     instance.enter = await import('./moduls/Transitions/Enter.js').then(module => new module.default(data.next.container, pageAnimation))
                    // }
                }
            ]
        })
        
        barba.hooks.after(async (data) =>
        {
            const restart = await import('@finsweet/ts-utils')
            restart.restartWebflow()
        })

        barba.hooks.enter( (data) =>
        {
            let videos = data.next.container.querySelectorAll('video')

            videos.forEach(function(video) 
            {
                video.load()
            })
        })
    }
}