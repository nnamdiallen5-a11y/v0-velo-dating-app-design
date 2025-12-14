"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { OnboardingProgress } from "@/components/onboarding-progress"

export default function ProfileSetupPage() {
  const router = useRouter()
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    about: "",
  })

  const handleContinue = () => {
    if (profile.name && profile.age && profile.gender && profile.about) {
      router.push("/home")
    }
  }

  const isComplete = profile.name && profile.age && profile.gender && profile.about

  return (
    <div className="min-h-screen flex flex-col p-6 bg-background">
      <div className="w-full max-w-2xl mx-auto space-y-8 py-8">
        <OnboardingProgress current={5} total={5} />

        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Complete your profile</h1>
          <p className="text-muted-foreground text-lg">Tell us a bit about yourself</p>
        </div>

        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">First name</Label>
            <Input
              id="name"
              placeholder="Your first name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="h-12 rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="25"
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                value={profile.gender}
                onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                className="w-full h-12 px-3 rounded-xl border-2 border-input bg-background focus:border-ring focus:outline-none"
              >
                <option value="">Select...</option>
                <option value="woman">Woman</option>
                <option value="man">Man</option>
                <option value="non-binary">Non-binary</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="about">About me</Label>
            <Textarea
              id="about"
              placeholder="Tell potential matches about yourself..."
              value={profile.about}
              onChange={(e) => setProfile({ ...profile, about: e.target.value })}
              className="min-h-32 rounded-xl resize-none"
            />
            <p className="text-xs text-muted-foreground">{profile.about.length}/500 characters</p>
          </div>

          <div className="space-y-3 pt-4">
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center space-y-3">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Add photos</p>
                <p className="text-xs text-muted-foreground">Upload at least 2 photos (optional for now)</p>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={handleContinue}
          disabled={!isComplete}
          className="w-full h-14 text-base font-medium rounded-xl"
        >
          Complete Setup
        </Button>
      </div>
    </div>
  )
}
