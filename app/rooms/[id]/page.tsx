"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const ROOMS_DATABASE = {
  1: {
    id: 1,
    name: "Sydney Music Lounge",
    city: "Sydney",
    members: 24,
    description: "Share your favorite tracks and discover new music together",
    icon: "🎵",
    headerImage: "/warm-atmospheric-music-lounge-headphones-vinyl-rec.jpg",
    quickPrompt: "Share your current favorite song",
    messages: [
      {
        id: 1,
        user: "Emma",
        message:
          "Just discovered this indie artist called Remi Wolf — her album 'Juno' is pure dopamine! Anyone else vibing to it?",
        time: "2m ago",
        reactions: ["🎵", "🔥"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 2,
        user: "James",
        message:
          "Who's hitting up Laneway Festival? The lineup this year is INSANE. Charli XCX, Fred again.., Caroline Polachek 😭",
        time: "5m ago",
        reactions: ["🙌", "❤️"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 3,
        user: "Sophie",
        message:
          "Current obsession: 'Vampire' by Olivia Rodrigo on repeat. What song has been living rent-free in your head lately?",
        time: "12m ago",
        reactions: ["❤️", "🎶"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 4,
        user: "Alex",
        message: "Hot take: Taylor Swift's Midnights is her best album. Change my mind 👀",
        time: "18m ago",
        reactions: ["🤔", "😮"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 5,
        user: "Emma",
        message:
          "Made a 3am sad girl playlist if anyone needs to cry it out tonight 💔 Drop your go-to breakup songs below",
        time: "25m ago",
        reactions: ["💔", "🥺"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
    ],
    backgroundClass: "bg-gradient-to-br from-background via-background to-purple-500/5",
  },
  2: {
    id: 2,
    name: "Melbourne Coffee Club",
    city: "Melbourne",
    members: 32,
    description: "Coffee enthusiasts unite",
    icon: "☕",
    headerImage: "/warm-atmospheric-music-lounge-headphones-vinyl-rec.jpg",
    quickPrompt: "What's your go-to coffee order?",
    messages: [
      {
        id: 1,
        user: "Sophie",
        message:
          "Just had the most incredible flat white at Market Lane in Prahran. The barista did actual latte art that looked like a swan 🦢☕",
        time: "3m ago",
        reactions: ["☕", "😍"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 2,
        user: "James",
        message: "Coffee nerds: what's your brew ratio for V60 pour over? I'm doing 1:16 but want to experiment",
        time: "8m ago",
        reactions: ["🤓", "☕"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 3,
        user: "Emma",
        message: "Unpopular opinion: oat milk >>> regular milk in coffee. It just froths better and tastes creamier!",
        time: "15m ago",
        reactions: ["☕", "👏"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 4,
        user: "Alex",
        message: "Anyone tried cold brew with vanilla and cinnamon? Game changer for summer mornings ☀️",
        time: "22m ago",
        reactions: ["☕", "🔥"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 5,
        user: "Sophie",
        message:
          "What beans are you all using at home? Just picked up some Ethiopian Yirgacheffe from Seven Seeds — floral notes are unreal",
        time: "30m ago",
        reactions: ["☕", "❤️"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
    ],
    backgroundClass: "bg-gradient-to-br from-background via-background to-amber-600/5",
  },
  3: {
    id: 3,
    name: "Brisbane Fitness Crew",
    city: "Brisbane",
    members: 18,
    description: "Workout tips and motivation",
    icon: "💪",
    headerImage: "/warm-atmospheric-music-lounge-headphones-vinyl-rec.jpg",
    quickPrompt: "Share your fitness goal for the week",
    messages: [
      {
        id: 1,
        user: "James",
        message:
          "Crushed a new 5K PB this morning along the Brisbane River — 22:45! Who else is training for City2South?",
        time: "4m ago",
        reactions: ["💪", "🔥"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 2,
        user: "Emma",
        message:
          "Anyone want to join a 6am gym session at West End tomorrow? Need accountability and a spotter for bench press 😅",
        time: "10m ago",
        reactions: ["🙌", "💪"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 3,
        user: "Sophie",
        message: "Post-workout snack check: greek yogurt + berries + honey or protein shake? What's your go-to?",
        time: "18m ago",
        reactions: ["🍓", "🥤"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 4,
        user: "Alex",
        message: "Hit 3 months consistent at the gym today 🎉 Progress pics are wild. Trust the process, friends!",
        time: "25m ago",
        reactions: ["💪", "🔥", "👏"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 5,
        user: "James",
        message: "Leg day = best day. Don't @ me. What's everyone's favorite workout split?",
        time: "35m ago",
        reactions: ["😤", "💪"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
    ],
    backgroundClass: "bg-gradient-to-br from-background via-background to-green-500/5",
  },
  4: {
    id: 4,
    name: "Book Lovers Australia",
    city: "Australia-wide",
    members: 56,
    description: "Discuss your current reads",
    icon: "📚",
    headerImage: "/warm-atmospheric-music-lounge-headphones-vinyl-rec.jpg",
    quickPrompt: "What book are you currently reading?",
    messages: [
      {
        id: 1,
        user: "Sophie",
        message:
          "Just finished 'Tomorrow, and Tomorrow, and Tomorrow' and I'm WRECKED. That line about love being 'revisions' hit different 😭 Has anyone else read it?",
        time: "1m ago",
        reactions: ["📚", "😭"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 2,
        user: "Emma",
        message:
          "Looking for fantasy recs after Fourth Wing! Need dragons, spice, and enemies-to-lovers vibes. What've you got?",
        time: "6m ago",
        reactions: ["🐉", "🔥"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 3,
        user: "Alex",
        message:
          "Currently reading 'The Seven Husbands of Evelyn Hugo' and I'm only 50 pages in but already OBSESSED. The writing is so lush!",
        time: "14m ago",
        reactions: ["📚", "❤️"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 4,
        user: "James",
        message:
          "Hot take: Colleen Hoover is overhyped. Give me literary fiction with actual depth. Recommend me something?",
        time: "20m ago",
        reactions: ["🤔", "👀"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 5,
        user: "Sophie",
        message:
          "What are you all reading right now? I need to add to my TBR pile (even though it's already 50+ books deep 😅)",
        time: "28m ago",
        reactions: ["📚", "😂"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 6,
        user: "Emma",
        message:
          "Favourite book quote? Mine: 'We accept the love we think we deserve' from Perks of Being a Wallflower 💔",
        time: "35m ago",
        reactions: ["❤️", "📖"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
    ],
    backgroundClass: "bg-gradient-to-br from-background via-background to-amber-700/5",
  },
  5: {
    id: 5,
    name: "Travel Stories",
    city: "Australia-wide",
    members: 43,
    description: "Share your adventures",
    icon: "✈️",
    headerImage: "/warm-atmospheric-music-lounge-headphones-vinyl-rec.jpg",
    quickPrompt: "Where's your dream destination?",
    messages: [
      {
        id: 1,
        user: "Emma",
        message:
          "Just got back from Bali and I'm already planning my next trip 😭 Uluwatu sunset was unreal. Anyone been to the Tegallalang rice terraces?",
        time: "5m ago",
        reactions: ["✈️", "😍"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 2,
        user: "Alex",
        message:
          "Planning a Great Ocean Road trip next month! Must-see stops? I've got 12 Apostles and Lorne on the list already",
        time: "11m ago",
        reactions: ["🚗", "🌊"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 3,
        user: "Sophie",
        message:
          "Dream destination: Santorini, Greece. Those white buildings with blue domes? Chef's kiss 😍 Who's been?",
        time: "20m ago",
        reactions: ["✈️", "🇬🇷"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 4,
        user: "James",
        message:
          "Solo travel tip: always book hostels with free walking tours. Met the best people that way in Barcelona!",
        time: "28m ago",
        reactions: ["🙌", "🌍"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 5,
        user: "Emma",
        message:
          "What's your travel style? I'm a chaotic 'book flights first, plan later' person and I need to know I'm not alone 😅",
        time: "35m ago",
        reactions: ["😂", "✈️"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
    ],
    backgroundClass: "bg-gradient-to-br from-background via-background to-blue-500/5",
  },
  6: {
    id: 6,
    name: "Cooking Together",
    city: "Australia-wide",
    members: 38,
    description: "Recipe swaps and cooking tips",
    icon: "🍳",
    headerImage: "/warm-atmospheric-music-lounge-headphones-vinyl-rec.jpg",
    quickPrompt: "Share what you're cooking tonight",
    messages: [
      {
        id: 1,
        user: "Sophie",
        message:
          "Made a creamy garlic pesto pasta tonight with homemade pesto (basil from my garden!) 🌿 Want the recipe?",
        time: "7m ago",
        reactions: ["🍝", "😋"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 2,
        user: "James",
        message:
          "Comfort food question: what do you crave after a long day? I'm a smash burger with cheese and pickles kinda guy 🍔",
        time: "13m ago",
        reactions: ["🍔", "❤️"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 3,
        user: "Emma",
        message:
          "HELP: My sourdough starter keeps dying 😭 What am I doing wrong? It's been 3 attempts and I'm losing hope",
        time: "22m ago",
        reactions: ["🍞", "😅"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 4,
        user: "Alex",
        message:
          "Tried making shakshuka this morning and WOW. Eggs poached in spicy tomato sauce with crusty bread? Game changer 🍳🍅",
        time: "30m ago",
        reactions: ["🍳", "🔥"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
      {
        id: 5,
        user: "Sophie",
        message:
          "What's everyone's go-to weeknight dinner when you're too tired to think? Mine's aglio e olio — 15 mins, minimal ingredients, delicious",
        time: "40m ago",
        reactions: ["🍝", "👌"],
        image: "/warm-natural-portrait-young-woman-smiling-casual.jpg",
      },
      {
        id: 6,
        user: "James",
        message:
          "Anyone else obsessed with air fryers? Just made crispy Brussels sprouts that actually taste amazing. What should I try next?",
        time: "48m ago",
        reactions: ["😋", "🥬"],
        image: "/warm-natural-portrait-young-man-smiling-casual.jpg",
      },
    ],
    backgroundClass: "bg-gradient-to-br from-background via-background to-orange-500/5",
  },
}

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState("")
  const [showPrompt, setShowPrompt] = useState(false)

  const roomId = Number.parseInt(params.id)
  const ROOM_DATA = ROOMS_DATABASE[roomId as keyof typeof ROOMS_DATABASE] || ROOMS_DATABASE[1]
  const MESSAGES = ROOM_DATA.messages

  const handleSend = () => {
    if (message.trim()) {
      setMessage("")
    }
  }

  return (
    <div className={`min-h-screen flex flex-col ${ROOM_DATA.backgroundClass || "bg-background"}`}>
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/rooms">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-lg shrink-0">
                {ROOM_DATA.icon}
              </div>
              <div>
                <h1 className="font-semibold">{ROOM_DATA.name}</h1>
                <p className="text-xs text-muted-foreground">{ROOM_DATA.members} members</p>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Room Header Image */}
      <div className="max-w-2xl mx-auto w-full">
        <div className="relative h-32 overflow-hidden">
          <img
            src={ROOM_DATA.headerImage || "/placeholder.svg"}
            alt={ROOM_DATA.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        </div>
      </div>

      {/* Room Description */}
      <div className="max-w-2xl mx-auto px-6 py-4">
        <Card className="rounded-xl border-2">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">{ROOM_DATA.description}</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Prompt Button */}
      <div className="max-w-2xl mx-auto px-6 pb-4">
        <Button
          onClick={() => setShowPrompt(!showPrompt)}
          variant="outline"
          className="w-full rounded-xl h-12 bg-secondary/50 border-2 hover:bg-secondary"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Quick Prompt: {ROOM_DATA.quickPrompt}
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pb-24 space-y-4">
        {MESSAGES.map((msg) => (
          <Card key={msg.id} className="rounded-xl">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={msg.image || "/placeholder.svg"}
                    alt={msg.user}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium text-sm">{msg.user}</span>
                </div>
                <span className="text-xs text-muted-foreground">{msg.time}</span>
              </div>
              <p className="text-sm leading-relaxed pl-10">{msg.message}</p>
              {msg.reactions.length > 0 && (
                <div className="flex gap-1 pl-10">
                  {msg.reactions.map((reaction, idx) => (
                    <button
                      key={idx}
                      className="px-2 py-1 bg-secondary rounded-lg text-xs hover:bg-secondary/70 transition-colors"
                    >
                      {reaction}
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

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
