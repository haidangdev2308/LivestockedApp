import { Platform } from "react-native"
import colors from "./colors"
export const styleSheets = {
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.grayText,
    },
    headerText: {
        fontWeight: '700',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        gap: 10
    },
    itemContent: {
        padding: 20,
        borderWidth: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.borderYellow,
        borderRadius: 10,
        backgroundColor: colors.button,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    }
}
