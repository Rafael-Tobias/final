import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Alert,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import styles from "./styles";

export default function App() {
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState<any>(null);
    const [startOver, setStartOver] = useState(true);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera: Camera;
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);
    const __closeCamera = () => {
        setStartOver(true);
    };
    const __takePicture = async () => {
        if (!camera) return;
        const photo = await camera.takePictureAsync();
        console.log(photo);
        setPreviewVisible(true);
        setCapturedImage(photo);
    };
    const __savePhoto = async () => {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
            try {
                const asset = await MediaLibrary.createAssetAsync(capturedImage.uri);
                MediaLibrary.createAlbumAsync("Images", asset, false)
                    .then(() => {
                        Alert.alert("Imagem salva com sucesso!");
                    })
                    .catch(() => {
                        Alert.alert("Erro ao salvar a imagem!");
                    });
            } catch (error) {
                Alert.alert(String(error));
            }
        } else {
            Alert.alert("Sem permissão para acessar os arquivos");
        }
    };
    return (
        <View style={styles.container}>
            {startOver ? (
                <View style={styles.startOver}>
                    <TouchableOpacity
                        onPress={() => setStartOver(false)}
                        style={styles.buttonStartOver}
                    >
                        <Text style={styles.textStartOver}>Tirar uma foto</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                    <View style={styles.container}>
                        {previewVisible ? (
                            <ImageBackground
                                source={{ uri: capturedImage && capturedImage.uri }}
                                style={styles.container}
                            >
                                <View style={styles.collumnPreviewVisible}>
                                    <View style={styles.rowPreviewVisible}>
                                        <TouchableOpacity
                                            onPress={() => setPreviewVisible(false)}
                                            style={styles.buttonPreviewVisible}
                                        >
                                            <Text style={styles.textPreviewVisible}>nova foto</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={__savePhoto}
                                            style={styles.buttonSavePhoto}
                                        >
                                            <Text style={styles.textPreviewVisible}>salvar a foto</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        ) : (
                                <Camera
                                    style={styles.container}
                                    type={type}
                                    ref={(r) => {
                                        if (r) camera = r;
                                    }}
                                >
                                    <View style={styles.buttonTop}>
                                        <View style={styles.buttonTopPostion}>
                                                <TouchableOpacity onPress={__closeCamera} style={styles.buttonFlip2}>
                                                    <Text style={styles.textClose}>X</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity
                                                style={styles.buttonFlip}
                                                onPress={() => {
                                                    setType(
                                                        type === Camera.Constants.Type.back
                                                            ? Camera.Constants.Type.front
                                                            : Camera.Constants.Type.back
                                                    );
                                                }}
                                            >
                                                <Text style={styles.textFlip}> Inverter </Text>
                                            </TouchableOpacity>
                                        <View style={styles.viewTakePicture}>
                                            <View style={styles.positionTakePicture}>
                                                <TouchableOpacity
                                                    onPress={__takePicture}
                                                    style={styles.buttonTakePicture}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </Camera>
                            )}
                    </View>
                )}
        </View>
    );
}