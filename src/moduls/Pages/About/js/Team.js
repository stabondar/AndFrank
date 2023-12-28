export default class Team
{
    constructor()
    {
        this.section = $('.team')
        this.list = this.section.find('.team__list')
        this.items = this.list.find('.team__item')

        this.shuffle()
    }

    shuffle()
    {
        this.items.sort(() => Math.random() - 0.5).appendTo(this.list)
    }
}