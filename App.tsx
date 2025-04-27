import React, { useState } from 'react';
import LoadScreen from './src/presentation/screens/LoadScreen';
import AppNavigator from './src/presentation/navigation/AppNavigator';

export default function App() {
  const [isReady, setIsReady] = useState(false); //Establecemos la pantalla de carga en falso

  //Aqui hacemos que inicie la animación de carga cuando se ejecute la apliación
  if (!isReady) {
    return <LoadScreen onFinish={() => setIsReady(true)} />;
  }

  return <AppNavigator />;
}