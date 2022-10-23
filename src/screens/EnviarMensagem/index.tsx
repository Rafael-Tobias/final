import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    ImageBackground,
    Image,
    Alert,
    TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {ButtonComp,LoadingComp} from "../../components";
import styles from "./styles";
import { ChatTypes } from "../../types/Screen.types";
import { AxiosError } from "axios";
import { IResponse } from "../../interfaces/Response.interface";
import { apiMensagem, apiTopico} from "../../services/data";
import { ITopicoState, ITopicoServer } from "../../interfaces/Topico.interface";
import MultiSelect from "react-native-multiple-select";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { IMensagem } from "../../interfaces/Mensagem.interface";
import colors from "../../styles/colors";

export default function EnviarMensagem({ navigation }: ChatTypes) {
    const [data, setData] = useState<IMensagem>();
    const [isLoading, setIsLoading] = useState(true);
    const [topico, setTopico] = useState<ITopicoState[]>([]);
    const [selectedTopico, setSelectedTopico] = useState([])
    const [startOver, setStartOver] = useState(true);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState<any>(null);
    
    let camera: Camera;
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
    const takePicture = async () => {
        if (!camera) return;
        const options = { quality: 0.5, base64: true };
        const photo = await camera.takePictureAsync(options);
        setData({ ...data, imagem: photo });
        setStartOver(true);
    };
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [3, 3],
            quality: 0.5,
        });

        if (!result.cancelled) {
            setData({ ...data, imagem: result });
        }
    };

    function handleVoltar() {
        navigation.navigate("Chat");
    }
    function handleChange(item: IMensagem) {
        setData({ ...data, ...item });
    }
    async function handleSubmit() {
        try {
            setIsLoading(true);
            if (data?.titulo && data.mensagem && selectedTopico && data.imagem) {
                const imageName = data.imagem.uri?.split("/").pop();
                const formData = new FormData();
                formData.append("imagem", data.imagem.base64);
                if (imageName) {
                    formData.append("file", imageName);
                }
                
                formData.append("titulo", data.titulo);
                formData.append("mensagem", data.mensagem);
                selectedTopico.forEach((e) => {
                    formData.append("topico[]", e);
                });
                await apiMensagem.store(formData as IMensagem);
                navigation.navigate("Chat");
            } else {
                Alert.alert("Preencha todos os campos!!!");
                setIsLoading(false);
            }
        } catch (error) {
            const err = error as AxiosError;
            const data = err.response?.data as IResponse;
            let message = "";
            if (data.data) {
                for (const [key, value] of Object.entries(data.data)) {
                    message = `${message} ${value}`;
                }
            }
            Alert.alert(`${data.message} ${message}`);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        async function loadTopico() {
            const response = await apiTopico.index();
            const topicosServer = response.data.data.map((item: ITopicoServer) => ({
                id: item.id,
                name: item.topico,
            }));
            setTopico(topicosServer)
        }
        loadTopico();
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingComp />
            ) : (
                <ImageBackground
                    source={require("../../assets/fundo.png")}
                    style={styles.container}
                >
                    {startOver ? (
                        <KeyboardAvoidingView style={styles.containerForm}>
                            <View style={styles.viewimage}>
                                <Image source={require("../../assets/favicon.png")} style={styles.imagem2}/>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Título"
                                onChangeText={(i) => handleChange({ titulo: i })}
                                placeholderTextColor='white'
                            />
                            <TextInput
                                style={styles.input}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Mensagem"
                                onChangeText={(i) => handleChange({ mensagem: i })}
                                placeholderTextColor='white'
                            />
                            <View style={styles.select}>
                                <MultiSelect
                                    items={topico}
                                    uniqueKey="id"
                                    selectText="Selecione os Tópicos "
                                    onSelectedItemsChange={(i) => setSelectedTopico(i)}
                                    selectedItems={selectedTopico}
                                    selectedItemTextColor={colors.secondary}
                                    tagBorderColor={colors.secondary}
                                    tagTextColor={colors.secondary}
                                    submitButtonColor={colors.secondary}
                                    styleDropdownMenu={styles.selectTopico}
                                    styleInputGroup={styles.selectTopico}
                                />
                            </View>
                            <View style={styles.imagem}>
                                <TouchableOpacity
                                    style={styles.buttonImage}
                                    onPress={() => setStartOver(false)}
                                >
                                    <FontAwesome name="camera" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonImage}
                                    onPress={pickImage}
                                >
                                    <FontAwesome name="image" size={24} color="white" />
                                </TouchableOpacity>
                                {data?.imagem && (
                                    <Image source={{ uri: data.imagem.uri }} style={styles.img} />
                                )}
                            </View>
                            <ButtonComp
                                title="Salvar"
                                    type="primary"
                                onPress={handleSubmit}
                            />
                            <ButtonComp
                                title="Voltar"
                                type="third"
                                onPress={handleVoltar}
                            />
                        </KeyboardAvoidingView>
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
                </ImageBackground>
                
            )}
        </>
    );

}