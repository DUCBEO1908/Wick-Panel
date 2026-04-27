"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Idle");
  const [loading, setLoading] = useState(false);

  const sendCommand = async (action: string) => {
    try {
      setLoading(true);
      setStatus("Sending command...");

      await fetch("http://localhost:3001/command", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guildId: "123",
          action: action,
        }),
      });

      setStatus("Success: " + action);
    } catch (error) {
      setStatus("Error sending command");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>DISCORD CONTROL PANEL</h1>

        <p style={styles.status}>
          Status: <b>{status}</b>
        </p>

        <button
          style={styles.lock}
          disabled={loading}
          onClick={() => sendCommand("lock")}
        >
          LOCK SERVER
        </button>

        <button
          style={styles.unlock}
          disabled={loading}
          onClick={() => sendCommand("unlock")}
        >
          UNLOCK SERVER
        </button>
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    fontFamily: "Arial",
  },
  card: {
    width: 420,
    padding: 30,
    borderRadius: 15,
    background: "#111827",
    color: "white",
    textAlign: "center",
    boxShadow: "0 0 30px rgba(0,0,0,0.6)",
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
  },
  status: {
    marginBottom: 20,
    color: "#94a3b8",
  },
  lock: {
    width: "100%",
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    border: "none",
    background: "#ef4444",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  unlock: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "none",
    background: "#22c55e",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};