import Accordion from "../../Components/Accordion";
import AddCopyText from "../../Components/AddCopyText";
import { CurrentPage } from "../../Components/CurrentPage";

export default class index
{
    constructor()
    {
        this.accordion = new Accordion()
        CurrentPage()

        $('.services__top--title').each((i,el) =>
        {
            this.addCopy = new AddCopyText($(el))
        })
    }
}