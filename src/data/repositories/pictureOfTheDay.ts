import apiConfig from '../remote/api/apiConfig';
import { NASA_ENDPOINTS } from '../remote/api/endPointsNasa'; //EndPoints de la aplicación
import { PictureOfTheDay  } from '../../domain/models/PictureOfTheDay'; //Modelo de datos de la API 1

//Constante que se conecta con la API de la Nasa con la promesa del modelo del dato("models")
export const getPictureOfTheDay = async (): Promise<PictureOfTheDay> => {
    //Pasamos la respuesta del EndPoint del API 1 "Imagen Astronómica del Día (ÁPODO)"
    const response = await apiConfig.get(NASA_ENDPOINTS.pictureOfTheDay);
    return response.data;
};