import { CurrentPage } from "../../Components/CurrentPage";
import Accordion from "../../Components/Accordion";
import Insight from "../Home/js/Insight";
import AddCopyText from "../../Components/AddCopyText";

export default class index
{
    constructor()
    {
        CurrentPage()
        this.insight = new Insight()
        this.accordion = new Accordion()

        $('.services__top--title').each((i,el) =>
        {
            this.addCopy = new AddCopyText($(el))
        })
    }
}