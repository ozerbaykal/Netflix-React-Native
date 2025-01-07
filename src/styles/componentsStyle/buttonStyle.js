import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/themeColors';


const buttonStyle = StyleSheet.create({
    container: {
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,


    },
    title: {
        color: ThemeColors.WHITE,
        fontSize: 24,
        fontWeight: "bold"

    }



})
export default buttonStyle;