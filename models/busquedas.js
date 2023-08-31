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
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapBox
            });

            const response = await instance.get();

            return response.data.features.map(item => ({
                id: item.id, 
                name: item.place_name, 
                lng: item.center[0], 
                lat: item.center[1]
            }))
        } catch (error) {
            return [];
        }
        // retornar las ciudades 
        //return [];
    }
}

export default Busquedas; 