import React, { Component } from 'react';

import { Modal, SafeAreaView, ScrollView, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../../Styles';

import { LoginInput, TextArea, ModalInput } from '../../../components/LoginInput';
import { ButtonInput } from '../../../components/ButtonInput';


export default class AddPets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nivel: '',
            modal: false,
        }
    }

    controlModal() {
        this.setState({ modal: true })
    }

    saveTipo(text) {
        this.setState({ tipo: text })
    }
    saveDono(text) {
        this.setState({ dono: text })
    }
    saveNome(text) {
        this.setState({ nome: text })
    }
    saveRaca(text) {
        this.setState({ raca: text })
    }
    savePeso(text) {
        this.setState({ peso: text })
    }

    goTo(screen) {
        this.props.navigation.navigate(screen)
    }

    sending = () => {
        var data = {
            tipo: this.state.tipo,
            dono: this.state.dono,
            nome: this.state.nome,
            raca: this.state.raca,
            peso: this.state.peso
        }

        fetch('https://histovet-node.herokuapp.com/pets/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                console.log('send')
                this.goTo('Pets')
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
                        <Text style={Styles.titlePage}>Novo Pet</Text>
                        <LoginInput label="Tipo" onChangeText={(text) => this.saveTipo(text)} />
                        <LoginInput label="Dono" onChangeText={(text) => this.saveDono(text)} />
                        <LoginInput label="Nome" onChangeText={(text) => this.saveNome(text)} />
                        <LoginInput label="Raça" onChangeText={(text) => this.saveRaca(text)} />
                        <LoginInput label="Peso" onChangeText={(text) => this.savePeso(text)} />
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
