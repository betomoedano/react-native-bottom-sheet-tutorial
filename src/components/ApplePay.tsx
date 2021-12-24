import React from "react";
import { StyleSheet, View, Text, Button, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const ApplePay = () => {

    return (
        <View style={style.container}>
            <Text style={style.title}>App Store 🔥</Text>
            <View style={style.appInfo}>
                <Image style={style.image} source={require("../../assets/rocketsIcon.png")} />
                <View style={{ marginLeft: 15}}>
                    <Text style={style.text}>Rockets X</Text>
                    <Text style={[style.text, {color: 'gray'}]}>betomoedano</Text>
                    <Text style={[style.text, {color: 'gray'}]}>Offers In-App-Purchases</Text>
                </View>
            </View>
            <View style={style.separator}></View>
            <Text style={[style.text, {color: 'gray', marginLeft: 15, marginVertical: 5}]}>ACCOUNT<Text style={[style.text]}>    betomoedano@outlook.com</Text></Text> 
            <View style={style.separator}></View>
            <TouchableOpacity onPress={() => Alert.alert('Thanks for your purchase')}>
                <View style={style.confirmButton}><Text style={{color: '#fff', fontSize: 30 }}>💸</Text></View> 
            </TouchableOpacity>
            
        </View>
    )
}

export default  ApplePay;

const style = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 30,
        letterSpacing: .5,
        color: "#000",
    },
    text: {
        color: "#000",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    appInfo: {
        flexDirection: "row",
        marginLeft: '10%',
        alignItems: "center",
        marginBottom: 20,
    },
    separator: {
        height: 1,
        backgroundColor: "#00000040",
        marginVertical: 10,
    },
    confirmButton: {
        backgroundColor: "#0080FB",
        height: 50,
        width: 50,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 15,
        alignItems: "center",
    }
});