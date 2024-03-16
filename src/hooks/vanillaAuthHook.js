// src/helpers/vanillaAuthHook.js
import React, { useState, useEffect } from "react";
import { fireAuth } from "../fireInit";

export default function vanillaAuthHook() {
  const [user, setUser] = useState(fireAuth.currentUser);
  useEffect(() => {
    const unSub = fireAuth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unSub();
  }, []);
return user;
}
  