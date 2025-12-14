"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function EditProfilePage() {
  const [profile, setProfile] = useState({
    name: "Alex",
    age: "27",
    gender: "Non-binary",
    city: "Sydney",
    about: "Product designer who loves good coffee, live music, and weekend hikes. Always looking for new adventures.",
    interests: ["Music", "Coffee", "Art", "Travel", "Fitness", "Photography"],
    intent: "Long-term relationship",
    communicationStyle: "Balanced communicator",
  })

  const allInterests = [
    "Music",
    "Coffee",
    "Art",
    "Travel",
    "Fitness",
    "Photography",
    "Reading",
    "Cooking",
    "Hiking",
    "Movies",
    "Gaming",
    "Dancing",
  ]

  const toggleInterest = (interest: string) => {
    setProfile((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  return (
    <div className="min-h-screen pb-6 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b border-border">
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Edit Profile</h1>
            <Button size="sm" className="rounded-xl px-6">
              Save
            </Button>
          </div>
        </div>

        <div className="px-6 space-y-6 pt-6">
          {/* Photos */}
          <Card className="rounded-xl">
            <CardContent className="p-4 space-y-3">
              <Label className="text-base font-semibold">Photos</Label>
              <div className="grid grid-cols-3 gap-3">
                <div className="aspect-square rounded-xl bg-secondary flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 mx-auto text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-xs text-muted-foreground mt-1">Add photo</p>
                  </div>
                </div>
                <div className="aspect-square rounded-xl bg-secondary border-2 border-border" />
                <div className="aspect-square rounded-xl bg-secondary border-2 border-border" />
              </div>
            </CardContent>
          </Card>

          {/* Basic Info */}
          <Card className="rounded-xl">
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={profile.age}
                  onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Input
                  id="gender"
                  value={profile.gender}
                  onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={profile.city}
                  onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                  className="rounded-xl"
                />
              </div>
            </CardContent>
          </Card>

          {/* About Me */}
          <Card className="rounded-xl">
            <CardContent className="p-4 space-y-2">
              <Label htmlFor="about">About Me</Label>
              <Textarea
                id="about"
                value={profile.about}
                onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                className="rounded-xl min-h-[100px] resize-none"
                placeholder="Tell others about yourself..."
              />
              <p className="text-xs text-muted-foreground text-right">{profile.about.length}/500</p>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="rounded-xl">
            <CardContent className="p-4 space-y-3">
              <Label className="text-base font-semibold">Interests</Label>
              <p className="text-sm text-muted-foreground">Select at least 3 interests</p>
              <div className="flex flex-wrap gap-2">
                {allInterests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      profile.interests.includes(interest)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Relationship Intent */}
          <Card className="rounded-xl">
            <CardContent className="p-4 space-y-3">
              <Label className="text-base font-semibold">Looking for</Label>
              <div className="space-y-2">
                {["Long-term relationship", "Short-term relationship", "New friends", "Not sure yet"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setProfile({ ...profile, intent: option })}
                    className={`w-full p-3 rounded-xl text-left transition-colors ${
                      profile.intent === option
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Communication Style */}
          <Card className="rounded-xl">
            <CardContent className="p-4 space-y-3">
              <Label className="text-base font-semibold">Communication Style</Label>
              <div className="space-y-2">
                {["Quick responder", "Balanced communicator", "Thoughtful responder"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setProfile({ ...profile, communicationStyle: option })}
                    className={`w-full p-3 rounded-xl text-left transition-colors ${
                      profile.communicationStyle === option
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
