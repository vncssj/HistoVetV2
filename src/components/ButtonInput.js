import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';


export function ButtonInput({ value, onPress }) {
    return (
        <View style={styles.centerButton}>
            <TouchableOpacity style={styles.ButtonInput} onPress={onPress}>
                <Text style={styles.ButtonValue}>{value}</Text>
            </TouchableOpacity>
        </View>
    );
}
export function AddButton({ value, onPress }) {
    return (
        <View style={styles.addButton}>
            <TouchableOpacity onPress={onPress}>
                <FontAwesome name="plus" size={25} color="#9198E5" />
            </TouchableOpacity>
        </View>
    );
}