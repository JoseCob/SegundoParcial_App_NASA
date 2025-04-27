//Aqui se creara una animacion de carga para el HomeScreen con Reanimated 3
import React, {useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import Animated, {useSharedValue, useAnimatedStyle, withTiming, Easing, runOnJS} from "react-native-reanimated";

//Función que controla la llamada de la acción para la animación
type Props = {
    onFinish: () => void;
};

//Funcion que espera la propiedad OnFinish para ejecutar la animación en HomeScreen
const LoadScreen:React.FC<Props> = ({onFinish}) => {
    const scale = useSharedValue(0.5);
    const opacity = useSharedValue(0);

    //Se construye la animación
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value,
      }));

      //Se establece el tiempo(duración) de la animación
      useEffect(() => {
        opacity.value = withTiming(1, { duration: 800 });
        scale.value = withTiming(1, {
          duration: 2500,
          easing: Easing.out(Easing.exp), //Animación que la detiene suavemente
        }, () => {
          runOnJS(onFinish)(); //Aseguramos que se ejecute la animación de forma correcta y evitar posibles errores
        });
      }, []);

    return(
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyle]}>
                <Text style={styles.text}>🚀</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: '#1f1f1f',
      padding: 30,
      borderRadius: 20,
    },
    text: {
      color: '#fff',
      fontSize: 24,
    },
});

export default LoadScreen;