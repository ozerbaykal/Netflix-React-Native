import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/themeColors';

const getStartedStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: ' 100%',
        width: '100%',
        resizeMode: 'cover',


    },
    textContainer: {
        position: "absolute",
        bottom: 50,
        height: "15%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "space-between",
        padding: 5




    },
    text: {
        fontSize: 24,
        color: ThemeColors.WHITE,
        textAlign: "center"

        ,
        fontWeight: "bold"

    },
    subText: {
        fontSize: 18,
        color: ThemeColors.WHITE,
        textAlign: "center"

        ,
        fontWeight: "400"

    },
    bottomTab: {
        flex: 1,
        backgroundColor: ThemeColors.BLACK,

    }
});

export default getStartedStyles;
