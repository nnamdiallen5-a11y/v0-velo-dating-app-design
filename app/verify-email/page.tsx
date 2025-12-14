import { VeloLogo } from "@/components/velo-logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md space-y-8 text-center">
        <VeloLogo className="justify-center" />

        <div className="space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Check your email</h1>
            <p className="text-muted-foreground leading-relaxed">
              We've sent a verification link to your email address. Click the link to verify your account and continue.
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <Button asChild variant="outline" className="w-full h-12 text-base font-medium rounded-xl bg-transparent">
            <Link href="/signup">Resend verification email</Link>
          </Button>
          <Button asChild className="w-full h-12 text-base font-medium rounded-xl">
            <Link href="/onboarding/city">Continue to Onboarding</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
