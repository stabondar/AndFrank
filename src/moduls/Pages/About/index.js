import { CurrentPage } from "../../Components/CurrentPage";
import ChangeColor from "../../Components/ChangeColor";
import Clients from "./js/Clients";

export default class index
{
    constructor()
    {
        CurrentPage()
        this.changeTheme = new ChangeColor()
        this.clients = new Clients()
    }
}