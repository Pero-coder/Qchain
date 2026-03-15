import ScanQR from "@/components/ScanQR";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";

export default function Index() {
    const [isScanning, setIsScanning] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [codeContent, setCodeContent] = useState("");

    if (isScanning) {
        return (
            <ScanQR
                setIsScanning={setIsScanning}
                setCodeContent={setCodeContent}
                setShowDialog={setShowDialog}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Text variant="titleLarge" style={styles.text}>
                Welcome to Qchain!
            </Text>
            <Button
                mode="contained-tonal"
                icon="camera-outline"
                onPress={() => setIsScanning(true)}
            >
                Scan QR code to log in
            </Button>
            <Portal>
                <Dialog
                    visible={showDialog}
                    onDismiss={() => setShowDialog(false)}
                >
                    <Dialog.Title>Scanned code content</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">
                            Content of QR code: {codeContent}
                        </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setShowDialog(false)}>
                            Done
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 100,
        padding: 16,
    },
    text: {
        textAlign: "center",
    },
});
