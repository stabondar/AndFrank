import {Loader} from 'google-maps';

export default class Map
{
    constructor()
    {
        this.init()
    }

    async init()
    {
        this.loader = new Loader('AIzaSyDHRT2CqoCd3XuZgrtlPUxMb84vl2n061g');
 
        this.google = await this.loader.load();
        this.map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
        });
    }
}