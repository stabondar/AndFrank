import { CurrentPage } from "../../Components/CurrentPage";
import ExpandingText from "../../Components/ExpandingText";
import LoadMore from "./js/LoadMore";
import Progress from "./js/Progress";

export default class index
{
    constructor()
    {
        CurrentPage()
        this.expandingText = new ExpandingText($('.arbaiten__title'), $('.arbaiten__descr'), $('.hero'))
        this.progress = new Progress()
        this.loadMore = new LoadMore()
    }
}