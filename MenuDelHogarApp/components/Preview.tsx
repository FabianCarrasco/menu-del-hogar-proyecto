import { ImageBackground, Text, StyleSheet, View, SafeAreaView } from "react-native";

// Path: MenuDelHogarApp/components/Preview.tsx

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    }
})

const Preview = () => {
  return (
    <ImageBackground source={{uri: "https://picsum.photos/2000"}} style={styles.container}>
      <SafeAreaView>
        <Text>Preview</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Preview;