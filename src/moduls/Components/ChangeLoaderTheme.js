export const changeLoaderTheme = () =>
{
    let classes = ['dark-blue', 'dark-green', 'dark-red', 'light-blue', 'light-green', 'light-red',];
    let randomClass

    const forceRepaint = () => 
    {    
        let animationFrameId = window.requestAnimationFrame(() => 
        {
            window.cancelAnimationFrame(animationFrameId);
        })
    }
    
    // Remove old clasees
    classes.forEach(item => $('.loader').removeClass(item))
    // Get new Random
    randomClass = classes[Math.floor(Math.random() * classes.length)]
    $('.loader').addClass(randomClass)

    forceRepaint();
}