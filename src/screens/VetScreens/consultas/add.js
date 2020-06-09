import React, { Component } from 'react';

import { Modal, SafeAreaView, ScrollView, View, Text, KeyboardAvoidingView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import Styles from '../../Styles';
import stylesComponents from './../../../components/Styles'
import DateTimePicker from '@react-native-community/datetimepicker';

import { LoginInput, TextArea, ModalInput } from '../../../components/LoginInput';
import { ButtonInput } from '../../../components/ButtonInput';


export default class AddConsultas extends Component {
    constructor(props) {
        super(props);

        this.dataField = React.createRef();
        this.state = {
            nivel: '',
            modal: false,
            data: new Date().toString(),
            modo: 'date',
            show: false
        }
    }

    setData = (event, selectedDate) => {
        const currentDate = selectedDate.toString() || date.toString();
        this.setState({ data: currentDate });
    }

    controlModal() {
        this.setState({ modal: true })
    }

    abrirData() {
        this.setState({ show: true })
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
    saveDescricao(text) {
        this.setState({ descricao: text })
    }

    sending = () => {
        var data = {
            tipo: this.state.tipo,
            nome: this.state.nome,
            dono: this.state.dono,
            data: this.state.data,
            descricao: this.state.descricao
        }

        fetch('https://histovet-node.herokuapp.com/consultas/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                console.log('send')
                this.goTo('Consultas')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    goTo(screen) {
        this.props.navigation.navigate(screen)
    }

    render() {
        return (
            <>
                <KeyboardAvoidingView style={Styles.container} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={Styles.titlePage}>Nova Consulta</Text>
                        <LoginInput label="Tipo" onChangeText={(text) => this.saveTipo(text)} />
                        <LoginInput label="Dono" onChangeText={(text) => this.saveDono(text)} />
                        <LoginInput label="Nome" onChangeText={(text) => this.saveNome(text)} />
                        <View style={stylesComponents.inputBorderLogin}>
                            <Text style={stylesComponents.inputLabelLogin}>Data</Text>
                            <TouchableHighlight onPress={() => { this.abrirData() }}>
                                <TextInput
                                    style={stylesComponents.inputTextArea}
                                    editable={false}
                                    value={this.state.data}
                                />
                            </TouchableHighlight>
                        </View>
                        <TextArea label="Descrição" numberOfLines={3} onChangeText={(text) => this.saveDescricao(text)} />
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
                {this.state.show && (
                    <DateTimePicker
                        locale="pt-BR"
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={this.state.data}
                        mode={this.state.modo}
                        is24Hour={true}
                        display="default"
                        onChange={this.setData}
                    />
                )}
            </>
        );
    }
}
