export default class LoadVideos
{
    constructor()
    {
        this.item = $('.inner-video')

        this.item.each((i,el) =>
        {
            let self = $(el)
            let video = self.find('video')
            let img = self.find('img')
            let link = self.attr('video')

            if(link != undefined && link != '')
            {
                this.init(self, video, img, link)
            }
        })
    }

    init(self, video, img, link)
    {
        video.append(`<source src="${link}" type="video/mp4">`)
        video[0].load()

        video[0].addEventListener('canplay', () => 
        {
            video[0].play()
            img.css('opacity', '0')
        })
    }
}