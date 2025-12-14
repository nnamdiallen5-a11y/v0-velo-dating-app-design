import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const SOFT_MATCHES = [
  {
    id: 1,
    name: "Emma",
    age: 28,
    city: "Sydney",
    sharedInterests: ["Music", "Coffee", "Art"],
    matchScore: 92,
    image: "/warm-natural-portrait-of-young-woman-smiling-sydne.jpg",
  },
  {
    id: 2,
    name: "James",
    age: 30,
    city: "Sydney",
    sharedInterests: ["Travel", "Fitness", "Photography"],
    matchScore: 88,
    image: "/warm-natural-portrait-of-young-man-smiling-sydney-.jpg",
  },
  {
    id: 3,
    name: "Sophie",
    age: 26,
    city: "Sydney",
    sharedInterests: ["Reading", "Nature", "Wine"],
    matchScore: 85,
    image: "/warm-natural-portrait-of-young-woman-smiling-sydne.jpg",
  },
]

const RECOMMENDED_ROOMS = [
  {
    id: 1,
    name: "Sydney Music Lounge",
    city: "Sydney",
    members: 24,
    activity: "Active now",
    icon: "🎵",
  },
  {
    id: 2,
    name: "Coffee & Conversations",
    city: "Sydney",
    members: 18,
    activity: "2 new messages",
    icon: "☕",
  },
  {
    id: 3,
    name: "Weekend Adventurers",
    city: "Sydney",
    members: 31,
    activity: "Active now",
    icon: "🏔️",
  },
  {
    id: 4,
    name: "Book Club Social",
    city: "Australia-wide",
    members: 45,
    activity: "5 new messages",
    icon: "📚",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20 bg-background">
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">New connections are waiting for you</p>
        </div>

        {/* Soft Matches Carousel */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Your Soft Matches</h2>
            <Link href="/matches" className="text-sm text-primary hover:underline">
              See all
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
            {SOFT_MATCHES.map((match) => (
              <Card key={match.id} className="min-w-[280px] rounded-xl border-2 hover:border-primary/20 transition-all">
                <CardContent className="p-4 space-y-3">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-2">
                    <img
                      src={match.image || "/placeholder.svg"}
                      alt={match.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">
                        {match.name}, {match.age}
                      </h3>
                      <p className="text-sm text-muted-foreground">{match.city}</p>
                    </div>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium">
                      {match.matchScore}% match
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Shared interests</p>
                    <div className="flex flex-wrap gap-1">
                      {match.sharedInterests.map((interest) => (
                        <span key={interest} className="bg-secondary px-2 py-1 rounded-lg text-xs">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full rounded-xl h-10">
                    <Link href={`/matches/${match.id}`}>Say Hi</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Rooms */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recommended Rooms</h2>

          <div className="space-y-3">
            {RECOMMENDED_ROOMS.map((room) => (
              <Link key={room.id} href={`/rooms/${room.id}`}>
                <Card className="rounded-xl border-2 hover:border-primary/20 hover:bg-secondary/50 transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-xl shrink-0">
                            {room.icon}
                          </div>
                          <h3 className="font-semibold">{room.name}</h3>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {room.city}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {room.members}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-primary font-medium">{room.activity}</span>
                        <svg
                          className="w-5 h-5 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
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
