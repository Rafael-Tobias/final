import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
    },
    map:{
        height: '70%',
        backgroundColor: "black"
    },
    search:{
        paddingTop: 5,
        height: '30%',
        paddingHorizontal: 3
    },
    distance:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding: 10
    },
    distance__text:{
        fontSize:20,
        fontWeight:'bold'
    },
    price:{
        backgroundColor: 'green',
        padding: 7,
        borderRadius:4,
        marginTop:30,
        justifyContent:'center',
        alignItems: 'center',
        width: 150
    },
    price__text:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 20
    }

});
export {css};