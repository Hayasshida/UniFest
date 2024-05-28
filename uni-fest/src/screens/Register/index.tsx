import { View, StyleSheet } from "react-native";
import AlignedLogin from "../../components/AlignedLogin";
import { Button, Text, TextInput } from "react-native-paper";
import { width } from "../../constants/measures";

export default function Register() {
  return (
    <AlignedLogin>
      <View style={styles.title}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput
          maxLength={70}
          style={styles.generic}
          label="Nome Completo"
        />
        <TextInput maxLength={70} style={styles.generic} label="Email" />
        <TextInput maxLength={11} style={styles.generic} label="Telefone" />
        <Button style={styles.generic} mode="contained">
          Sign up
        </Button>
      </View>
    </AlignedLogin>
  );
}

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
