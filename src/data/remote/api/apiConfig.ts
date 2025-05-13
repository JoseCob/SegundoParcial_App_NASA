//Configuración para las APIS de la Nasa
import axios from 'axios'; //Nos permite hacer consultas con APIS
import Constants from 'expo-constants'; //Otorga acceso a valores de configuración de la app en tiempo de ejecución desde app.json
//Esta constante accede a la Clave Secreta del apartado "extra" desde app.json utilizando expo
const { NASA_API_KEY } = Constants.expoConfig?.extra ?? {};

const apiConfig = axios.create({
    baseURL: 'https://api.nasa.gov',
    params: {
        api_key: NASA_API_KEY, //Clave Secreta del app.json
    },
    timeout: 6000,
});

export default apiConfig;