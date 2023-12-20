export default class LoadVideo
{
    constructor()
    {
        let videoParet = $('.hero__video')
        const init = () =>
        {
            if(!this.isDesktop())
            {
                let link = videoParet.find('.hero__video-mob').attr('video')

                let video = videoParet.find('.hero__video-mob').find('video')
                let img = videoParet.find('.hero__video-mob').find('img')
        
                video.append(`<source src="${link}" type="video/mp4">`)
                video[0].load()
        
                video[0].addEventListener('canplay', () => 
                {
                    video[0].play()
                    img.css('opacity', '0')
                })
            } else 
            {
                let link = videoParet.find('.hero__video-pc').attr('video')

                let video = videoParet.find('.hero__video-pc').find('video')
                let img = videoParet.find('.hero__video-pc').find('img')
        
                video.append(`<source src="${link}" type="video/mp4">`)
                video[0].load()
        
                video[0].addEventListener('canplay', () => 
                {
                    video[0].play()
                    img.css('opacity', '0')
                })            
            }
        }


        if(videoParet.find('video').length > 0)
        {
            init()
        }
    }

    isDesktop()
    {
        return window.innerWidth > 1024
    }
}