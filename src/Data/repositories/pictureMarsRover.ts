import apiConfig from '../remote/api/apiConfig';
import { NASA_ENDPOINTS } from '../remote/api/endPointsNasa'; //EndPoints de la aplicación
import { PictureMarsRover  } from '../../domain/models/PictureMarsRover'; //Modelo de datos de la API 2

//Constante que se conecta con la API de la Nasa con la promesa del modelo del dato("models")
export const getPictureMarsRover = async (): Promise<PictureMarsRover[]> => {
    //Pasamos el EndPoint de API 2 "Mars Rover Photos"
    const response = await apiConfig.get(NASA_ENDPOINTS.galleryMarsRover,{
        params:{
            earth_date:'2020-07-01',
        },
    });
    return response.data.photos;
};