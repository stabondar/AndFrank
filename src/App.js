import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'

import Scroll from './moduls/Scroll.js'
import Nav from './moduls/Nav.js'

let instance = null

export default class App {
    constructor()
    {
        if(instance) return instance
        instance = this

        this.scroll = new Scroll()
        this.nav = new Nav()

        /*
        *   modules for pages
        */
       const namespace = 'barba-page'
       
       const checkPages = async () =>
       {   
            const main = $('main')

            this.title = await import('./moduls/Title.js').then(module => new module.default)
            this.utils = await import('./moduls/Utils.js').then(module => new module.default)
            this.batch = await import('./moduls/Components/Batch.js').then(module => new module.default)
            this.footer = await import('./moduls/Components/Footer.js').then(module => new module.default)
            if(main.attr(namespace) == 'home') this.page = await import('./moduls/Pages/Home/index.js').then(module => new module.default)
            if(main.attr(namespace) == 'service') this.page = await import('./moduls/Pages/Service/index.js').then(module => new module.default)
            if(main.attr(namespace) == 'arbaiten') this.page = await import('./moduls/Pages/Works/index.js').then(module => new module.default)
            if(main.attr(namespace) == 'arbaiten-inner') this.page = await import('./moduls/Pages/WorkInner/index.js').then(module => new module.default)
            if(main.attr(namespace) == 'news') this.page = await import('./moduls/Pages/News/index.js').then(module => new module.default)
            if(main.attr(namespace) == 'about') this.page = await import('./moduls/Pages/About/index.js').then(module => new module.default)
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
                    async once (data)
                    {
                        checkPages()
                        this.once = await import('./moduls/Transitions/Once.js').then(module => new module.default(data.next.container))
                    }
                },
                {
                    name: 'transition',
                    async leave(data)
                    {
                        const done = this.async()
                        instance.leave = await import('./moduls/Transitions/Leave.js').then(module => new module.default(data.current.container, done))
                    },
                    async enter(data)
                    {
                        const pageAnimation = async () =>
                        {
                            // if(data.next.namespace == 'home')
                            // {
                            //     let animation = await import('./moduls/Transitions/HomeLoader.js').then(module => new module.default)
                            // }
                        }

                        instance.enter = await import('./moduls/Transitions/Enter.js').then(module => new module.default(data.next.container, pageAnimation, checkPages))
                    }
                },
                {
                    name: 'self',
                    async leave(data)
                    {
                        const done = this.async()
                        instance.leave = await import('./moduls/Transitions/Leave.js').then(module => new module.default(data.current.container, done))
                    },
                    async enter(data)
                    {
                        const pageAnimation = async () =>
                        {
                            // if(data.next.namespace == 'home')
                            // {
                            //     let animation = await import('./moduls/Transitions/HomeLoader.js').then(module => new module.default)
                            // }
                        }

                        instance.enter = await import('./moduls/Transitions/Enter.js').then(module => new module.default(data.next.container, pageAnimation, checkPages))
                    }
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