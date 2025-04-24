import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a la app de la NASA 🚀!</Text>
            <Text style={styles.subText}>Disfruta de las APIS 😊</Text>
        </View>
    );

};

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color: '#30307',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subText:{
        marginTop: 5,
        fontSize: 20,
    },
})

export default HomeScreen;