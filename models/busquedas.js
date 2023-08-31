import axios from 'axios'

class Busquedas {
    historial = ['Santiago', 'Madrid', 'Estocolmo'];

    constructor() {
        //TODO: leer db si existe
    }

    async city(place = '') {
  
        //http request
        const response = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Santiago.json?proximity=ip&access_token=pk.eyJ1IjoiZGFuaWliaWNoYWEiLCJhIjoiY2xsemJpaG94MDEwbzNjbTF1ZXdra2tyaiJ9.7BASe2XHNDQ_w3nlnMro9Q');
        console.log(response) 

        // retornar las ciudades 
        return [];
    }
}

export default Busquedas; 