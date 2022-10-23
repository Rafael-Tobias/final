import { StyleSheet } from 'react-native'
import colors from "../../styles/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonTopsPosition: {
        position: "absolute",
        top: "5%",
        right: "5%",
    },
    textClose: {
        color: colors.white,
        fontSize: 20,
    },
    collumnPreviewVisible: {
        flex: 1,
        flexDirection: "column",
        padding: 15,
        justifyContent: "flex-end",
    },
    rowPrevieweVisible: {
        flex: 1,
        flexDirection: "column",
        padding: 15,
        justifyContent: "space-between",
    },
    buttonPreviewVisible: {
        width: 130,
        height: 40,
        alignItems: "center",
        borderRadius: 4,
    },
    textPreviewVisible: {
        color: colors.white,
        fontSize: 20,
    },
    buttonStartOver: {
        width:130,
        borderRadius: 4,
        backgroundColor : colors.secondary,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
    },
    textStartOve: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center",
    },
    startOver: {
        flex:1,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
    },
    });
    
    export default styles