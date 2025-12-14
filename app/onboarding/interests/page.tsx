"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { OnboardingProgress } from "@/components/onboarding-progress"

const INTERESTS = [
  "Music",
  "Travel",
  "Fitness",
  "Cooking",
  "Art",
  "Reading",
  "Photography",
  "Gaming",
  "Nature",
  "Movies",
  "Coffee",
  "Wine",
  "Dancing",
  "Sports",
  "Technology",
  "Fashion",
  "Yoga",
  "Pets",
]

export default function InterestsSelectionPage() {
  const router = useRouter()
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest))
    } else {
      setSelectedInterests([...selectedInterests, interest])
    }
  }

  const handleContinue = () => {
    if (selectedInterests.length >= 3) {
      router.push("/onboarding/communication")
    }
  }

  return (
    <div className="min-h-screen flex flex-col p-6 bg-background">
      <div className="w-full max-w-2xl mx-auto space-y-8 py-8">
        <OnboardingProgress current={3} total={5} />

        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">What are you into?</h1>
          <p className="text-muted-foreground text-lg">Choose at least 3 interests that matter to you</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
          {INTERESTS.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedInterests.includes(interest)
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-muted-foreground/20 hover:bg-secondary/50"
              }`}
            >
              <span className="text-base font-medium">{interest}</span>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <div className="text-center text-sm text-muted-foreground">
            {selectedInterests.length} selected {selectedInterests.length < 3 && "(minimum 3)"}
          </div>
          <Button
            onClick={handleContinue}
            disabled={selectedInterests.length < 3}
            className="w-full h-14 text-base font-medium rounded-xl"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
