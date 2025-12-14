import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const CITY_ROOMS = [
  {
    id: 1,
    name: "Sydney Music Lounge",
    city: "Sydney",
    members: 24,
    active: true,
    description: "Share your favorite tracks and discover new music",
    icon: "🎵",
  },
  {
    id: 2,
    name: "Melbourne Coffee Club",
    city: "Melbourne",
    members: 32,
    active: true,
    description: "Coffee enthusiasts unite",
    icon: "☕",
  },
  {
    id: 3,
    name: "Brisbane Fitness Crew",
    city: "Brisbane",
    members: 18,
    active: false,
    description: "Workout tips and motivation",
    icon: "💪",
  },
]

const AUSTRALIA_ROOMS = [
  {
    id: 4,
    name: "Book Lovers Australia",
    city: "Australia-wide",
    members: 56,
    active: true,
    description: "Discuss your current reads",
    icon: "📚",
  },
  {
    id: 5,
    name: "Travel Stories",
    city: "Australia-wide",
    members: 43,
    active: true,
    description: "Share your adventures",
    icon: "✈️",
  },
  {
    id: 6,
    name: "Cooking Together",
    city: "Australia-wide",
    members: 38,
    active: false,
    description: "Recipe swaps and cooking tips",
    icon: "🍳",
  },
]

export default function RoomsPage() {
  return (
    <div className="min-h-screen pb-20 bg-background">
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Rooms</h1>
            <p className="text-muted-foreground">Join conversations and make connections</p>
          </div>

          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input placeholder="Search rooms..." className="pl-10 h-12 rounded-xl" />
          </div>
        </div>

        {/* City Rooms */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Your City</h2>
          <div className="space-y-3">
            {CITY_ROOMS.map((room) => (
              <Link key={room.id} href={`/rooms/${room.id}`}>
                <Card className="rounded-xl border-2 hover:border-primary/20 hover:bg-secondary/50 transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-xl shrink-0">
                            {room.icon}
                          </div>
                          <h3 className="font-semibold">{room.name}</h3>
                          {room.active && (
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" title="Active now" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{room.description}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                            </svg>
                            {room.city}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            {room.members} members
                          </span>
                        </div>
                      </div>
                      <svg
                        className="w-5 h-5 text-muted-foreground shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Australia-wide Rooms */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Australia-wide</h2>
          <div className="space-y-3">
            {AUSTRALIA_ROOMS.map((room) => (
              <Link key={room.id} href={`/rooms/${room.id}`}>
                <Card className="rounded-xl border-2 hover:border-primary/20 hover:bg-secondary/50 transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-xl shrink-0">
                            {room.icon}
                          </div>
                          <h3 className="font-semibold">{room.name}</h3>
                          {room.active && (
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" title="Active now" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{room.description}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                              />
                            </svg>
                            {room.city}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            {room.members} members
                          </span>
                        </div>
                      </div>
                      <svg
                        className="w-5 h-5 text-muted-foreground shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
