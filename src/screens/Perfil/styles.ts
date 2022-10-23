import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    backgroundColor: "#092327"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.secondary,
    marginBottom: 20,
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  link: {
    fontSize: 20
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    },
})

export default styles