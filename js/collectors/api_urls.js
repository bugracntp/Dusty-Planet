
export const urls = function(rover = null, sol = null){
    return{
        weather:'https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json',
        rInfo:  `https://mars-photos.herokuapp.com/api/v1/manifests/${rover}`,
        lPhoto: 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos',
        nPhoto: `https://mars-photos.herokuapp.com/api/v1/rovers/${rover}/photos?sol=${sol}`}
};