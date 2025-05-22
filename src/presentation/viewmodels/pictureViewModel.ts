//View Model para obtener los datos del EndPoint de PictureOfTheDay
import { useState, useEffect } from 'react';
import { PictureOfTheDay } from '../../domain/models/PictureOfTheDay';
import { getPictureOfTheDay } from '../../Data/repositories/pictureOfTheDay';

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