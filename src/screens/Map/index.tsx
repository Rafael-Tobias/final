import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import {css} from './styles';
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import config from "../../config/index.json"
import MapViewDirections from 'react-native-maps-directions';
import {MaterialIcons} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MapTypes } from "../../types/Screen.types";
import imgMarker from "../../assets/imgMarker.png";

export default function App({ navigation }: MapTypes) {
  const mapEl=useRef(null);
  const [origin,setOrigin]=useState(null);
  const [destination,setDestination]=useState(null);
  const [distance,setDistance]=useState(null);
  const [marker, setMarker] = useState(null);
  const [price, setPrice]=useState(null);
  const [price1, setPrice1]=useState(null);
  function handleMap() {
    navigation.navigate("Pagamento");
  }

  useEffect(()=>{
    (async function(){
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
  },[]);
  return (
    <View style={css.container}>
      <KeyboardAvoidingView>
      <MapView
        style={css.map}Ref
        initialRegion={origin}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
        ref={mapEl}
      >
        {destination &&
          <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={config.googleApi}
          strokeWidth={3}
          onReady={result=>{
            setDistance(result.distance);
            setPrice(((result.distance)*5.5)+4); //definindo preço entrega
              setPrice1(((result.distance)*5.5)+0.37); //definindo preço viagem
              mapEl.current.fitToCoordinates(
                result.coordinates,{
                  edgePadding:{
                    top:50,
                    bottom:50,
                    left:50,
                    right:50
                  }
                }
                );
              }} 
              />
            }
      </MapView>
      <View style={css.search}>
        <GooglePlacesAutocomplete
            placeholder='Para onde vamos?'
            onPress={(data, details = null) => {
              setDestination({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421
              });
            }}
        query={{
          key: config.googleApi,
          language: 'pt-br',
        }}
        enablePoweredByContainer={false}
        fetchDetails={true}
        styles={{ clistView:{height:300, zIndex:0}}}
      />


  {distance &&
    <View style={css.distance}>
        {/* <Text style={css.distance__text}>Distância: {distance.toFixed(2).replace('.',',')}km</Text> */}
        <TouchableOpacity style={css.price} onPress={handleMap}>
            <Text style={css.price__text}><MaterialIcons name="delivery-dining" size={40} color="black" />                                          R${price.toFixed(2).replace('.',',')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.price} onPress={handleMap}>
            <Text style={css.price__text}><MaterialCommunityIcons name="truck-delivery-outline" size={40} color="black" />                                          R${price1.toFixed(2).replace('.',',')}</Text>
        </TouchableOpacity>
    </View>
  }


      </View>
      </KeyboardAvoidingView>
    </View>
  );
}

