import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Touchable } from "react-native";
import { Path, Svg } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

export default function App() {
  function SvgTop() {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={styles.SvgTop}>
        <Path
          fill="#09f"
          d="m0 224 9.2-10.7C18.5 203 37 181 55 154.7 73.8 128 92 96 111 80c18.2-16 37-16 55 21.3 18.6 37.7 37 111.7 56 133.4 18 21.3 36-10.7 55-48 18.4-37.7 37-79.7 55-80 18.8.3 37 42.3 56 58.6 18.2 15.7 37 5.7 55 16 18.5 10.7 37 42.7 55 26.7 18.9-16 37-80 56-80 18.3 0 37 64 55 106.7 18.7 42.3 37 64.3 56 32C683.1 235 702 149 720 128c18.5-21 37 21 55 26.7 18.8 5.3 37-26.7 56-48C849.2 85 868 75 886 96c18.6 21 37 75 56 96 18 21 36 11 55 10.7 18.4.3 37 10.3 55 26.6 18.8 15.7 37 37.7 56 48 18.2 10.7 37 10.7 55 5.4 18.5-5.7 37-15.7 55-16 18.9.3 37 10.3 56-16 18.3-26.7 37-90.7 55-90.7 18.7 0 37 64 56 90.7 18.1 26.3 37 16.3 46 10.6l9-5.3V0H0Z"
        />
      </Svg>
    );
  }

  function ButtonGradient() {
    return (
      <TouchableOpacity style={styles.container} >
        <LinearGradient style={styles.button}
          
          // Button Linear Gradient
          colors={["#99f", "#59f", "#09f"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <SvgTop />
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subTitle}>Sign In to your account</Text>
      <TextInput style={styles.TextInput} placeholder="Jhon@email.com" />
      <TextInput style={styles.TextInput} placeholder="Password" secureTextEntry={true} />
      <Text style={{ color: "grey", fontWeight: "bold" }}>Forgot Password?</Text>
      <ButtonGradient />
      <Text style={{ color: "grey", fontWeight: "bold" }}>Don't have an account</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative", // Cambiado a "relative" para que el position:absolute de SvgTop funcione correctamente
    width: "100%",
    paddingTop: 200,
  },
  title: {
    fontSize: 80,
    color: "#34434d",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "grey",
    fontWeight: "bold",
  },
  SvgTop: {
    position: "absolute",
    width: "100%",
    height: 100,
    top: 0,
    left: 0,
  },
  TextInput: {
    color: "grey",
    fontWeight: "bold",
    backgroundColor: "#fff",
    paddingStart: 30,
    padding: 10,
    width: "80%",
    height: 50,
    margin: 10,
    borderRadius: 30,
  },
  button: {
    width: "40%",
    height: 50,
    margin: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
