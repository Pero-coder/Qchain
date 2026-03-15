import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Edit app/index.tsx to edit this screen.
            </Text>
            <Button mode="contained-tonal" onPress={() => {}}>
                Themed react native paper button
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        padding: 16,
    },
    text: {
        textAlign: "center",
    },
});
