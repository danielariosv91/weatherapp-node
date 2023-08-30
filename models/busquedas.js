import axios from 'axios'

class Busquedas {
    historial = ['Santiago', 'Madrid', 'Estocolmo'];

    constructor() {
        //TODO: leer db si existe
    }

    async city(place = '') {
  
        //http request
        const response = await axios.get('https://reqres.in/api/users?page=2');
        console.log(response) 

        // retornar las ciudades 
        return [];
    }
}

export default Busquedas; 