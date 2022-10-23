import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Alert
} from "react-native";

import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";
import { LoadingComp } from "../../components";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";
import { IRegister } from "../../interfaces/User.interface";
import { AxiosError } from "axios";
import { IResponse } from "../../interfaces/Response.interface";
import { useAuth } from "../../hook/auth";

export default function Cadastrar({ navigation }: LoginTypes) {
  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  const [isLoading, setIsLoading] = useState(true);
  function handleLogin() {
    navigation.navigate("Login");
  }

  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
  }

  async function handleRegister() {
    try {
        setIsLoading(true);
      if (data?.email && data.name && data.password) {
        await register(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
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
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingComp />
      ) : (
        <View style={styles.container}>
            <KeyboardAvoidingView>
              <View style={styles.viewimage}>
                <Image source={require("../../assets/favicon.png")} style={styles.imagem}/>
              </View>
              <Text style={styles.title}>CADASTRO</Text>
              <View style={styles.formRow}>
                <Ionicons name="person" style={styles.icon} />
                <TextInput 
                style={styles.input} 
                placeholder="Nome" 
                placeholderTextColor='white'
                onChangeText={(i) => handleChange({ name: i })}/>
              </View>
              <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon} />
                <TextInput
                  placeholderTextColor='white'
                  style={styles.input}
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={(i) => handleChange({ email: i })}
                />
              </View>
              <View style={styles.formRow}>
                <Entypo name="key" style={styles.icon} />
                <TextInput
                  placeholderTextColor='white'
                  style={styles.input}
                  placeholder="Senha"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  onChangeText={(i) => handleChange({ password: i })}
                />
              </View>
              <Button title="Salvar" type="secondary" onPress={handleRegister}/>
              <Button title="Voltar" type="secondary" onPress={handleLogin} />
            </KeyboardAvoidingView>
        </View>
      )}
    </>
  );
}
