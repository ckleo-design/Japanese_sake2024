const source = document.getElementById('restaurantsList1').innerHTML;
const template = Handlebars.compile(source);
const value = {
    restaurantsListPeriod1 : [
        {alink:'cicheti.html', logo:'../assets/images/page/restaurants/logo-cicheti.png'},
        {alink:'caviar.html', logo:'../assets/images/page/restaurants/logo-caviar.png'},
        {alink:'foliage.html', logo:'../assets/images/page/restaurants/logo-foliage.png'},
        {alink:'juice.html', logo:'../assets/images/page/restaurants/logo-juice.png'},
        {alink:'lerouy.html', logo:'../assets/images/page/restaurants/logo-lerouy.png'},
        {alink:'luka.html', logo:'../assets/images/page/restaurants/logo-luka.png'},
        {alink:'morsels.html', logo:'../assets/images/page/restaurants/logo-morsels.png'},
        {alink:'nou.html', logo:'../assets/images/page/restaurants/logo-nou.png'},
        {alink:'odette.html', logo:'../assets/images/page/restaurants/logo-odette.png'},
        {alink:'khiri.html', logo:'../assets/images/page/restaurants/logo-khiri.png'},
        {alink:'TheOysterBank.html', logo:'../assets/images/page/restaurants/logo-bank.png'},
        {alink:'trattoria.html', logo:'../assets/images/page/restaurants/logo-ladoro.png'},
        {alink:'whitegrass.html', logo:'../assets/images/page/restaurants/logo-whitegrass.png'},
    ]
};
const compiledHtml = template(value);
const fill = document.getElementById('period1__list');
fill.innerHTML = compiledHtml;

const sourceP2 = document.getElementById('restaurantsList2').innerHTML;
const templateP2 = Handlebars.compile(sourceP2);
const valueP2 = {
    restaurantsListPeriod2 : [
        {alink:'OpenFarmCommunity.html', logo:'../assets/images/page/restaurants/logo-openfarm.png'},
        {alink:'terra.html', logo:'../assets/images/page/restaurants/logo-terra.png'},
        {alink:'tess.html', logo:'../assets/images/page/restaurants/logo-tess.png'},

    ]
};
const compiledHtmlP2 = templateP2(valueP2);
const fillP2 = document.getElementById('period2__list');
fillP2.innerHTML = compiledHtmlP2;
