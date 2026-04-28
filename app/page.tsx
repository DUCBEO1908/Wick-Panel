"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Idle");

  async function sendCommand(action: string) {
    try {
      const res = await fetch("/api/command", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          guildId: "123",
          action
        })
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Sent: " + action);
      } else {
        setStatus("Failed");
      }

    } catch (err) {
      console.log(err);
      setStatus("Error sending command");
    }
  }

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>DISCORD CONTROL PANEL</h1>

      <button onClick={() => sendCommand("lock")}>
        LOCK SERVER
      </button>

      <br /><br />

      <button onClick={() => sendCommand("unlock")}>
        UNLOCK SERVER
      </button>

      <p>Status: {status}</p>
    </div>
  );
}