import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import WebView from "react-native-webview"


function Render() {

    const [channel, setChannel] = useState('');


    return (

        <>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Nome do canal em minúsculo'
                    onChangeText={(channel => setChannel(channel.toLowerCase()))}
                />
            </View>

            <WebView
                source={{ uri: `https://sinalpublico.com/player3/ch.php?canal=${channel}` }}
                allowingReadAccessToURL={false}
                allowsFullscreenVideo
                style={{ backgroundColor: '#000' }}

            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderBottomColor: '#000',
        borderBottomWidth: 2
    },
    input: {
        fontSize: 20,
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        width: '90%',
        borderRadius: 10,
        padding: 10
    },
    text: {
        fontSize: 20,
        color: '#FFF'
    },
    button: {
        padding: 10,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000',
        marginTop: 10
    }
})

export default Render