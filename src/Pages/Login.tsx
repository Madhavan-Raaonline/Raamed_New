import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Button, Pressable,TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '../Themes/Images'
import { Fonts } from '../Themes/Fonts'
import Colors from '../Themes/Colors'

const Login = () => {
    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: 'white', padding: 15 }}>

                <View style={loginstyles.loginBanner}>
                    <Image source={Images.loginBanner} height={227} width={257} />
                </View>

                <View>
                    <Text style={loginstyles.welcomeText}>Let’s connect with us</Text>
                </View>

                <KeyboardAvoidingView>
                    <View style={loginstyles.inputContainer}>
                        <TextInput style={loginstyles.input} />
                        <TextInput style={loginstyles.input} />
                        <View>
                            <Text style={loginstyles.forgetPassText} >Forgot password?</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>

                <View >
                    <TouchableOpacity style={{backgroundColor:'#10AEF9' , height:40, borderRadius:10, }}>
                        <Text style={loginstyles.loginBtn}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const loginstyles = StyleSheet.create({
    loginBanner: {
        marginTop: 100,
        alignSelf: 'center'
    },
    welcomeText: {
        fontFamily: Fonts.Raleway.bold,
        fontSize: 24,
        color: '#1C1C1C',
        marginVertical: 20,
        alignSelf: 'center'
    },
    inputContainer: {
        // borderWidth: 1,
        height: 150,
        display: 'flex',
        // gap :20,
        justifyContent: 'space-between',
    },
    input: {
        borderWidth: 1,
        borderRadius: 14,
        borderColor: '#CCCCCC',
        height: 50,
        marginHorizontal: 20,
        // marginVertical: 10 
    },
    forgetPassText: {
        textAlign:'right',
        fontFamily : Fonts['Nunito Sans'].normal,
        color : '#10AEF9',
        marginRight :20
        
    },
    loginBtn : {
        color : Colors.white,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center',
        // textAlignVertical :'center'
        // alignSelf: 'center'
    }
})
export default Login
