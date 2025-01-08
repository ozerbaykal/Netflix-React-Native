import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/themeColors';
import { width } from '../../utils/constanst';


const watchListItemStyle = StyleSheet.create({
    container: {
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        //backgroundColor: "gray",

        paddingTop: 5

    },
    iconContainer: {
        width: width / 2 - 60,
        height: width / 2 - 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5


    },
    title: {
        color: ThemeColors.WHITE,
        fontSize: 18,
        fontWeight: "500",
        marginTop: 5
    }





})
export default watchListItemStyle;