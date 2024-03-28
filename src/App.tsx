import { useState } from "react";
import AgoraRTC, { AgoraRTCProvider, LocalVideoTrack, RemoteUser, useJoin } from "agora-rtc-react";
import "./App.css";
import {
  useClientEvent,
  useLocalCameraTrack,
  usePublish,
  useRTCClient,
  useRemoteUsers,
} from "agora-rtc-react";
import { IMicrophoneAudioTrack, ICameraVideoTrack } from "agora-rtc-sdk-ng";

function App() {
  const [count, setCount] = useState(0);
  const [joined, setJoined] = useState(false);

  const agoraEngine = useRTCClient(AgoraRTC.createClient({
    codec: "vp8",
    mode: config.selectedProduct
  }))

  useClientEvent(agoraEngine, "user-joined", (user) => {
    console.log("The user" , user.uid , " has joined the channel");
  });

  useClientEvent(agoraEngine, "user-left", (user) => {
    console.log("The user" , user.uid , " has left the channel");
  });

  useClientEvent(agoraEngine, "user-published", (user, mediaType) => {
    console.log("The user" , user.uid , " has published media in the channel");
  });

  
  return (
    <>
      <AgoraRTCProvider client={agoraEngine}>
	<AgoraManager config={config} children = {<> </>} />
      </AgoraRTCProvider>
    </>
  );
}

export default App;
