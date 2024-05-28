import { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { height, width } from "../../constants/measures";

interface Props {
  navigation: any;
}

export default function Home(props: Props) {
  useEffect(
    () =>
      props.navigation.addListener("beforeRemove", (e: any) => {
        e.preventDefault();
      }),
    []
  );

  return (
    <SafeAreaView>
      <MapView style={{width: width, height: height}}/>
    </SafeAreaView>
  );
}
