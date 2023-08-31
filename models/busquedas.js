import axios from 'axios'

class Searching {
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

    get paramsWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            language: 'es'
        }
    }

    async city(place = '') {
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
    }

    async weatherPlace(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsWeather, lat, lon }
            })

            const response = await instance.get();
            const { weather, main } = response.data;

            return {
                descripcion: weather.description, 
                min: main.temp_min, 
                max: main.temp_max, 
                temperature: main.temp
            }

        } catch (error) {

        }
    }
}

export default Searching; 