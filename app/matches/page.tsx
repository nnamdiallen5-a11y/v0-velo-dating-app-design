"use client"

import { useState } from "react"
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
    about: "Designer by day, music lover by night. Always up for a good coffee chat.",
    communicationStyle: "Thoughtful responder",
    image: "/warm-natural-portrait-of-young-woman-smiling-sydne.jpg",
  },
  {
    id: 2,
    name: "James",
    age: 30,
    city: "Sydney",
    sharedInterests: ["Travel", "Fitness", "Photography"],
    matchScore: 88,
    about: "Adventure seeker and fitness enthusiast. Love capturing moments through my lens.",
    communicationStyle: "Quick replier",
    image: "/warm-natural-portrait-of-young-man-smiling-sydney-.jpg",
  },
  {
    id: 3,
    name: "Sophie",
    age: 26,
    city: "Sydney",
    sharedInterests: ["Reading", "Nature", "Wine"],
    matchScore: 85,
    about: "Bookworm who loves hiking and a good glass of wine on the weekend.",
    communicationStyle: "Balanced communicator",
    image: "/warm-natural-portrait-of-young-woman-smiling-sydne.jpg",
  },
]

export default function MatchesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentMatch = SOFT_MATCHES[currentIndex]

  const handleSkip = () => {
    if (currentIndex < SOFT_MATCHES.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className="min-h-screen pb-20 bg-background">
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Your Matches</h1>
          <p className="text-muted-foreground">People who share your interests and values</p>
        </div>

        {/* Soft Introduction Card */}
        <div className="space-y-4">
          {currentMatch ? (
            <Card className="rounded-2xl border-2 overflow-hidden">
              <CardContent className="p-0">
                {/* Match Image Placeholder */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={currentMatch.image || "/placeholder.svg"}
                    alt={currentMatch.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-background px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-sm font-medium text-primary">{currentMatch.matchScore}% match</span>
                  </div>
                </div>

                {/* Match Info */}
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">
                      {currentMatch.name}, {currentMatch.age}
                    </h2>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      {currentMatch.city}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">About</h3>
                    <p className="leading-relaxed">{currentMatch.about}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Shared Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentMatch.sharedInterests.map((interest) => (
                        <span
                          key={interest}
                          className="bg-primary/10 text-primary px-3 py-1.5 rounded-xl text-sm font-medium"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Communication Style</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-sm">{currentMatch.communicationStyle}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={handleSkip}
                      variant="outline"
                      size="lg"
                      className="flex-1 rounded-xl h-14 text-base bg-transparent"
                    >
                      Skip
                    </Button>
                    <Button asChild size="lg" className="flex-1 rounded-xl h-14 text-base font-medium">
                      <Link href={`/matches/${currentMatch.id}/chat`}>Say Hi</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="rounded-2xl border-2">
              <CardContent className="p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">You're all caught up!</h3>
                  <p className="text-muted-foreground">Check back soon for new matches</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Match Progress */}
        {SOFT_MATCHES.length > 0 && (
          <div className="flex justify-center gap-2">
            {SOFT_MATCHES.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "w-8 bg-primary" : idx < currentIndex ? "w-2 bg-primary/50" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
