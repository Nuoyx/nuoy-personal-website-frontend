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

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);
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