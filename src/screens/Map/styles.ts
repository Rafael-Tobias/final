import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
    },
    map:{
        height: '70%',
        backgroundColor: "black"
    },
    search:{
        paddingTop: 5,
        height: '30%',
        paddingHorizontal: 3,
    },
    distance:{
        flex:1,
        marginBottom: 25,
        justifyContent: 'center',
        alignItems:'center',
        padding: 10,
    },
    distance__text:{
        fontSize:15,
        fontWeight:'bold'
    },
    price:{
        backgroundColor: '#e2e2e2',
        padding: 22,
        borderRadius:7,
        marginTop:1,
        justifyContent:'center',
        alignItems: 'center',
        width: 380
    },
    price__text:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 20
    }

});
export {css};