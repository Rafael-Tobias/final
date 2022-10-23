import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  buttonGreen: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    margin: 10, 
    width: '90%'
  },
  buttonPurple: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    margin: 10,
  },
  buttonThird: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    margin: 10,
    width: '90%'
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontSize: 18
  }
});

export default styles;