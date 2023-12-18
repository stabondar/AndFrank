export const CurrentPage = () =>
{
    const currentClass = 'w--current'
    const main = $('main')
    const page = main.attr('page')
    const dropItem = $('.nav__tab')

    dropItem.removeClass(currentClass)

    if(page == 'brand') dropItem.eq(0).addClass(currentClass)
    if(page == 'healthcare') dropItem.eq(1).addClass(currentClass)
    if(page == 'about') dropItem.eq(2).addClass(currentClass)
}