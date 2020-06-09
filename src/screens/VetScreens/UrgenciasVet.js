import React, { Component } from 'react';
import { Animated, Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from '../Styles';
import { AddButton } from '../../components/ButtonInput';

export default class UrgenciasVetScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollHeight: new Animated.Value(200),
            ocorrencias: []
        }
    }
    componentDidMount() {
        this.getOcorrencias()
    }
    getOcorrencias() {
        fetch('https://histovet-node.herokuapp.com/ocorrencias/list')
            .then((res) => res.json())
            .then(res => {
                this.setState({ ocorrencias: res })
            })
    }
    renderConsultas(item) {
        return (
            <TouchableOpacity style={styles.consulta}>
                <View style={{ width: '20%', alignItems: 'center', justifyContent: "center" }}>
                    <Image style={{ borderRadius: 100, width: 50, height: 50 }} source={{ uri: "https://www.vhv.rs/dpng/d/74-748366_dog-icon-transparent-background-husky-hd-png-download.png" }} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={styles.titleConsulta}>
                        {item.tipo + ' ' + item.nome}
                    </Text>
                    <Text style={{ position: 'absolute', right: 10, top: 10 }}>
                        {item.data + '\n' + item.hora}
                    </Text>
                    <Text style={[styles.ocorrenciaConsulta, { marginTop: 30 }]}>
                        {item.ocorrencia}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
    addOcorrencia() {
        this.props.navigation.navigate('AddOcorrencias');
    }
    scrolling(evt) {
        let scrollHeight = evt.nativeEvent.contentOffset.y;
        if (scrollHeight > 70) {
            // alert("Passou")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.user}>
                    <Text style={styles.wellcome}>Bem-vindo Vinícius</Text>
                </View>
                <Animated.View style={[styles.topoOcorrencias, { height: this.state.scrollHeight }]}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', width: 90, height: 90, borderRadius: 100 }}>
                        <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/63/63699.png' }} style={{ width: 70, height: 70 }} />
                    </View>
                </Animated.View>
                <View style={styles.container, { flex: 6 }}>
                    <View style={styles.corpoHVet, {}}>
                        <FlatList
                            data={this.state.ocorrencias}
                            renderItem={({ item }) => this.renderConsultas(item)}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item._id.toString()}
                            onScroll={this.scrolling}
                        />
                    </View>
                </View>
                <AddButton onPress={() => this.addOcorrencia()} />
            </View>
        );
    }
}
