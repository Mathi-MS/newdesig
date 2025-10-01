import { Tooltip } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { MdChat, MdClose, MdSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Define Q&A with multiple keywords per answer
type QAItem = {
  keywords: string[];
  answer: string;
};

const qaData: QAItem[] = [
  {
    keywords: ["hello", "hi"],
    answer: "Hi there 👋! How can I help you today?",
  },
  {
    keywords: [
      "services",
      "web development",
      "mobile development",
      "graphic design",
    ],
    answer: "We offer Web Development, Mobile Development, and Graphic Design.",
  },
  {
    keywords: ["contact"],
    answer: "You can reach us at contact@example.com or via WhatsApp.",
  },
  {
    keywords: ["price", "pricing"],
    answer:
      "Our pricing depends on your project requirements. Book a free consultation to know more.",
  },
];

export const WebChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text?: string; isContact?: boolean }[]
  >([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user" as const, text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Find matching keyword
    const matchedItem = qaData.find((item) =>
      item.keywords.some((keyword) =>
        input.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    if (matchedItem) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: matchedItem.answer },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "I’m not sure I understand 🤔. Please contact us for help.",
          isContact: true,
        },
      ]);
    }

    setInput("");
  };

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          from: "bot",
          text: "Hi there 👋! How can I help you today?",
        },
      ]);
    }
  }, [isOpen]);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <Tooltip title="Chat with us" arrow>
        <div>
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              style={{
                position: "fixed",
                bottom: 20,
                right: 20,
                background: "var(--primary)",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                zIndex: 999999999999,
              }}
            >
              <MdChat />
            </button>
          )}

          {isOpen && (
            <div
              ref={chatRef}
              style={{
                position: "fixed",
                bottom: 80,
                right: 20,
                width: "300px",
                maxHeight: "400px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                zIndex: 999999999999,
              }}
            >
              {/* Header */}
              <div
                style={{
                  background: "var(--primary, #16a34a)",
                  color: "#fff",
                  padding: "10px 15px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 600,
                  fontFamily: "Syne",
                  fontSize: "16px",
                }}
              >
                Chat with us
                <MdClose
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsOpen(false)}
                />
              </div>

              {/* Messages */}
              <div
                style={{
                  flex: 1,
                  padding: "10px",
                  overflowY: "auto",
                  fontSize: "14px",
                  minHeight: "200px",
                }}
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "8px",
                      textAlign: msg.from === "user" ? "right" : "left",
                    }}
                  >
                    {msg.isContact ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            padding: "8px 12px",
                            borderRadius: "15px",
                            background: "#f1f1f1",
                            color: "#333",
                            marginBottom: "5px",
                            fontFamily: "Syne",
                            fontSize: "12px",
                          }}
                        >
                          {msg.text}
                        </span>
                        <button
                          onClick={() => {
                            navigate("/contact");
                            setIsOpen(false);
                          }}
                          style={{
                            background: "var(--primary, #16a34a)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            padding: "6px 12px",
                            cursor: "pointer",
                            fontWeight: 500,
                            fontFamily: "Syne",
                            fontSize: "12px",
                          }}
                        >
                          Contact Us
                        </button>
                      </div>
                    ) : (
                      <span
                        style={{
                          display: "inline-block",
                          padding: "8px 12px",
                          borderRadius: "15px",
                          fontFamily: "Syne",
                          fontSize: "12px",
                          background:
                            msg.from === "user"
                              ? "var(--primary, #16a34a)"
                              : "#f1f1f1",
                          color: msg.from === "user" ? "#fff" : "#333",
                        }}
                      >
                        {msg.text}
                      </span>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div
                style={{
                  display: "flex",
                  borderTop: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                <input
                  type="text"
                  placeholder="Type your question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    padding: "8px",
                    fontSize: "14px",
                    color: "var(--coral-primary-color)",
                    fontFamily: "Syne",
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={handleSend}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--primary, #16a34a)",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  <MdSend />
                </button>
              </div>
            </div>
          )}
        </div>
      </Tooltip>
    </>
  );
};
