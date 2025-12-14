"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { OnboardingProgress } from "@/components/onboarding-progress"

const RELATIONSHIP_INTENTS = [
  {
    value: "long-term",
    title: "Long-term relationship",
    description: "Looking for something serious and lasting",
  },
  {
    value: "casual",
    title: "Casual dating",
    description: "Taking it slow and seeing where things go",
  },
  {
    value: "friendship",
    title: "Friendship first",
    description: "Building genuine connections that may lead somewhere",
  },
  {
    value: "figuring-out",
    title: "Still figuring it out",
    description: "Open to different possibilities",
  },
]

export default function IntentSelectionPage() {
  const router = useRouter()
  const [selectedIntent, setSelectedIntent] = useState("")

  const handleContinue = () => {
    if (selectedIntent) {
      router.push("/onboarding/interests")
    }
  }

  return (
    <div className="min-h-screen flex flex-col p-6 bg-background">
      <div className="w-full max-w-2xl mx-auto space-y-8 py-8">
        <OnboardingProgress current={2} total={5} />

        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">What are you looking for?</h1>
          <p className="text-muted-foreground text-lg">This helps us find the right matches for you</p>
        </div>

        <div className="space-y-3 pt-4">
          {RELATIONSHIP_INTENTS.map((intent) => (
            <button
              key={intent.value}
              onClick={() => setSelectedIntent(intent.value)}
              className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                selectedIntent === intent.value
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-muted-foreground/20 hover:bg-secondary/50"
              }`}
            >
              <div className="space-y-1">
                <div className="text-lg font-medium">{intent.title}</div>
                <div className="text-sm text-muted-foreground">{intent.description}</div>
              </div>
            </button>
          ))}
        </div>

        <Button
          onClick={handleContinue}
          disabled={!selectedIntent}
          className="w-full h-14 text-base font-medium rounded-xl mt-8"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
