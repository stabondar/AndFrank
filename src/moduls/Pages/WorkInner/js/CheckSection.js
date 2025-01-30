export default class CheckSection
{
    constructor()
    {
        this.section = $('.section')
        this.workVideo = $('.work__video')
        this.workSplit = $('.work-split.is--with-img')

        this.checkVideos()
        this.removeInvs()
        this.removeEmptyList()
        this.removeSection()
    }

    checkVideos()
    {
        this.workVideo.each((i, el) =>
        {
            let self = $(el)
            let vimeoVideo = self.find('.w-video')
            let bgVideo = self.find('.inner-video')

            if(vimeoVideo.hasClass('w-dyn-bind-empty'))
            {
                vimeoVideo.remove()
            }

            if(bgVideo.attr('video') == '')
            {
                bgVideo.remove()
            }

            if(self.children().length < 1)
            {
                self.remove()
            }
        })

        this.workSplit.each((i, el) =>
        {
            let self = $(el)

            if(self.children().length < 1)
            {
                self.remove()
            }
        })
    }

    removeInvs()
    {
        let invs = $('.w-condition-invisible')
        invs.remove()
    }

    removeEmptyList()
    {
        this.section.each((i, el) =>
        {
            let self = $(el)

            let lists = self.find('[role="list"]')

            lists.each((i, el) =>
            {
                let self = $(el)
                let items = self.find('[role="listitem"]')

                if(items.length < 1)
                {
                    self.parent().remove()
                }
            })
        })
    }

    removeSection()
    {
        this.section.each((i, el) => {
            let self = $(el)

            let container = self.find('.container')
            if(container.length < 1) return

            let content = container.children()

            if(content.length < 1)
            {
                self.remove()
            }
        })
    }
}