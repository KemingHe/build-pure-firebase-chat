// src/devcomponents/demoRoom.js
//
// One-room chat for demo purposes:
import React from "react";
import { useRef, useState, useEffect } from "react";
import { ScrollView, View, Text, TextInput, Button } from "react-native";

import { 
  ref,
  set,
  child,

  query, 
  orderByKey, 

  onValue, 
  off,

  serverTimestamp
} from "firebase/database";

import { push as firePush } from "firebase/database";

import { fireAuth, fireDB } from "../fireInit";

// Set up module-wide database refs:
const demoRoomMessagesRef = ref(fireDB, "chatMessages/c0001");
const demoRoomUsersRef = ref(fireDB, "chatRooms/c0001/cUids");
const usersRef = ref(fireDB, "users");

async function sendChat (ev, formVal, setFormVal) {
  // Setup work: prevent default, obtain user data,
  // and find latest message 
  ev.preventDefault();
  const { uid, displayName } = fireAuth.currentUser;
  
  // Update all three nodes: users, room/users, and messages/room/messages:

  const timeVal = Date.now();
  const timeValStr = timeVal.toString();
  await set( child( demoRoomMessagesRef, timeValStr), {
    uid: uid,
    text: formVal,
    time: timeVal
  });
  
  // Clear the form:
  setFormVal("");
}

function MessageInput () {
  const scrollViewRef = useRef();
  const [ formVal, setFormVal ] = useState("");
  return (
    <View>
      <TextInput
        value={ formVal }
        onChangeText={ setFormVal }
        placeholder="Type a message..."
      />
      <Button
        title="Send"
        onPress={ (ev) => sendChat(ev, formVal, setFormVal) }
      />
    </View>
  );
}

export default function DemoRoom () {
  const [ messages, setMessages ] = useState([]);

  const messageQuery = query(demoRoomMessagesRef, orderByKey());
  
  // Turn this into a hook:
  useEffect(() => {
    const newMessageHandler = (snapshot) => {
      const messages = [];
      snapshot.forEach((childSnapshot) => {
        messages.push(childSnapshot.val());
      });
      setMessages(messages);
    };
    onValue(messageQuery, newMessageHandler);
    return () => {
      off(messageQuery, newMessageHandler);
    };
  }, []);
  
  return (
    <View>
      { messages.map((message, index) => (
        <View key={index}>
          <Text>User ID: {message.uid}</Text>
          <Text>Messaged: {message.text}</Text>
        </View>
      ))}
      <MessageInput />
    </View>
  );
}
