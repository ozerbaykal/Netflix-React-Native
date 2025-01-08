import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/themeColors';
import { height, width } from '../../utils/constanst';


const buttonStyle = StyleSheet.create({
    container: {

        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.07,
        borderRadius: 10


    },
    title: {
        color: ThemeColors.WHITE,
        fontSize: 20,
        fontWeight: "bold"

    }



})
export default buttonStyle;