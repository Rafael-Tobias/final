import {StyleSheet } from "react-native"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerForm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  input: {
    fontSize: 18,
    padding: 10,
    width: "80%",
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 5,
    margin: 10,
    color:'white'
  },
  label: {
    height: 2
  },
  select: {
    width: "80%"
  },
  selectTopico: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 5,
    padding: 10,
    height: 70
  },
  imagem: {
    flexDirection: "row",
  },
  img: {
    width: 100,
    height: 100,
  },
  buttonImage: {
    margin: 10,
  },
  //copiados da screen camera
  buttonTop: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  buttonTopPosition: {
    position: "absolute",
    top: "5%",
    right: "5%",
  },
  textClose: {
    color: colors.white,
    fontSize: 20, 
  },
  buttonFlip: {
    position: "absolute",
    top: "5%",
    left: "5%",
  },
  textFlip: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.white,
  },
  viewTakePicture: {
    position: "absolute",
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
  },
  positionTakePicture: {
    alignSelf: "center",
    flex: 1,
    alignItems: "center",
  },
  buttonTakePicture: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  imagem2:{
    alignItems: 'center',
    width: 80,
    height: 80
  },
  viewimage:{
    alignItems: 'center',
    margin: 10
  },
  buttonTopPostion: {
    position: "absolute",
    top: "5%",
    right:"5%",
    marginRight: 100
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
})

export default styles