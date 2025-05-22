//ViewModel dedicado a PictureMarsRover.ts
import { useState, useEffect } from 'react';
import { PictureMarsRover } from '../../domain/models/PictureMarsRover';
import { getPictureMarsRover } from '../../Data/repositories/pictureMarsRover';

export const usePictureMRViewModel = () => {
    const [isPictureMR, setPictureMR] = useState<PictureMarsRover | any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            try{
                const result = await getPictureMarsRover();
                setPictureMR(result);
                console.log(result);
            } catch (err){
                console.log("Error al cargar los datos de las imagenes de Mars Rover", err)
            } finally{
                setLoading(false);
            }
        };

        fetchData();
    },[]);

    return{isPictureMR, loading};
}