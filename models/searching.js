import fs from 'fs';
import axios from 'axios'

class Searching {
    historial = [];
    databasePath = './database/database.json'

    constructor() {
        this.readDatabase();
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
                description: weather.description,
                min: main.temp_min,
                max: main.temp_max,
                temperature: main.temp
            }

        } catch (error) {

        }
    }

    addHistorySearch = (place = '') => {
        if (this.historial.includes(place.toLowerCase())) return;

        this.historial.unshift(place);

        this.saveOnDatabase();
    }

    saveOnDatabase = () => {
        const payload = {
            historial: this.historial
        }

        fs.writeFileSync(this.databasePath, JSON.stringify(payload))
    }

    readDatabase = () => {

        /** If database or file exists */
        if (!fs.existsSync(this.databasePath)) return;

        /** Read file */
        const info = fs.readFileSync(this.databasePath, { encoding: 'utf-8' }); 
        const data = JSON.parse(info);

        this.historial = data.historial;
    }
}

export default Searching; 