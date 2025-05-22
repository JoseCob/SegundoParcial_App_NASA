//Archivo que servira de intermediario para obtener datos del data/repositories con domain/models
import { PictureOfTheDay } from '../models/PictureOfTheDay';
import { PictureMarsRover } from '../models/PictureMarsRover';

//Hacemos que simplemente pueda obtener datos sin llamar o consultarcelo a la API, sino directamente con el modelo de datos
export interface NasaRepositories {
    //Repositorio de "pictureOfTheDay.ts" relacionado con el modelo de datos de "PictureOfTheDay.ts"
    getPictureOfTheDay(): Promise<PictureOfTheDay>;
}

//Obtenemos los datos de la API2 de su modelo
export interface NasaRepositories{
    getPictureMarsRover():Promise<PictureMarsRover>;
}