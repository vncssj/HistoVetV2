import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './Styles';
import { TouchableHighlight } from 'react-native-gesture-handler';


export function LoginInput({ label, value, placeholder, security, onChangeText }) {

    return (
        <View style={styles.inputBorderLogin}>
            <Text style={styles.inputLabelLogin}>{label}</Text>
            <TextInput
                style={styles.inputLogin}
                value={value}
                placeholder={placeholder}
                security={security}
                onChangeText={onChangeText}
            />
        </View>
    );
}

export function TextArea({ label, value, placeholder, numberOfLines }) {


    return (
        <View style={styles.inputBorderLogin}>
            <Text style={styles.inputLabelLogin}>{label}</Text>
            <TextInput
                style={styles.inputTextArea}
                value={value}
                placeholder={placeholder}
                numberOfLines={numberOfLines}
                multiline={true}
            />
        </View>
    );
}
export function ModalInput({ label, value, placeholder, onPress }) {
    return (
        <View style={styles.inputBorderLogin}>
            <Text style={styles.inputLabelLogin}>{label}</Text>
            <TouchableHighlight onPress={() => { onPress }}>
                <TextInput
                    style={styles.inputTextArea}
                    value={value}
                    placeholder={placeholder}
                    editable={false}
                />
            </TouchableHighlight>
        </View>
    );
}
