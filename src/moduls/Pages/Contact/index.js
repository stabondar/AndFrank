import { CurrentPage } from "../../Components/CurrentPage";
import Map from "./js/Map";

export default class index
{
    constructor()
    {
        CurrentPage()
        this.map = new Map()
    }
}