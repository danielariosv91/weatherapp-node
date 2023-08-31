import 'dotenv/config.js';

import { inquirerMenu, leerInput, pausa, placesList } from './helpers/inquirer.js'
import Busquedas from './models/busquedas.js';

const main = async () => {
    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // show message
                const criteria = await leerInput('Ciudad: ');

                // fins places
                const places = await busquedas.city(criteria);

                // seleccionar el lugar 
                const id = await placesList(places);
                const selectedPlace = places.find(place => place.id === id);

     
                console.log('Informacion de la ciudad');
                console.log('Ciudad: ' + selectedPlace.name);
                console.log('Lat: ' + selectedPlace.lat);
                console.log('Lng: ' + selectedPlace.lng);
                console.log('Tempereatura:');
                console.log('Minima:');
                console.log('Máxima:');
                break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0)
}


main();