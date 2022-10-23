import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatStackParamList } from "../types/Screen.types";
import { ChatScreen, EnviarMensagemScreen } from "../screens";

const Stack = createStackNavigator<ChatStackParamList>();

export default function ChatNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="EnviarMensagem" component={EnviarMensagemScreen} />
        </Stack.Navigator>
    );
}