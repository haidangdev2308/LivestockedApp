import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { colors, styleSheets } from '../../constants'
import {
    EvilIcons,
    MaterialCommunityIcons,
    Feather,
    FontAwesome6
} from '@expo/vector-icons';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.headerHome}>
                    <Image style={styles.logoStyle} source={require('../../assets/img/logotheme.png')} resizeMethod='auto' />
                    <Text style={[styleSheets.headerText, { color: 'white' }]}>PigDavie.com</Text>
                </View>
                <View style={styleSheets.container}>
                    <View style={styleSheets.itemContent}>
                        <MaterialCommunityIcons style={{ marginRight: 10 }} name="home-group" size={26} color="white" />
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '700', flex: 1 }}>Chuồng trại</Text>
                        <TouchableOpacity style={{ paddingHorizontal: 14 }}>
                            <Feather name="arrow-right-circle" size={26} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styleSheets.itemContent}>
                        <FontAwesome6 style={{ marginRight: 10 }} name="heart-circle-exclamation" size={20} color="white" />
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '700', flex: 1 }}>Chẩn đoán bệnh</Text>
                        <TouchableOpacity style={{ paddingHorizontal: 14 }}>
                            <Feather name="arrow-right-circle" size={26} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        height: 100,
        width: 150,
        tintColor: 'white'
    },
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.primary,
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: colors.borderYellow,
    },
})