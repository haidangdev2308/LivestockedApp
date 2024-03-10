import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../constants'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.headerHome}>
                    <Image style={styles.logoStyle} source={require('../../assets/img/logotheme.png')} resizeMethod='auto' />
                    <Text style={styles.headerGreet}>Chào mừng đến với   
                        <Text style={{fontWeight: 600, marginLeft: 10}}> PigM</Text>
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        height: 100,
        width: 150,
        tintColor: colors.primary
    },
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerGreet: {
        color: colors.primary,
        fontSize: 18
    }
})