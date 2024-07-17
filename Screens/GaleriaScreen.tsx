import { useState } from 'react';
import { TouchableOpacity, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../config/Config';

export default function GaleriaScreen() {
    const [image, setImage] = useState("");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    async function subir() {
        const storageRef = ref(storage, 'avatars/' + "temporal");

        const response = await fetch(image);
        const blob = await response.blob();

        uploadBytes(storageRef, blob).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }

    return (
        <ImageBackground source={{ uri: 'https://www.icegif.com/wp-content/uploads/2023/08/icegif-217.gif' }}
            style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.boton} onPress={pickImage}>
                    <Image source={{ uri: 'https://example.com/pacman_button_image.png' }} style={styles.botonImagen} />
                    <Text style={styles.botonTexto}>Buscar Imagen</Text>
                </TouchableOpacity>
                <Image source={{ uri: image }} style={styles.image} />
                <TouchableOpacity style={styles.boton} onPress={() => subir()}>
                    <Image source={{ uri: 'https://example.com/pacman_button_image.png' }} style={styles.botonImagen} />
                    <Text style={styles.botonTexto}>Subir Imagen</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        margin: 20,
        borderColor: '#FFD700', 
        borderWidth: 3,
    },
    boton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000', 
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFD700', 
    },
    botonImagen: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    botonTexto: {
        color: '#FFD700', 
        textAlign:"center",
        justifyContent:"center",
        fontWeight: 'bold',
        fontSize: 20,
    }
});
