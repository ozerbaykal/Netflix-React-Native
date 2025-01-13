import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/themeColors";
import { height, width } from "../../utils/constanst";

const movieDetailStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeColors.BLACK

    },


    indicatorContainer: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    indicator: {
        color: ThemeColors.GRAY,


    },
    image: {
        width: width,
        height: height * 0.6,
        resizeMode: "cover"

    },
    title: {
        color: ThemeColors.WHITE,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 5

    },
    infoContainer: {
        paddingHorizontal: 15,
        marginTop: 15,
        marginBottom: 50


    },
    overview: {
        fontSize: 16,
        color: ThemeColors.GRAY,
        marginTop: 10

    },
    section: {
        color: ThemeColors.RED,
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10

    },
    language: {
        color: ThemeColors.WHITE,
        fontSize: 16,
        fontWeight: "500",
        marginTop: 5
    },

    averageContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "red",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        right: 20,
        top: 70,
        opacity: 0.8




    },
    average: {
        color: ThemeColors.WHITE,
        fontWeight: "bold",
        fontSize: 20,


    },




})


export default movieDetailStyle;