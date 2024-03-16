// src/devcomponents/devDBReset.js
//
// RN Button to quick clear and re-seed realtime db for firebase app:
import React from "react";
import { Button } from "react-native";

import { remove, set } from "firebase/database";
import { fireRefRoot } from "../fireInit";
import { seedData } from "./devDBSeedData";

export default function DevDBReset() {
  
  const resetHandler = () => {
    if (fireRefRoot){
      console.log("Ref to DB root successfully established, start init...");
      remove(fireRefRoot)
        .then(() => {
          console.log("Present DB removal success! Next step: re-seeding...");
          set(fireRefRoot, seedData)
            .then(() => {
              console.log("Great, DB reset complete!");
            }).catch((err) => {
              console.log("Err re-init-ing DB with seed data, msg: " + err.message);
            });
        }).catch((err) => {
          console.log("Err deleting DB: " + err.message);
        });
    } else {
      console.log("Error: reference to DB returned null.");
      return ( null );
    }
  }
  return (
    <Button
      title="Dev DB Reset"
      onPress={resetHandler}
    />
  );
}
