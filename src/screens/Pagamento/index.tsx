import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Alert
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";
import { useAuth } from "../../hook/auth";
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import { AxiosError } from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({ navigation }: LoginTypes) {
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  const [isLoading, setIsLoading] = useState(true);
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }

  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }

  async function handleSignIn() {
    try {
      setIsLoading(true);
      if (data?.email && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
        setIsLoading(false);
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IUser;
      let message = "";
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
      setIsLoading(false);
    }
  }

  useEffect(() => {
  setIsLoading(false);
  }, []);

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView>
          <View style={styles.viewimage}>
            <Image source={require("../../assets/imgMercadoPago.png")} style={styles.imagem}/>
          </View>
          <View style={styles.formRow}>
            <TextInput
              placeholderTextColor='gray'
              style={styles.input}
              placeholder="E-mail ou apelido no Mercado Livre"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(i) => handleChange({ email: i })}
            />
          </View>
          <View style={styles.formRow}>
            <TextInput
              placeholderTextColor='gray'
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(i) => handleChange({ password: i })}
            />
          </View>
          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Text>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRemember}>
              <Text>Não sei a minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister}>
              <Text>Você é novo? Cadastre-se</Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
    </View>
  );
}