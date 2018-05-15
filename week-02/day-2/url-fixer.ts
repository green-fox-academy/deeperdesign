'use strict';

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

if (url.indexOf( "//" ) === 5) {
    let urlSplitted: string [] = url.split('');
    urlSplitted.splice(5, 0, ":");
    url = urlSplitted.join('');
}
console.log(url.replace('bots', 'odds'));
