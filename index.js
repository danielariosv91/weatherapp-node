import 'dotenv/config.js';

import { inquirerMenu, leerInput, pausa, placesList } from './helpers/inquirer.js'
import Searching from './models/busquedas.js';

const main = async () => {
    const searching = new Searching();
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // show message
                const criteria = await leerInput('Ciudad: ');

                // fins places
                const places = await searching.city(criteria);

                // select place
                const id = await placesList(places);
                const selectedPlace = places.find(place => place.id === id);

                // get weather 
                const weather = await searching.weatherPlace(selectedPlace.lat, selectedPlace.lng);

                console.log('City Info');
                console.log('City: ' + selectedPlace.name);
                console.log('Lat: ' + selectedPlace.lat);
                console.log('Lng: ' + selectedPlace.lng);
                console.log('Temperature:' + weather.temperature);
                console.log('Minimun: ' + weather.min);
                console.log('Máximun: ' + weather.max);
                break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0)
}


main();