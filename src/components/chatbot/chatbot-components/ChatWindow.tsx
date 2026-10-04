import ChatMessage from "./ChatMessage";
import type { ChatMessageData } from "./ChatMessage";
import ChatInput from "./ChatInput";

interface ChatWindowProps {
  messages: ChatMessageData[];
  onSendMessage: (message: string) => void;
  onClose: () => void;
}

function ChatWindow({ messages, onSendMessage, onClose }: ChatWindowProps) {
  return (
    <section className="chatbot-window">
      <header className="chatbot-window__header">
        <div>
          <h2>Portfolio Assistant</h2>
          <span>A guide to Michael's work and experience</span>
        </div>
        <button type="button" onClick={onClose} aria-label="Close chat">
          ×
        </button>
      </header>

      <div className="chatbot-window__messages">
        {messages.length === 0 ? (
          <div className="chatbot-window__welcome">
            <p>
              Ask me about Michael's projects, skills, experience, or how to get in touch.
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage
              message={message}
            />
          ))
        )}
      </div>

      <ChatInput onSend={onSendMessage} />
    </section>
  );
}

export default ChatWindow;