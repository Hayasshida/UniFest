import { View } from "react-native";
import AlignedLogin from "../../components/AlignedLogin";
import { Button, Text, TextInput } from "react-native-paper";
import { signUpWithEmail } from "../../lib/supabase/auth";
import styles from "./styles";
import { useState } from "react";
import User from "../types/User";
import LoginErrors from "../types/LoginErrors";

interface Props {
  navigation: any
}

export default function Register(props: Props) {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    full_name: "",
    age: undefined,
    phone: "",
    cpf: "",
  });

  const [error, setError] = useState<{hasError: boolean, errorType: LoginErrors}>()
  const [showPass, setShowPass] = useState(false)

  console.log(user);

  async function tryRregister(userData: User) {
    const result = await signUpWithEmail(userData)
    console.log(result)

    if(result.error) {
      console.log("ERRO DE XYZ", result.error)
      return
    }

    console.log("DEU BOM")
    props.navigation.navigate("Login")
  }

  return (
    <AlignedLogin>
      <View style={styles.title}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput maxLength={70} style={styles.generic} label="Email" keyboardType="email-address" value={user.email} onChangeText={(text) => setUser({...user, email: text})}/>
        <TextInput maxLength={16} style={styles.generic} label="Senha" value={user.password} onChangeText={(text) => setUser({...user, password: text})} secureTextEntry={!showPass} right={<TextInput.Icon icon={showPass ? "eye-off" : "eye"} onPress={() => setShowPass(!showPass)}/>}/>
        <TextInput maxLength={80} style={styles.generic} label="Nome Completo" value={user.full_name} onChangeText={(text) => setUser({...user, full_name: text})}/>
        <TextInput maxLength={3} style={styles.generic} label="Idade" keyboardType="number-pad" value={user.age === undefined? user.age : user.age.toString()} onChangeText={(text) => setUser({...user, age: Number(text)})}/>
        <TextInput maxLength={11} style={styles.generic} label="Telefone" keyboardType="phone-pad" value={user.phone} onChangeText={(text) => setUser({...user, phone: text})}/>
        <TextInput maxLength={14} style={styles.generic} label="CPF" keyboardType="number-pad" value={user.cpf} onChangeText={(text) => setUser({...user, cpf: text})}/>
        <Button style={styles.generic} mode="contained" onPress={() => tryRregister(user)}>
          Sign up
        </Button>
      </View>
    </AlignedLogin>
  );
}


