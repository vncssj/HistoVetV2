import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from '../Styles';
import { AddButton } from '../../components/ButtonInput';

export default class PetVetScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pets: []
        }
    }
    componentDidMount() {
        this.getPets()
    }
    getPets() {
        fetch('https://histovet-node.herokuapp.com/pets/list')
            .then((res) => res.json())
            .then(res => {
                this.setState({ pets: res })
            })
    }
    addPets() {
        this.props.navigation.navigate('AddPets');
    }
    renderPets(item) {
        return (
            <TouchableOpacity style={styles.pets}>
                <Text style={styles.linhaPet}>
                    {item.tipo + ' ' + item.nome}
                </Text>
                <Text style={styles.quantidade}>
                    {item.peso}
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <>
                <View style={styles.user}>
                    <Text style={styles.wellcome}>Bem-vindo Vinícius</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.topoOcorrencias}>
                    </View>
                    <View style={styles.corpoHVet}>
                        <FlatList
                            data={this.state.pets}
                            renderItem={({ item }) => this.renderPets(item)}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item._id.toString()}
                        />
                    </View>
                </View>
                <AddButton onPress={() => this.addPets()} />
            </>
        );
    }
}
