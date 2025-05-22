import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { usePictureViewModel } from '../viewmodels/pictureViewModel';

//Vista del API 1 "Imagen Astronómica del Día (ÁPODO)"
const Api1 = () => {
    const { picture, loading } = usePictureViewModel();
    return (
        <View>
            {loading ? (
                <View></View>
            ) : picture ? (
                <View style={styles.container}>
                    <FlatList
                        data={[picture]} // Este es el picture transformado para 'ser un array'
                        keyExtractor={(item) => item.date} // Usa un campo único como `date` si no hay `id`
                        renderItem={({ item }) => (
                            <View style={styles.contentFlat}>
                                <Text style={{ alignSelf: 'center', margin: 16, fontSize:35 }}>{item.date}</Text>
                                <Text style={{ alignSelf: 'center', textAlign:'center', margin: 6, fontSize:25, fontWeight:600 }}>{item.title}</Text>
                                <Image
                                    style={{ width: 300, height: 300, marginBottom: 8, resizeMode: 'contain' }}
                                    source={{ uri: item.url }}
                                />
                                <Text style={{ alignSelf: 'center', marginLeft: 12, marginRight:12, fontSize:16 }}>{item.explanation}</Text>
                                
                            </View>
                        )}
                    />
                </View>
            ) : (
                <View></View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    contentFlat: {
        alignItems: 'center',
        padding: 4,
        margin: 8,
    },
});

export default Api1;