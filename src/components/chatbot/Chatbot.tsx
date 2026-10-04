import { useState } from "react";
import "./Chatbot.css";

import ChatButton from "./chatbot-components/ChatButton";
import ChatWindow from "./chatbot-components/ChatWindow";
import type { ChatMessageData } from "./chatbot-components/ChatMessage";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageData[]>([]);

  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) {
      return;
    }

    const userMessage: ChatMessageData = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();

      const aiMessage: ChatMessageData = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.response,
      };

      setMessages((previous) => [
        ...previous,
        aiMessage,
      ]);

    } catch (error) {
      console.error("Chat request failed:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <ChatWindow
          messages={messages}
          onSendMessage={handleSendMessage}
          onClose={() => setIsOpen(false)}
        />
      )}

      <ChatButton
        isOpen={isOpen}
        onClick={handleToggle}
      />
    </>
  );
}

export default Chatbot;