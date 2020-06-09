import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    headerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 50,
        color: "#FFF",
        textAlign: 'center'
    },
    bodyLogin: {
        flex: 2,
        alignItems: 'center',
    },

    // CADASTRO

    titlePage: {
        fontSize: 26,
        color: '#FFF',
        marginVertical: 50,
        textAlign: "center"
    },

    // HOME VET
    topoHVet: {
        flex: 1,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    corpoHVet: {
        flex: 6,
        paddingTop: 10
    },

    consulta: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    titleConsulta: {
        fontWeight: 'bold',
        fontSize: 16,
        width: '80%',
    },

    horaConsulta: {
        width: '20%',
        fontSize: 14,
        textAlign: 'right'
    },

    user: {
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "#9198E5",
    },
    wellcome: {
        fontSize: 20,
        color: "#FFF",
    },

    ocorrenciaConsulta: {
        width: '100%',
        padding: 2,
        marginTop: 10,
    },

    topoOcorrencias: {
        backgroundColor: "#9198E5",
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center'
    },

    pets: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    quantidade: {
        backgroundColor: "#9198E5",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        color: "#fff",

    },

    linhaPet: {
        fontSize: 16,
    }
});