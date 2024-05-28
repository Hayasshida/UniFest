import { StyleSheet } from "react-native";
import { width, height } from "../../constants/measures";

const styles = StyleSheet.create({
    generic: {
        width: width * 0.8,
        marginBottom: 12,
    },
    form: {
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 32,
        marginBottom: 16,
    },
});

export default styles;