import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const OTHER_PROFILE = {
  id: 1,
  name: "Emma",
  age: 28,
  city: "Sydney",
  intent: "Long-term relationship",
  about: "Designer by day, music lover by night. Always up for a good coffee chat.",
  interests: ["Music", "Coffee", "Art", "Photography", "Reading"],
  communicationStyle: "Thoughtful responder",
  respectSignal: "Active member since January 2024",
  sharedInterests: ["Music", "Coffee", "Art"],
  image: "/warm-natural-portrait-of-young-woman-smiling-sydne.jpg",
}

export default function OtherProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="relative h-48 overflow-hidden">
          <img
            src={OTHER_PROFILE.image || "/placeholder.svg"}
            alt={OTHER_PROFILE.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          <Link href="/matches" className="absolute top-4 left-4">
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-full bg-background/80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
          </Link>
        </div>

        <div className="px-6 space-y-6 -mt-16 relative pb-24">
          {/* Profile Avatar */}
          <div className="w-32 h-32 rounded-2xl border-4 border-background shadow-lg overflow-hidden">
            <img
              src={OTHER_PROFILE.image || "/placeholder.svg"}
              alt={OTHER_PROFILE.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="space-y-6 pt-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">
                {OTHER_PROFILE.name}, {OTHER_PROFILE.age}
              </h1>
              <p className="text-muted-foreground flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                {OTHER_PROFILE.city}
              </p>
            </div>

            {/* Shared Interests Highlight */}
            {OTHER_PROFILE.sharedInterests.length > 0 && (
              <Card className="rounded-xl border-primary/20 bg-primary/5">
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-sm font-medium text-foreground">You both like</h3>
                  <div className="flex flex-wrap gap-2">
                    {OTHER_PROFILE.sharedInterests.map((interest) => (
                      <span
                        key={interest}
                        className="bg-primary/20 text-primary px-3 py-1.5 rounded-xl text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="rounded-xl">
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Looking for</h3>
                  <p>{OTHER_PROFILE.intent}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">About</h3>
                  <p className="leading-relaxed">{OTHER_PROFILE.about}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl">
              <CardContent className="p-4 space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {OTHER_PROFILE.interests.map((interest) => (
                    <span
                      key={interest}
                      className={`px-3 py-1.5 rounded-xl text-sm ${
                        OTHER_PROFILE.sharedInterests.includes(interest)
                          ? "bg-primary/10 text-primary font-medium"
                          : "bg-secondary"
                      }`}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl">
              <CardContent className="p-4 space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">Communication Style</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm">{OTHER_PROFILE.communicationStyle}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Respect Signal</p>
                    <p className="text-xs text-muted-foreground">{OTHER_PROFILE.respectSignal}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fixed Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
          <div className="max-w-2xl mx-auto px-6 py-4 flex gap-3">
            <Button variant="outline" className="flex-1 rounded-xl h-14 text-base bg-transparent">
              Skip
            </Button>
            <Button asChild className="flex-1 rounded-xl h-14 text-base font-medium">
              <Link href={`/matches/${OTHER_PROFILE.id}/chat`}>Say Hi</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
