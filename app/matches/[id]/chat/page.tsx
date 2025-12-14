"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const MATCH_DATA = {
  id: 1,
  name: "Emma",
  age: 28,
  city: "Sydney",
  communicationStyle: "Usually replies within a few hours",
  image: "/warm-natural-portrait-of-young-woman-smiling-sydne.jpg",
}

const MESSAGES = [
  {
    id: 1,
    sender: "Emma",
    message: "Hi! Thanks for saying hi. I saw we both love coffee and art!",
    time: "2:30 PM",
    isUser: false,
  },
  {
    id: 2,
    sender: "You",
    message: "Hey Emma! Yes, I'm always on the hunt for good coffee spots. Have you been to any good cafes lately?",
    time: "2:35 PM",
    isUser: true,
  },
  {
    id: 3,
    sender: "Emma",
    message: "There's this amazing place in Surry Hills called Reuben Hills. Their flat white is incredible!",
    time: "2:40 PM",
    isUser: false,
  },
]

const CONVERSATION_STARTERS = [
  "What's your favorite cafe in Sydney?",
  "Any upcoming concerts you're excited about?",
  "What's the last book you read?",
  "Best place you've traveled to?",
]

export default function ChatPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState(MESSAGES)
  const [showStarters, setShowStarters] = useState(messages.length <= 3)
  const [showBehavioralHint] = useState(messages.length >= 3)

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          message: message.trim(),
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isUser: true,
        },
      ])
      setMessage("")
      if (messages.length + 1 >= 3) {
        setShowStarters(false)
      }
    }
  }

  const handleStarterClick = (starter: string) => {
    setMessage(starter)
    setShowStarters(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/matches">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
            </Link>
            <Link href={`/profile/${MATCH_DATA.id}`}>
              <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img
                  src={MATCH_DATA.image || "/placeholder.svg"}
                  alt={MATCH_DATA.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h1 className="font-semibold">{MATCH_DATA.name}</h1>
                  <p className="text-xs text-muted-foreground">Tap to view profile</p>
                </div>
              </div>
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="text-destructive">Block</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Behavioral Hint */}
      {showBehavioralHint && (
        <div className="max-w-2xl mx-auto w-full px-6 pt-4">
          <Card className="rounded-xl bg-primary/5 border-primary/20">
            <CardContent className="p-3 flex items-start gap-2">
              <svg
                className="w-4 h-4 text-primary shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs text-foreground/80 leading-relaxed">{MATCH_DATA.communicationStyle}</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-6 space-y-4 pb-32">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] space-y-1 ${msg.isUser ? "items-end" : "items-start"} flex flex-col`}>
              <div
                className={`px-4 py-3 rounded-2xl ${
                  msg.isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.message}</p>
              </div>
              <span className="text-xs text-muted-foreground px-2">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Conversation Starters */}
      {showStarters && (
        <div className="max-w-2xl mx-auto w-full px-6 pb-4">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-medium">Conversation starters</p>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {CONVERSATION_STARTERS.map((starter, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStarterClick(starter)}
                  className="shrink-0 px-4 py-2 bg-secondary hover:bg-secondary/70 rounded-xl text-sm transition-colors"
                >
                  {starter}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 h-12 rounded-xl"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend()
                }
              }}
            />
            <Button onClick={handleSend} disabled={!message.trim()} className="h-12 px-6 rounded-xl">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
