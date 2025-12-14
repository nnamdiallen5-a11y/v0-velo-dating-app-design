"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { OnboardingProgress } from "@/components/onboarding-progress"

const AUSTRALIAN_CITIES = [
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Gold Coast",
  "Canberra",
  "Newcastle",
  "Hobart",
  "Darwin",
]

export default function CitySelectionPage() {
  const router = useRouter()
  const [selectedCity, setSelectedCity] = useState("")

  const handleContinue = () => {
    if (selectedCity) {
      router.push("/onboarding/intent")
    }
  }

  return (
    <div className="min-h-screen flex flex-col p-6 bg-background">
      <div className="w-full max-w-2xl mx-auto space-y-8 py-8">
        <OnboardingProgress current={1} total={5} />

        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Where are you based?</h1>
          <p className="text-muted-foreground text-lg">We'll help you connect with people in your area</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          {AUSTRALIAN_CITIES.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                selectedCity === city
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-muted-foreground/20 hover:bg-secondary/50"
              }`}
            >
              <span className="text-lg font-medium">{city}</span>
            </button>
          ))}
        </div>

        <Button
          onClick={handleContinue}
          disabled={!selectedCity}
          className="w-full h-14 text-base font-medium rounded-xl mt-8"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
