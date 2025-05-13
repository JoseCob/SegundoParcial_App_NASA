import React from "react";
import {View, Text, StyleSheet, Image, FlatList} from "react-native";
import {usePictureViewModel} from '../../presentation/viewmodels/pictureViewModel';

//Vista del API 1 "Imagen Astronómica del Día (ÁPODO)"
const Api1 = () => {
    const {picture, loading} = usePictureViewModel();

    return(
        <>
            {loading ? (
                <></>
            ) : picture ? (
                <>
                    <View style={styles.container}>
                        <FlatList
                            data = {picture}
                            keyExtractor = {(item) => item.id.toString()}
                            renderItem={({item}) => (
                                <View style={styles.contentFlat}>
                                    <Image style={{width:100, height:100, marginBottom:8, resizeMode:'contain'}}
                                        source={{uri: item.url}} 
                                    />
                                    <Text style={{alignSelf: 'flex-start', margin:6}}>{item.explanation}</Text>
                                </View>
                            )}
                        />
                    </View>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    contentFlat:{
        alignItems: 'center',
        padding: 4,
        margin:8,
    },
});

export default Api1;