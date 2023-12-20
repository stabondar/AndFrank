import { CurrentPage } from "../../Components/CurrentPage";
import ExpandingText from "../../Components/ExpandingText";
import LoadMore from "../../Components/LoadMore";

export default class index
{
    constructor()
    {
        CurrentPage()
        this.expandingText = new ExpandingText($('.arbaiten__title'), $('.arbaiten__descr'), $('.hero'), 380)
        this.loadMore = new LoadMore()
    }
}