import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { MaterialIcons }  from '@expo/vector-icons';

import api from '../services/api';

function Main({ navigation }) {
  const [devs, setDevs] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
      
    }

    loadInitialPosition();
  }, []);

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const res = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs: 'Node.Js'
      }
    });

    detDevs(res.data)
  }

  function handleRegionChanged(region) {
    console.log(region);
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
          <MapView 
          onRegionChangeComplete={handleRegionChanged} 
          initialRegion={currentRegion} 
          style={styles.map}>
            <Marker 
            coordinate={{ 
              latitude: 52.6571699, 
              longitude: -8.6216564 }}>
              <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/52054459?s=460&v=4' }} />
              <Callout onPress={() => {
                navigation.navigate('Profile', { github_username: 'diebraga' });

              }}>
                <View style={styles.callout}>
                  <Text style={styles.devName}>Diego Braga</Text>
                  <Text style={styles.devBio}>Software Engineer and JavaScript enthusiast.</Text>
                  <Text style={styles.devTechs}>Node.js, React Native, Reactjs</Text>

                </View>
              </Callout>
            </Marker>
          </MapView>
          <View style={styles.searchForm}>
              <TextInput 
                style={styles.searchInput}
                placeholder= 'Devs By Techs...'
                placeholderTextColor= '#999'
                autoCapitalize= 'words'
                autoCorrect= {false}
              />
          <TouchableOpacity onPress={() => {}}  style={styles.loadButton}>
              <MaterialIcons name='my-location' size={20} color='#fff'/>
          </TouchableOpacity>
          </View>
          </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff'
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio: {
    color: '#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  },

  searchForm: {
    flex: 1,
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    textShadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8e4dff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
})

export default Main;