export default class LoadVideos
{
    constructor()
    {
        this.item = $('.inner-video, .section-video')

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

            if(self.attr('sound') == 'true')
            {
                this.appendButtons(self, video)
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

    appendButtons(item, video)
    {
        let div = `
        <div class="video__buttons">
            <div class="video__button" data-action="play">
                <span class="_18">Sound On</span>
                <div class="video__button-icon">
                    <svg class="video__button-play" width="100%" height="100%" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_320_4144)">
                    <path d="M7.73 4.39844L0.77 0.0833333C0.685 0.0312499 0.5975 0 0.4975 0C0.225 0 0.00249996 0.234375 0.00249996 0.520833H0V9.47917H0.00249996C0.00249996 9.76562 0.225 10 0.4975 10C0.6 10 0.685 9.96354 0.7775 9.91146L7.73 5.60156C7.895 5.45833 8 5.24219 8 5C8 4.75781 7.895 4.54427 7.73 4.39844Z" fill="currentColor"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_320_4144">
                    <rect width="8" height="10" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>                

                    <svg class="video__button-pause" width="100%" height="100%" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_320_4157)">
                    <path d="M2.25 9.68229V0.315104C2.25 0.140625 2.12344 0 1.96406 0H0.285937C0.126562 0 0 0.140625 0 0.315104V9.68229C0 9.85677 0.126562 10 0.285937 10H1.96406C2.12344 10 2.25 9.85937 2.25 9.68229Z" fill="currentColor"/>
                    <path d="M5.71406 0H4.03594C3.87891 0 3.75 0.140625 3.75 0.315104V9.68229C3.75 9.85677 3.87656 10 4.03594 10H5.71406C5.87109 10 6 9.85937 6 9.68229V0.315104C6 0.140625 5.87344 0 5.71406 0Z" fill="currentColor"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_320_4157">
                    <rect width="6" height="10" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                </div>
            </div>
        </div>
        `

        item.append(div)
        let buttonText = item.find('.video__button span')

        item.on('click', () => 
        {
            if(item.hasClass('playing'))
            {
                item.removeClass('playing')
                buttonText.text('Sound On')
                video[0].muted = true
            } else
            {
                item.addClass('playing')
                buttonText.text('Sound Off')
                video[0].muted = false
                video[0].currentTime = 0
            }
        })
    }   
}