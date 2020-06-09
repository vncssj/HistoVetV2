import React, { Component } from 'react';

import { Modal, SafeAreaView, ScrollView, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../../Styles';

import { LoginInput, TextArea, ModalInput } from '../../../components/LoginInput';
import { ButtonInput } from '../../../components/ButtonInput';


export default class AddOcorrencias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nivel: '',
            modal: false,
            tipo: '',
            gravidade: '',
            nome: '',
            dono: '',
            ocorrencia: ''
        }
    }

    controlModal() {
        this.setState({ modal: true })
    }

    saveTipo(text) {
        this.setState({ 'tipo': text })
    }

    saveGravidade(text) {
        this.setState({ 'gravidade': text })
    }

    saveNome(text) {
        this.setState({ 'nome': text })
    }
    saveDono(text) {
        this.setState({ 'dono': text })
    }
    saveOcorrencia(text) {
        this.setState({ 'ocorrencia': text })
    }

    goTo(screen) {
        this.props.navigation.navigate(screen)
    }

    sending = () => {
        var data = {
            tipo: this.state.tipo,
            gravidade: this.state.gravidade,
            nome: this.state.nome,
            dono: this.state.dono,
            ocorrencia: this.state.ocorrencia
        }

        fetch('https://histovet-node.herokuapp.com/ocorrencias/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                console.log('send')
                this.goTo('Ocorrencias')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <KeyboardAvoidingView style={Styles.container} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={Styles.titlePage}>Nova Ocorrência</Text>
                        <LoginInput label="Tipo de PET" onChangeText={(text) => this.saveTipo(text)} />
                        <LoginInput label="Gravidade" onChangeText={(text) => this.saveGravidade(text)} />
                        <LoginInput label="Nome do PET" onChangeText={(text) => this.saveNome(text)} />
                        <LoginInput label="Dono do PET" onChangeText={(text) => this.saveDono(text)} />
                        <TextArea label="Ocorrencia" numberOfLines={3} onChangeText={(text) => this.saveOcorrencia(text)} />
                        <ButtonInput value="Salvar" onPress={() => { this.sending() }} />
                    </ScrollView>
                </KeyboardAvoidingView>
                <Modal visible={false}>
                    <View style={{ alignItems: 'center', paddingVertical: 20, marginVertical: 50 }}>
                        <Text style={{ fontSize: 22 }}>Selecione o nível de gravidade</Text>
                    </View>
                    <TouchableOpacity style={{
                        paddingVertical: 20,
                        alignItems: 'center',
                        marginVertical: 10,
                        borderBottomColor: "#ccc",
                        borderBottomWidth: 1
                    }}
                        onPress={() => this.select('Leve')}
                    >
                        <Text style={{ fontSize: 22 }}>Leve</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        paddingVertical: 20,
                        alignItems: 'center',
                        marginVertical: 10,
                        borderBottomColor: "#ccc",
                        borderBottomWidth: 1
                    }}
                        onPress={() => this.select('Moderado')}
                    >
                        <Text style={{ fontSize: 22 }}>Moderado</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        paddingVertical: 20,
                        alignItems: 'center',
                        marginVertical: 10,
                        borderBottomColor: "#ccc",
                        borderBottomWidth: 1
                    }}
                        onPress={() => this.select('Grave')}
                    >
                        <Text style={{ fontSize: 22 }}>Grave</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        paddingVertical: 20,
                        alignItems: 'center',
                        marginVertical: 10,
                        borderBottomColor: "#ccc",
                        borderBottomWidth: 1
                    }}
                        onPress={() => this.select('Urgência')}
                    >
                        <Text style={{ fontSize: 22 }}>Urgência</Text>
                    </TouchableOpacity>

                </Modal>
            </>
        );
    }
}
