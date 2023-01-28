import { StyleSheet } from 'react-native';

const BasicStyles = StyleSheet.create({
    container1: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    },
    camera: {
        flex: 1,
        width: '100%',
        // borderRadius: 30,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#f1f1f1',
        marginLeft: 10,
    },
    buttonButton: {
        backgroundColor: '#6E80E1',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 30,
        marginBottom: 20,
        marginHorizontal: 50,
    },
    smallButton: {
        color: '#fff',
        backgroundColor: '#6E80E1',
        height: 50,
        borderRadius: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 20,
    }
  });

export default BasicStyles;