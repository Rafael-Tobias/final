import React from "react";
import { Text, StyleSheet } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { ChatScreen, MapScreen, PerfilScreen, SairScreen, CameraScreen, ArquivoScreen, QrCodeScreen, VideoAudioScreen } from "../screens";
import DrawerNavigation from "./drawer.navigation";
import ChatNavigation from "./chat.navigation";
import MapNavigation from "./map.navigation";

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
    return (
        <Drawer.Navigator
                screenOptions={{
                    headerShown: true,
                    headerStyle: { backgroundColor: colors.third},
                    headerTintColor: 'white',
                    drawerStyle: {
                        backgroundColor: colors.third,
                    },
                    drawerInactiveTintColor: colors.black,
                    drawerActiveTintColor: colors.white,
                }}
            >
            <Drawer.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    drawerLabel: "Perfil",
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.primary} />
                    )
                }}
            />
            {/* <Drawer.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    drawerLabel: "Chat",
                    drawerIcon: () => (
                        <Ionicons name="chatbubbles" size={24} color={colors.primary} />
                    ),
                }}
            /> */}
            <Drawer.Screen
                name="Mapa"
                component={MapNavigation}
                options={{
                    drawerLabel: "Mapa",
                    drawerIcon: () => (
                        <Ionicons name="map" size={24} color={colors.primary} />
                    ),
                }}
            />
            
            <Drawer.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                    drawerLabel: "Camera",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="camera"
                            size={24}
                            color={colors.primary}
                        />
                    ),
                }}
            />
            

            {/* <Drawer.Screen
                name="Arquivos"
                component={ArquivoScreen}
                options={{
                    drawerLabel: "Arquivos",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="file-account"
                            size={24}
                            color={colors.primary}
                        />
                    ),
                }}
            />   */}

            {/* <Drawer.Screen
                name="QrCode"
                component={QrCodeScreen}
                options={{
                    drawerLabel: "Qrcode",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={24}
                            color={colors.primary}
                        />
                    ),
                }}
            />   */}

            <Drawer.Screen
                name="ChatNavigation"
                component={ChatNavigation}
                options={{
                    drawerLabel: "Chat",
                    title: "Chat",
                    drawerIcon: () => (
                        <Ionicons name="chatbubbles" size={24} color={colors.primary}/>
                    ),
                }}
            />  
            <Drawer.Screen
                name="Sair"
                component={SairScreen}
                options={{
                    drawerLabel: "Sair",
                    drawerIcon: () => (
                        <Ionicons name="exit" size={24} color='red' />
                    ),
                }}
            />


            {/* <Drawer.Screen
                name="AudioVideo"
                component={VideoAudioScreen}
                options={{
                    drawerLabel: "Áudio Vídeo",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="video"
                            size={24}
                            color={colors.primary}
                        />
                    ),
                }}
            />   */}
        </Drawer.Navigator>
    );
}







