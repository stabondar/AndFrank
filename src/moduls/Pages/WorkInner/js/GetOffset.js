export default class GetOffset
{
    constructor()
    {
        this.ruller = $('.work__services--item').eq(0)
        this.rullerParent = this.ruller.closest('.container')
        this.descr = $('.work__descr')

        this.getOffset()
        window.addEventListener('resize', () => this.getOffset())
    }

    getOffset()
    {
        let rullerOffset = this.ruller.offset().top
        let rullerParentOffset = this.rullerParent.offset().top
        let offset = rullerOffset - rullerParentOffset

        this.descr.css('--top', offset + 'px')
    }
}