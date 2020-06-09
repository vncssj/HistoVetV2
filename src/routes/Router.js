import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './../screens/Login';
import CadastroScreen from './../screens/Cadastro';

import UrgenciasVetScreen from '../screens/VetScreens/UrgenciasVet';
import PetVerScreen from './../screens/VetScreens/PetVet';
import ConsultasVetScreen from './../screens/VetScreens/ConsultasVet';

import AddOcorrencias from './../screens/VetScreens/ocorrencias/add';
import AddPets from './../screens/VetScreens/pets/add';
import AddConsultas from './../screens/VetScreens/consultas/add';

import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabVet() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showIcon: false,
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                },
                labelStyle: {
                    fontSize: 16,
                },
                activeBackgroundColor: "#9198E5",
                activeTintColor: '#FFF',
                inactiveTintColor: "#333",
            }}
        >
            <Tab.Screen name="Ocorrencias" component={UrgenciasVetScreen} />
            <Tab.Screen name="Pets" component={PetVerScreen} />
            <Tab.Screen name="Consultas" component={ConsultasVetScreen} />
        </Tab.Navigator>
    );
}

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode={false}
                initialRouteName="Login"
                screenOptions={
                    {
                        cardStyle: {
                            backgroundColor: "#9198E5"
                        }
                    }
                }
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                <Stack.Screen name="TabVet" component={TabVet} />
                <Stack.Screen name="AddOcorrencias" component={AddOcorrencias} />
                <Stack.Screen name="AddPets" component={AddPets} />
                <Stack.Screen name="AddConsultas" component={AddConsultas} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}