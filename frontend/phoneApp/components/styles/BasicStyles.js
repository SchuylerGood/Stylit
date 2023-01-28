import { StyleSheet } from 'react-native';

const BasicStyles = StyleSheet.create({
    textField: {
        backgroundColor: '#6E80E1',
        padding: 10,
        borderRadius: 30,
        width: 280,
        marginTop: 8,
        borderWidth: 3,
        borderColor: '#fff'
    },
    fieldText: {
        color: '#BFC7F2'
    },
    bigText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    loginButton: {
        backgroundColor: 'transparent',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 3,
        borderColor: '#fff',
        color: '#fff',
        fontWeight: 'bold'
    },
    forgotpassword: {
        marginTop: 10,
        color: '#fff',
        textDecorationLine: 'underline',
    },
    bigButton: {
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 20,
        width: 200,
        height: 60,
        borderRadius: 30,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }

  });

export default BasicStyles;