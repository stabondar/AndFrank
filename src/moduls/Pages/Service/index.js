import Accordion from "../../Components/Accordion";
import AddCopyText from "../../Components/AddCopyText";
import { CurrentPage } from "../../Components/CurrentPage";
import LoadVideo from "./js/LoadVideo";

export default class index
{
    constructor()
    {
        this.accordion = new Accordion()
        this.loadVideo = new LoadVideo()
        CurrentPage()

        $('.services__top--title').each((i,el) =>
        {
            this.addCopy = new AddCopyText($(el))
        })
    }
}