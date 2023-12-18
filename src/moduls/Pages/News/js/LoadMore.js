import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export default class LoadMore
{
    constructor()
    {
        this.imorts()
        let filters = $('.news__next')
        // let items

        filters.on('click', () => 
        {
            setTimeout(() =>
            {   
                ScrollTrigger.refresh()
            }, 400)
        })
    }

    imorts()
    {
        function loadScriptsBasedOnDate(date) {
            // Construct the URLs for the scripts based on the date
            const loadScriptURL = `https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js?${date}`;
        
            // Dynamically import the scripts
            Promise.all([import(loadScriptURL)])
                .then(([filterModule, loadModule]) => {
                    // console.log(`Scripts for date ${date} loaded successfully`);
                })
                .catch((error) => {
                    // console.error(`Error loading scripts for date ${date}: ${error}`);
                });
        }
        
        // Usage: Call loadScriptsBasedOnDate with the desired date
        const date = new Date().getMilliseconds(); // Replace this with your date logic
        loadScriptsBasedOnDate(date);
    }
}

