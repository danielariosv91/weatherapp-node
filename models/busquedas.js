import axios from 'axios'

class Busquedas {
    historial = ['Santiago', 'Madrid', 'Estocolmo'];

    constructor() {
        //TODO: leer db si existe
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async city(place = '') {

        //http request
        const instance = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
            params: this.paramsMapBox
        });

        const response = await instance.get();

        console.log(response.data)

        // retornar las ciudades 
        return [];
    }
}

export default Busquedas; 