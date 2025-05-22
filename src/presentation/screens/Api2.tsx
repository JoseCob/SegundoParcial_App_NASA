import React from "react";
import {View, Text, StyleSheet, Image, FlatList} from "react-native";
import {usePictureMRViewModel} from '../viewmodels/PictureMRViewModel';

//Vista del API 2 "Mars Rover Photos
const Api2 = () =>{
    const {isPictureMR, loading} = usePictureMRViewModel();

    return(
        <>
            {loading ? (
                <></>
            ) : isPictureMR ? (
                <>
                    <View>
                        <FlatList
                        data= {[isPictureMR]}
                        keyExtractor = {(item) => item.id}
                        renderItem = {({item})=> (
                            <>
                                <View style={styles.contentFlat}>
                                    <Text>{item.name}</Text>
                                    <Image 
                                        source = {{uri: item.img_src}} 
                                        style = {{width:300, height:300, marginBottom: 8, resizeMode: 'contain'}}
                                    />
                                    <Text>{item.earth_date}</Text>
                                </View>
                            </>
                        )}
                        />
                    </View>
                </>
            ):(
                <></>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {

    },

    contentFlat: {

    }
})

export default Api2;