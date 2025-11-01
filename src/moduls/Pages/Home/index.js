import AppendLottie from '../../Components/AppendLottie'
import LoadVideos from '../../Components/LoadVideos'
import Clients from './js/Clients'
import Counter from './js/Counter'
import Insight from './js/Insight'
import LargeText from './js/LargeText'
import Slider from './js/Slider'

export default class Page
{
    constructor()
    {
        this.slider = new Slider()
        this.largeText = new LargeText()
        this.clients = new Clients()
        this.insight = new Insight()
        this.counter = new Counter()
        this.appendLottie = new AppendLottie($('.numbers__video'), true)
    }
}
