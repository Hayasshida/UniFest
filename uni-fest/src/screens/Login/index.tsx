import { Button, Icon, Text, TextInput } from "react-native-paper";
import AlignedLogin from "../../components/AlignedLogin";
import styles from "./styles";
import { View } from "react-native";
import { signInWithEmail } from "../../lib/supabase/auth";
import { useState } from "react";

interface Props {
  navigation: any;
}

export default function Login(props: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [showPass, setShowPass] = useState(false)

  async function tryLogin(email: string, password: string) {
    const error = await signInWithEmail(email, password);
    
    if (error) {
      setErrorMessage(error.message);
      setLoginError(true);
      return;
    }

    props.navigation.navigate("Home");
  }

  return (
    <AlignedLogin>
      <View style={styles.title}>
        <Text style={styles.title}>Log in</Text>

        {loginError && <View style={styles.generic}><Text>{errorMessage}</Text></View>}

        <TextInput
          onChange={() => setLoginError(false)}
          value={email}
          onChangeText={setEmail}
          style={styles.generic}
          label="Email"
          right={loginError && <TextInput.Icon icon="alert" color="red" rippleColor="transparent" />}
          error={loginError}
        />
        <TextInput
          onChange={() => setLoginError(false)}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPass}
          style={styles.generic}
          label="Senha"
          right={(loginError ? <TextInput.Icon icon="alert" color="red" rippleColor="transparent"/> : <TextInput.Icon icon={showPass ? "eye-off" : "eye"} onPress={() => setShowPass(!showPass) }/>)}
          error={loginError}
        />

        <Button
          style={styles.generic}
          mode="contained"
          onPress={() => tryLogin(email, password)}
        >
          Log in
        </Button>
        <Button
          style={styles.generic}
          mode="contained-tonal"
          onPress={() => props.navigation.navigate("Register")}
        >
          Sign up
        </Button>
      </View>
    </AlignedLogin>
  );
}

