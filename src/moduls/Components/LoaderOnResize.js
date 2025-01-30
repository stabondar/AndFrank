export default class LoaderOnResize
{
    constructor()
    {
        window.addEventListener('resize', () => 
        {
            if(window.innerWidth < 480)
            {
                $('.loader').css('display', 'none')
            }
        })
    }
}