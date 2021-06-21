import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function AppButton({title, onPress, color }) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    
    },
    text: {
        fontSize: 18,
        color: "white",
        textTransform: 'uppercase',
        fontWeight: '200',
        fontFamily: 'Menlo'
    }
})
export default AppButton;