// src/component/vanillaAuthHookTestComponent.js

import React from "react";
import { Text } from "react-native";
import vanillaAuthHook from "./vanillaAuthHook";

// Simple component: if logged in, display uid, else "No User":
export default function VanillaAuthHookTestComponent() {
    const user = vanillaAuthHook();
    return (
      <Text>{ user ? user.uid : "No User" }</Text>
    );
}
