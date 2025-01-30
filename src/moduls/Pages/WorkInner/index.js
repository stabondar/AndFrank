import { CurrentPage } from "../../Components/CurrentPage";
import LoadVideos from "../../Components/LoadVideos";
import Accordion from "./js/Accordion";
import AspectRatio from "./js/AspectRatio";
import CheckSection from "./js/CheckSection";
import GetOffset from "./js/GetOffset";
import NextProject from "./js/NextProject";

export default class index
{
    constructor()
    {
        CurrentPage()
        this.accordion = new Accordion()
        this.aspectRatio = new AspectRatio()
        this.nextProject = new NextProject()
        this.getOffset = new GetOffset()
        this.checkSection = new CheckSection()
    }
}