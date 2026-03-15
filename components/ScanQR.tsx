import { CameraView, useCameraPermissions } from "expo-camera";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Text } from "react-native-paper";

interface ScanQRProps {
    setIsScanning: (value: boolean) => void;
    setShowDialog: (value: boolean) => void;
    setCodeContent: (value: string) => void;
}

export default function ScanQR(props: ScanQRProps) {
    const [permission, requestPermission] = useCameraPermissions();
    const { setIsScanning, setCodeContent, setShowDialog } = props;

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.permissionContainer}>
                <Text variant="headlineMedium" style={styles.message}>
                    We need your permission to show the camera
                </Text>
                <Button mode="contained" onPress={requestPermission}>
                    Grant permission
                </Button>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView
                style={styles.camera}
                facing="back"
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
                onBarcodeScanned={(result) => {
                    setCodeContent(result.data);
                    setIsScanning(false);
                    setShowDialog(true);
                }}
            />
            <View style={styles.buttonContainer}>
                <Button
                    mode="outlined"
                    icon="close"
                    onPress={() => setIsScanning(false)}
                >
                    Close Camera
                </Button>
            </View>
            <View style={styles.iconContainer}>
                <Icon source="border-radius" size={350} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    permissionContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
        padding: 16,
    },
    message: {
        textAlign: "center",
    },
    camera: {
        ...StyleSheet.absoluteFillObject,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 64,
        flexDirection: "row",
        backgroundColor: "transparent",
        width: "100%",
        justifyContent: "center",
    },
    iconContainer: {
        position: "absolute",
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
