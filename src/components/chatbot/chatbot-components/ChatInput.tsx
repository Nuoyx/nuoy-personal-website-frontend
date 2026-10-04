import { useState, type SubmitEvent } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    if (!input.trim()) {
      return;
    }

    onSend(input);
    setInput("");
  };

  return (
    <form
      className="chatbot-input"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Ask about projects, skills, or experience"
        aria-label="Message the portfolio assistant"
      />

      <button type="submit" aria-label="Send message">
        ^
      </button>
    </form>
  );
}

export default ChatInput;