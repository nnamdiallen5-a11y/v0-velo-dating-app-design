"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const USER_PROFILE = {
  name: "You",
  age: 27,
  city: "Sydney",
  intent: "Long-term relationship",
  about: "Product designer who loves good coffee, live music, and weekend hikes. Always looking for new adventures.",
  interests: ["Music", "Coffee", "Art", "Travel", "Fitness", "Photography"],
  communicationStyle: "Balanced communicator",
  respectSignal: "Active member since March 2024",
  image: null, // Set to null when no photo uploaded, or set to actual image path when uploaded
}

export default function ProfilePage() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="min-h-screen pb-20 bg-background">
      <div className="max-w-2xl mx-auto">
        {USER_PROFILE.image ? (
          <div className="relative h-48 overflow-hidden">
            <img
              src={USER_PROFILE.image || "/placeholder.svg"}
              alt={USER_PROFILE.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          </div>
        ) : (
          <div className="relative h-48 bg-secondary" />
        )}

        <div className="px-6 space-y-6 -mt-16 relative">
          {/* Profile Avatar */}
          <div className="flex justify-between items-end">
            <div className="w-32 h-32 rounded-2xl border-4 border-background shadow-lg overflow-hidden bg-secondary flex items-center justify-center">
              {USER_PROFILE.image ? (
                <img
                  src={USER_PROFILE.image || "/placeholder.svg"}
                  alt={USER_PROFILE.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
            </div>
            <Button asChild variant="outline" className="rounded-xl bg-background">
              <Link href="/profile/edit">Edit Profile</Link>
            </Button>
          </div>

          {/* Profile Info */}
          <div className="space-y-6 pt-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">
                {USER_PROFILE.name}, {USER_PROFILE.age}
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
                {USER_PROFILE.city}
              </p>
            </div>

            <Card className="rounded-xl">
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Looking for</h3>
                  <p>{USER_PROFILE.intent}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">About me</h3>
                  <p className="leading-relaxed">{USER_PROFILE.about}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl">
              <CardContent className="p-4 space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">My Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {USER_PROFILE.interests.map((interest) => (
                    <span key={interest} className="bg-secondary px-3 py-1.5 rounded-xl text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl">
              <CardContent className="p-4 space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">Communication Style</h3>
                <p className="text-sm">{USER_PROFILE.communicationStyle}</p>
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
                    <p className="text-xs text-muted-foreground">{USER_PROFILE.respectSignal}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pause Mode */}
            <Card className="rounded-xl">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="pause-mode" className="text-base font-medium cursor-pointer">
                      Pause Mode
                    </Label>
                    <p className="text-sm text-muted-foreground">Take a break from new matches</p>
                  </div>
                  <Switch id="pause-mode" checked={isPaused} onCheckedChange={setIsPaused} />
                </div>
              </CardContent>
            </Card>

            {isPaused && (
              <Card className="rounded-xl bg-secondary">
                <CardContent className="p-4 text-center space-y-2">
                  <p className="text-sm font-medium">Your profile is paused</p>
                  <p className="text-xs text-muted-foreground">
                    You won't appear in matches, but you can still chat with existing connections
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Settings */}
            <div className="space-y-3 pt-4">
              <Button asChild variant="outline" className="w-full rounded-xl h-12 justify-between bg-transparent">
                <Link href="/settings">
                  <span>Settings</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-xl h-12 text-destructive hover:bg-destructive/10 bg-transparent"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
