import Clients from "./js/Clients";
import Counter from "./js/Counter";
import Insight from "./js/Insight";
import LargeText from "./js/LargeText";
import Slider from "./js/Slider";

export default class Page
{
    constructor()
    {
        this.slider = new Slider()
        this.largeText = new LargeText()
        this.clients = new Clients()
        this.insight = new Insight()
        this.counter = new Counter()
    }
}