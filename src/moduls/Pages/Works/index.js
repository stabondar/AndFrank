import { CurrentPage } from "../../Components/CurrentPage";
import ExpandingText from "../../Components/ExpandingText";

export default class index
{
    constructor()
    {
        CurrentPage()
        this.expandingText = new ExpandingText($('.arbaiten__title'), $('.arbaiten__descr'), $('.hero'))
    }
}