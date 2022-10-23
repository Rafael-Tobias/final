import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MapStackParamList } from "../types/Screen.types";
import { MapScreen, PagamentoScreen } from "../screens";

const Stack = createStackNavigator<MapStackParamList>();

export default function MapNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Pagamento" component={PagamentoScreen} />
        </Stack.Navigator>
    );
}