import { CurrentPage } from "../../Components/CurrentPage";
import ExpandingText from "../../Components/ExpandingText";
import LoadMore from "../../Components/LoadMore";
import Progress from "./js/Progress";

export default class index
{
    constructor()
    {
        CurrentPage()
        this.expandingText = new ExpandingText($('.arbaiten__title'), $('.arbaiten__descr'), $('.hero'), 500)
        this.progress = new Progress()
        this.loadMore = new LoadMore()
    }
}