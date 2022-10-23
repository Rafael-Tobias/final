import {Dimensions, StyleSheet} from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    centraliza:{
        flex:1,
        justifyContent: "center",
    },
    scanner: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width,
    }
})
export default styles