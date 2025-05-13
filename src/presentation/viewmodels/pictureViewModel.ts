//View Model para obtener los datos del EndPoint de PictureOfTheDay
import { useState, useEffect } from 'react';
import { getPictureOfTheDay } from '../../data/repositories/pictureOfTheDay';
import { PictureOfTheDay } from '../../domain/models/PictureOfTheDay';

export const usePictureViewModel = () => {
  const [picture, setPicture] = useState<PictureOfTheDay | any>(null);
  const [loading, setLoading] = useState<boolean>(false); //Estado para tiempo de carga de los datos

  useEffect(() => {
    //Constante para cargar los datos de la API
    const fetchData = async () => {
      setLoading(true);
      try{
        const result = await getPictureOfTheDay();
        setPicture(result);
        console.log(result);//Test para ver si carga los datos
        
      }catch(err){
        console.log("Error al cargar los datos", err);
      } finally{
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {picture, loading};
};