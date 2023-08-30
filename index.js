import { inquirerMenu, leerInput, pausa } from './helpers/inquirer.js'
import Busquedas from './models/busquedas.js';

const main = async () => {
    const busquedas = new Busquedas(); 
    let opt;

    do {
        opt = await inquirerMenu();

        switch(opt) {
            case 1:
                // mostrar mensaje 
                const lugar = await leerInput('Ciudad: ');
                await busquedas.city(lugar); 

                // buscar el lugar  
        

                // seleccionar el lugar 

                // datos del clima 

                // mostrar resultados 

                console.log('Informacion de la ciudad'); 
                console.log('Ciudad:'); 
                console.log('Lat:'); 
                console.log('Lng:'); 
                console.log('Tempereatura:'); 
                console.log('Minima:'); 
                console.log('Máxima:'); 
            break; 
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0)
}


main();