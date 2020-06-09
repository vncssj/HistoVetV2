import React, { Component } from 'react';

import { SafeAreaView, ScrollView, View, Text, KeyboardAvoidingView } from 'react-native';
import Styles from './Styles';

import { LoginInput } from './../components/LoginInput';
import ButtonInput from './../components/ButtonInput';


export default class Cadastro extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={Styles.container} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={Styles.titlePage}>Cadastro</Text>
                    <LoginInput label="Nome" placeholder="Seu nome aqui..." />
                    <LoginInput label="Email" placeholder="Seu Email aqui..." />
                    <LoginInput label="Celular" placeholder="Seu Celular aqui..." />
                    <LoginInput label="CRMV" placeholder="Seu CRMV aqui..." />
                    <LoginInput label="Senha" placeholder="Seu Senha aqui..." />
                    <LoginInput label="Confirme sua senha" placeholder="Seu Confirme sua senha aqui..." />
                    <View style={Styles.bodyLogin}>
                        <ButtonInput value="Salvar" />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
