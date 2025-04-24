import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';


//Rutas de mis vistas para poder parámetrizar con el drawer
import HomeScreen from "../screens/HomeScreen";
import Api1 from "../screens/Api1";
import Api2 from "../screens/Api2";
import Api3 from "../screens/Api3";
import Api4 from "../screens/Api4";
import Api5 from "../screens/Api5";

/*Se tipan los parámetros de las vistas para verificar si se estan enviando de manera 
correcta dichos parametros, como por ejemplo: un ID, "profile:{userId:string};".
En este caso establecemos como indefinido, ya que no necesitamos pasar parámetros a una 
ruta en especifico por el momento*/
export type DrawerParamList = {
    HomeScreen: undefined;
    Api1: undefined;
    Api2: undefined;
    Api3: undefined;
    Api4: undefined;
    Api5: undefined;
};

//Aqui le indicamos que haga uso de la lista tipada de los parámetros del drawer y evitar errores
const Drawer = createDrawerNavigator<DrawerParamList>();

//Función para crear el Drawer con Navigator
const AppNavigator = () => {
    return(
        <NavigationContainer>
            <StatusBar style="auto" />
            <Drawer.Navigator initialRouteName="HomeScreen">                
                <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{title:"Inicio"}}/>
                <Drawer.Screen name="Api1" component={Api1} options={{title:"Api1"}}/>
                <Drawer.Screen name="Api2" component={Api2} options={{title:"Api2"}}/>
                <Drawer.Screen name="Api3" component={Api3} options={{title:"Api3"}}/>
                <Drawer.Screen name="Api4" component={Api4} options={{title:"Api4"}}/>
                <Drawer.Screen name="Api5" component={Api5} options={{title:"Api5"}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;