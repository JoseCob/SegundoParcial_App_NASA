import React from "react";
import {View, Text, StyleSheet, Image, FlatList, Dimensions, Platform} from "react-native";
import {usePictureMRViewModel} from '../viewmodels/PictureMRViewModel';

//Vista del API 2 "Mars Rover Photos
const Api2 = () =>{
    const {isPictureMR, loading} = usePictureMRViewModel();

    return(
        <>
            {loading ? (
                <View></View>
            ) : isPictureMR ? (
                <>
                    <View style={styles.container}>
                        <FlatList
                        data= {isPictureMR}
                        keyExtractor = {(item) => item.id}
                        renderItem = {({item})=> (
                            <>
                                <View style={styles.contentFlat}>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={styles.itemDate}>{item.earth_date}</Text>
                                        <Text style={styles.itemSol}>Sol: {item.sol}</Text>
                                        <Image 
                                            source = {{uri: item.img_src}} 
                                            style = {{width:300, height:300, marginBottom: 8, resizeMode: 'contain', borderRadius:25}}
                                        />
                                    </View>
                                </View>
                            </>
                        )}
                        />
                    </View>
                </>
            ) : (
                <View></View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        //Estilo dedicado para web
        ...(Platform.OS === 'web'
            ? {
                marginTop: 16,
                height: Dimensions.get('window').height * 0.9,
            }
        : {}),
    },

    contentFlat: {
        marginRight: 16,
    },

    itemDate:{
        fontSize: 18,
        marginTop: 16,
    },

    itemSol:{
        fontSize: 16,
        marginBottom: 8
    }
})

export default Api2;