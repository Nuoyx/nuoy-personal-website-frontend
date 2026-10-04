export interface ChatMessageData {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatMessageProps {
  message: ChatMessageData;
}

function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`chat-message chat-message--${message.role}`}
    >
      {message.content}
    </div>
  );
}

export default ChatMessage;