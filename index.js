import 'dotenv/config.js';

import { inquirerMenu, leerInput, pausa, placesList } from './helpers/inquirer.js'
import Searching from './models/searching.js';

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

                if (id === '0') continue;

                const selectedPlace = places.find(place => place.id === id);

                /** Save place selected */
                searching.addHistorySearch(selectedPlace.name);

                /** Get Weather */
                const weather = await searching.weatherPlace(selectedPlace.lat, selectedPlace.lng);

                console.log('City Info');
                console.log('City: ' + selectedPlace.name);
                console.log('Lat: ' + selectedPlace.lat);
                console.log('Lng: ' + selectedPlace.lng);
                console.log('Temperature:' + weather.temperature);
                console.log('Minimun: ' + weather.min);
                console.log('Máximun: ' + weather.max);
                break;
            case 2:
                searching.historial.forEach((place, i) => {
                    console.log(`${i + 1} ${place}`)
                })

                break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0)
}


main();