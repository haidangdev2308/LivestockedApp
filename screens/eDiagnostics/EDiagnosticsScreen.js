import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
import { colors } from '../../constants';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


class EDiagnosticsScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        const navigation = this.props.navigation
        navigation.setOptions({
            headerShown: true,
            title: 'Chẩn đoán bệnh cho lợn',
            headerTitleStyle: {
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: '45%',
            },
            headerStyle: {
                backgroundColor: colors.primary,
                height: 110,
                shadowColor: 'transparent'
            },
            headerLeft: () => {
                return <AntDesign name="left" size={20} color="white" style={{ marginEnd: 12 }} />
            }
        })
    }
    render() {
        return (
            <WebView
                source={{ uri: 'https://www.3tres3.com/vn/ediagnostics/' }}
                style={{ flex: 1 }}
            />
        )
    }
}

const styles = StyleSheet.create({})

// Wrap and export
export default function (props) {
    const navigation = useNavigation();

    return <EDiagnosticsScreen {...props} navigation={navigation} />;
}