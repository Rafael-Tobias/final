import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    startOver: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonStartOver: {
        width: 130,
        borderRadius: 4,
        backgroundColor: colors.secondary,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
    },

    textStartOver: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center"
    },

    collumnPreviewVisible: {
        flex: 1,
        flexDirection: "column",
        padding: 15,
        justifyContent: "flex-end"
    },

    rowPreviewVisible: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    buttonPreviewVisible:{
        width: 130,
        height: 40,
        alignItems: "center",
        borderRadius: 4
    },

    textPreviewVisible:{
        color: colors.white,
        fontSize: 20
    },

    buttonSavePhoto: {
        width: 130,
        height: 40,
        alignItems: "center",
        borderRadius: 4,
    },

    buttonTop: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
    },

    buttonTopPostion: {
        position: "absolute",
        top: "5%",
        right:"5%",
        marginRight: 100
    },

    textClose: {
        color: colors.white,
        fontSize: 20
    },

    buttonFlip: {
        position: "absolute",
        top: "5%",
        left: "5%",
        color: colors.black,
        width: 100,
        backgroundColor: colors.black,
        alignItems: "center",
        borderRadius: 15
    },

    buttonFlip2: {
        position: "absolute",
        top: "5%",
        left: "5%",
        color: colors.black,
        width: 100,
        backgroundColor: colors.black,
        alignItems: "center",
        borderRadius: 15,
    },

    textFlip: {
        fontSize: 18,
        marginBottom: 3,
        color: colors.white,
    },

    viewTakePicture: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: "space-between"
    },

    positionTakePicture: {
        alignSelf: "center",
        flex: 1,
        alignItems: "center"
    },

    buttonTakePicture: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: colors.white
    }
})

export default styles