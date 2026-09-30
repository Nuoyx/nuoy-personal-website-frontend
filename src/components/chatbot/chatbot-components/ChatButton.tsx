interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function ChatButton({ isOpen, onClick }: ChatButtonProps) {
  return (
    <button
      type="button"
      className="chatbot-button"
      onClick={onClick}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? "×" : "💬"}
    </button>
  );
}

export default ChatButton;