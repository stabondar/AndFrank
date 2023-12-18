import { CurrentPage } from "../../Components/CurrentPage";
import AppendLottie from "../../Components/AppendLottie";

export default class index
{
    constructor()
    {
        CurrentPage()
        this.appendLottie = new AppendLottie($('.agency__lottie'))
    }
}