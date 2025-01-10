import { StyleSheet } from "react-native";
import { height, width } from "../../utils/constanst";

const movieItemStyle = StyleSheet.create({

    container: {

        marginHorizontal: 5,
    },
    image: {
        width: width * 0.3,
        height: height * 0.2,
        borderRadius: 5,
    }

})

export default movieItemStyle;