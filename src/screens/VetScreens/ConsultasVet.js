import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from '../Styles';
import { AddButton } from '../../components/ButtonInput';

export default class ConsultasVetScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consultas: []
        }
    }

    componentDidMount() {
        this.getConsultas()
    }
    getConsultas() {
        fetch('https://histovet-node.herokuapp.com/consultas/list')
            .then((res) => res.json())
            .then(res => {
                this.setState({ consultas: res })
            })
    }

    renderConsultas(item) {
        return (
            <TouchableOpacity style={styles.consulta}>
                <Text style={styles.titleConsulta}>
                    {item.tipo + ' ' + item.nome}
                </Text>
                <Text style={styles.horaConsulta}>
                    {item.data + '\n' + item.hora}
                </Text>
            </TouchableOpacity>
        );
    }
    addConsulta() {
        this.props.navigation.navigate('AddConsultas');
    }
    render() {
        return (
            <>
                <View style={styles.user}>
                    <Text style={styles.wellcome}>Bem-vindo Vinícius</Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.corpoHVet}>
                        <FlatList
                            data={this.state.consultas}
                            renderItem={({ item }) => this.renderConsultas(item)}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item._id.toString()}
                        />
                    </View>
                </View>
                <AddButton onPress={() => this.addConsulta()} />
            </>
        );
    }
}
