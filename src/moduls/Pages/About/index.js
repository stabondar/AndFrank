import { CurrentPage } from "../../Components/CurrentPage";
import ChangeColor from "../../Components/ChangeColor";
import Clients from "./js/Clients";
import Slider from "./js/Slider";
import Team from "./js/Team";

export default class index
{
    constructor()
    {
        CurrentPage()
        this.changeTheme = new ChangeColor()
        this.clients = new Clients()
        this.slider = new Slider()
        this.team = new Team()
    }
}