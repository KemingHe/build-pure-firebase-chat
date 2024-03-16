import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import {
  SignInAnon,
  SignOut
} from "./src/components/userAuths";

import vanillaAuthHook from "./src/hooks/vanillaAuthHook";
import DemoRoom from "./src/devcomponents/demoRoom";
import DevDBReset from "./src/devcomponents/devDBReset";

export default function App() {
  
  const user = vanillaAuthHook();
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      { user 
        ? <>
            <DemoRoom />
            <Text>Oh and your new user id is: {user.uid}</Text>
            <SignOut />
          </>
        : <>
            <SignInAnon />
          </> 
      }
      <DevDBReset />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
