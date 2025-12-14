"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { OnboardingProgress } from "@/components/onboarding-progress"

const COMMUNICATION_STYLES = [
  {
    value: "thoughtful",
    title: "Thoughtful responder",
    description: "I take my time to craft meaningful messages",
  },
  {
    value: "quick",
    title: "Quick replier",
    description: "I like keeping the conversation flowing",
  },
  {
    value: "balanced",
    title: "Balanced communicator",
    description: "Depends on the situation and my schedule",
  },
  {
    value: "voice",
    title: "Voice over text",
    description: "I prefer calls or voice notes when possible",
  },
]

export default function CommunicationStylePage() {
  const router = useRouter()
  const [selectedStyle, setSelectedStyle] = useState("")

  const handleContinue = () => {
    if (selectedStyle) {
      router.push("/onboarding/profile")
    }
  }

  return (
    <div className="min-h-screen flex flex-col p-6 bg-background">
      <div className="w-full max-w-2xl mx-auto space-y-8 py-8">
        <OnboardingProgress current={4} total={5} />

        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">How do you communicate?</h1>
          <p className="text-muted-foreground text-lg">This helps set expectations with your matches</p>
        </div>

        <div className="space-y-3 pt-4">
          {COMMUNICATION_STYLES.map((style) => (
            <button
              key={style.value}
              onClick={() => setSelectedStyle(style.value)}
              className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                selectedStyle === style.value
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-muted-foreground/20 hover:bg-secondary/50"
              }`}
            >
              <div className="space-y-1">
                <div className="text-lg font-medium">{style.title}</div>
                <div className="text-sm text-muted-foreground">{style.description}</div>
              </div>
            </button>
          ))}
        </div>

        <Button
          onClick={handleContinue}
          disabled={!selectedStyle}
          className="w-full h-14 text-base font-medium rounded-xl mt-8"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
