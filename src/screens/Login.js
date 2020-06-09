import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LoginInput } from '../components/LoginInput';
import { ButtonInput } from '../components/ButtonInput';
import styles from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    login() {
        this.props.navigation.navigate('TabVet');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerLogin}>
                    <Text style={styles.logo}>HistoVet</Text>
                </View>
                <View style={styles.bodyLogin}>
                    <LoginInput label="Email:" />
                    <LoginInput label="Senha:" />
                    <ButtonInput value="Continuar" onPress={() => this.login()} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')}>
                        <Text style={{ padding: 5, margin: 10, fontSize: 16, textDecorationLine: 'underline' }}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
