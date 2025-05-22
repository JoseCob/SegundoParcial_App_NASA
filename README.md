# App Movil/Web que consume distintas APIS publicas de la NASA con React Native + Expo con arquitectura CLEAN, MVVM, principios SOLID, Patrones de diseño y Buenas prácticas

## Enlace que se utilizo para consumir las APIS de la NASA: https://api.nasa.gov/

## -- DEPENDENCIAS UTILIZADAS EN ESTE PROYECTO -- 
### 1.- Dependencia necesaria para desarrollo web con Expo Go
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install react-dom react-native-web @expo/metro-runtime`_

### 2.- Dependencia necesaria para mejorar el rendimiento en la navegación, consumir menos memoria y para el manejo de animaciones. 
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated`_

### 3.- Dependencia Principal para navegación nativa
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install @react-navigation/native`_

### 4.- Dependencia necesaria para navegación bottom-tabs
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install @react-navigation/bottom-tabs`_

### 5.- Dependencia necesaria para navegación native-stack
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install @react-navigation/native-stack`_

### 6.- Dependencia necesaria para navegación drawer
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install @react-navigation/drawer`_

### 7.- Dependencia necesaria para consumir las APIS
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install axios`_

### 8.- Dependencia necesaria para manejar el estado global de la app con redux
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install @reduxjs/toolkit react-redux`_

### 9.- Dependencia necesaria para persistencia de datos con AsyncStorage
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install @react-native-async-storage/async-storage`_

### 10.- Dependencia necesaria para validaciones de formularios avanzados
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install formik yup`_

### 11.- Dependencia necesaria para otorga acceso a valores de configuración de la app en tiempo de ejecución desde app.json
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install expo-constants`_

## - Intrucciones -
Para usar todas estas dependencias en nuestro dispositivo, ejecute en la terminal estando ubicado la ruta principal del archivo:
- _`npx expo install`_
> Este proceso asegura que todas las dependencias necesarias para ejecutar este proyecto se instalen correctamente en el nuevo entorno de trabajo con las versiones utilizadas en el package.json.

## -- Para poder ejecutar el proyecto --
Escribe lo siguiente en la consola/terminal, estando en la ruta raíz del proyecto:
- _`npm start`_ / _`npx expo start`_

### Seleccionamos en donde queremos renderizar el proyecto, ya sea en la web o en la app de expo GO, pulsando la tecla correspondiente para su ejecución que se muestra por la terminal de windows
> Si se ejecutara el proyecto en un celular fisico o en el emulador, hay que tenerlo configurado para renderizar la apliación con expo Go antes de presionar la tecla "a"

> En caso de seleccionar web presionando la tecla "w". Automaticamente se nos abrira el navegador predeterminado del sistema ejecutando nuestra app enfocado a web.

### Imagen de ejemplo de la terminal de windows, mostrando el menú para seleccionar el modo de renderización del proyecto
<p align="center">
  <img src="https://github.com/user-attachments/assets/31784924-1b08-4004-9498-149573e7b692"/>
</p>

## Imágenes del proyecto en web y móvil
### Pantalla de carga
![Captura de pantalla (582)](https://github.com/user-attachments/assets/511efd0d-7a02-48af-b7ac-2c6409ad5d25)

<p align="center">
  <img src="https://github.com/user-attachments/assets/3d9f05a5-705d-40bf-bc1d-732c172eaa11" width="400" />
</p>

### Pantalla de Inicio
![Captura de pantalla (583)](https://github.com/user-attachments/assets/99942b65-8a51-46a5-9f08-bb7b9aa1681a)

<p align="center">
  <img src="https://github.com/user-attachments/assets/527eb60a-c99c-4177-b720-0b1a5b231cdc" width="400" />
</p>

### Pantalla de API 1
![Captura de pantalla (584)](https://github.com/user-attachments/assets/b9c9d87d-f3ef-479f-b0ea-8d0451a3845a)

<p align="center">
  <img src="https://github.com/user-attachments/assets/bb2efb01-8a65-4f03-9736-af7de7ec32de" width="400" />
</p>

### Pantalla de API 2
![Captura de pantalla (585)](https://github.com/user-attachments/assets/08db3d2d-ee23-4cbe-8277-9443b588752e)

<p align="center">
  <img src="https://github.com/user-attachments/assets/a363af6b-3aad-4dc6-82cb-d868ccc01c4f" width="400" />
</p>
