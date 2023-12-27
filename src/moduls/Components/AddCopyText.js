import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default class AddCopyText
{
    constructor(item)
    {
        this.item = item
        this.currentText = this.item.children()

        this.init()
    }

    splitIt()
    {
        this.split = new SplitText(this.currentText, {type: 'chars, words', charsClass: 'char'})

        $(this.split.chars).each((i, el) => 
        {
            let char = $(el)

            char.css('--delay', `${i * 0.02}s`)
        })
    }

    init()
    {
        this.splitIt()
        let copy = this.currentText.clone().addClass('italic')
        this.item.append(copy)
    }
}