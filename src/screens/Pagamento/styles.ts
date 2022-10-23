import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"white"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  formRow: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    textDecorationLine: "underline",
    borderRadius: 1,
    paddingLeft: 9
  },
  input: {
    marginTop: 19,
    fontSize: 14,
    padding: 5,
    width: "95%",
    color: "black",
    borderBottomWidth: 1
  },
  imagem:{
    marginTop: 90,
    marginLeft: 91.3,
    width: 200,
    height: 191

  },
  button:{
    marginBottom: 140,
    alignItems: "center",
    backgroundColor: "#02aff3",
    width: 360,
    borderRadius: 12,
    paddingVertical: 15,
    justifyContent: "center",

  },
  buttonRemember:{
    padding: 40,

  }
})

export default styles