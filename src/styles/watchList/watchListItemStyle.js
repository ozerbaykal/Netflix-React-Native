import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/themeColors';
import { Wind } from 'iconsax-react-native';


const watchListItemStyle = StyleSheet.create({
    container: {
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: "gray",
        paddingTop: 5

    },
    iconContainer: {
        width: 140,
        height: 140,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",


    },
    title: {
        color: ThemeColors.WHITE,
        fontSize: 18,
        fontWeight: "500",
        marginTop: 5
    }





})
export default watchListItemStyle;