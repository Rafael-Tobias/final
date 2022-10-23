import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#092327'
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.secondary,
    marginBottom: 20,
  },
  formRow: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    color: colors.secondary,
    padding: 5
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%",
    color: colors.white

  },
  icon: {
    fontSize: 24,
    color: colors.secondary,
    padding: 10
  },
  imagem:{
    alignItems: 'center',
    width: 80,
    height: 80
  },
  viewimage:{
    alignItems: 'center',
    margin: 10
  }
})

export default styles;