import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/themeColors";

const categoryItemStyle = StyleSheet.create({

  container: {

    alignItems: "center",
    margin: 10



  },

  name: {
    color: ThemeColors.WHITE,
    fontSize: 22,
    fontWeight: "600"

  }


})


export default categoryItemStyle;