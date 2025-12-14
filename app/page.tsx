import { VeloLogo } from "@/components/velo-logo"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Heart, MessageCircle, Shield, Users, Sparkles, MapPin } from "lucide-react"

export default function MarketingLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/3 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center border-b border-border">
          <VeloLogo />
          <div className="flex gap-3">
            <Button asChild variant="ghost" className="rounded-xl">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild className="rounded-xl">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-background pointer-events-none" />

          <div className="max-w-6xl mx-auto text-center space-y-8 relative">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Dating that feels <span className="text-primary">human again</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Velo is emotionally intelligent dating for Australian singles. Connect through warm conversations,
                shared interests, and intentional matches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto min-w-[200px] h-14 text-base font-medium rounded-xl"
              >
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[200px] h-14 text-base font-medium rounded-xl bg-transparent"
              >
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>

            <div className="pt-12">
              <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden border border-border animate-fade-in">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/15 to-transparent blur-2xl opacity-60 animate-pulse-slow" />
                <img
                  src="/velo-hero-couple-laughing-together-cinematic-golden-hour.jpg"
                  alt="Happy couple who met on Velo"
                  className="relative w-full h-full object-cover animate-zoom-in"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border">
                <img
                  src="/cinematic-romantic-couple-laughing-outdoors-golden.jpg"
                  alt="Couple enjoying time together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border">
                <img
                  src="/diverse-couple-walking-in-park-holding-hands-warm-.jpg"
                  alt="Couple walking together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border">
                <img
                  src="/interracial-couple-smiling-together-coffee-shop-na.jpg"
                  alt="Couple at coffee shop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Real Connections on Velo</h2>
              <p className="text-muted-foreground">Meet couples who found their person</p>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              <Card className="flex-shrink-0 w-80 p-6 space-y-4 rounded-xl snap-start">
                <div className="aspect-square rounded-xl overflow-hidden border border-border">
                  <img
                    src="/happy-interracial-couple-smiling-portrait-warm-rom.jpg"
                    alt="Emma and Leo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Emma & Leo</h3>
                  <p className="text-sm text-muted-foreground">Matched over music in the Sydney Music Lounge</p>
                </div>
              </Card>

              <Card className="flex-shrink-0 w-80 p-6 space-y-4 rounded-xl snap-start">
                <div className="aspect-square rounded-xl overflow-hidden border border-border">
                  <img
                    src="/diverse-couple-outdoor-portrait-smiling-genuine-co.jpg"
                    alt="Tariq and Sofia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Tariq & Sofia</h3>
                  <p className="text-sm text-muted-foreground">Found each other in the Book Lovers Room</p>
                </div>
              </Card>

              <Card className="flex-shrink-0 w-80 p-6 space-y-4 rounded-xl snap-start">
                <div className="aspect-square rounded-xl overflow-hidden border border-border">
                  <img
                    src="/interracial-couple-happy-portrait-natural-authenti.jpg"
                    alt="Maya and James"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Maya & James</h3>
                  <p className="text-sm text-muted-foreground">Connected through slow messaging and shared interests</p>
                </div>
              </Card>

              <Card className="flex-shrink-0 w-80 p-6 space-y-4 rounded-xl snap-start">
                <div className="aspect-square rounded-xl overflow-hidden border border-border">
                  <img
                    src="/diverse-couple-laughing-together-candid-moment-war.jpg"
                    alt="Priya and Nathan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Priya & Nathan</h3>
                  <p className="text-sm text-muted-foreground">Met through Melbourne Coffee Club conversations</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What Velo Is About Section */}
        <section className="w-full py-20 px-6 bg-secondary/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Velo Is About</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                An emotionally intelligent dating platform designed for meaningful connections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 space-y-3 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Intentional Dating</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Move beyond endless swiping. Velo prioritizes quality connections based on emotional compatibility and
                  shared values.
                </p>
              </Card>

              <Card className="p-6 space-y-3 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Non-Swipe Soft Matching</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Receive thoughtful soft introductions to compatible matches. No pressure, just genuine opportunities
                  to connect.
                </p>
              </Card>

              <Card className="p-6 space-y-3 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Shared-Interest Rooms</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Join topic-based social rooms to connect naturally with others who share your passions and interests.
                </p>
              </Card>

              <Card className="p-6 space-y-3 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Safety & Accountability</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Respectful community features including behavioral hints, respect signals, and clear communication
                  guidelines.
                </p>
              </Card>

              <Card className="p-6 space-y-3 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Emotionally Intelligent</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Built with emotional intelligence at its core, helping you communicate better and build deeper
                  connections.
                </p>
              </Card>

              <Card className="p-6 space-y-3 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Australia-Only Community</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Connect with singles across Australia in city-specific and nationwide rooms designed for local dating.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="w-full py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Everything you need for meaningful connections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Soft Match Introductions</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Receive curated match cards showing compatibility scores, shared interests, and communication styles.
                  Start conversations at your own pace with built-in conversation starters and behavioral hints.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Topic-Based Social Rooms</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Join live text-based rooms around music, coffee, fitness, books, travel, and more. Connect naturally
                  through shared passions with real-time conversations and quick prompts.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Respect & Reliability Indicators</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  See membership badges, verified profiles, and positive community indicators. Know who's committed to
                  respectful, genuine connections before you engage.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Behavior-Aware Communication</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Receive gentle nudges after multiple messages, conversation starters when you're stuck, and
                  communication vibes that help you understand compatibility before diving deep.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Mobile-First App Experience</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Clean, minimal design with zero cognitive load. Navigate effortlessly between matches, rooms, and your
                  profile with intuitive bottom navigation and clear visual hierarchy.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Australia-Wide & City-Specific Dating</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Connect with singles in Sydney, Melbourne, Brisbane, and beyond. Join city-specific rooms or
                  Australia-wide conversations to expand your dating pool naturally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 px-6 bg-secondary/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Three simple steps to meaningful connections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-semibold">Join Velo</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Create your profile in minutes. Tell us about your city, interests, relationship goals, and
                  communication style through our thoughtful onboarding.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-semibold">Explore Rooms & Meet People</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Jump into social rooms that match your interests. Chat naturally about music, coffee, fitness, or
                  whatever you're passionate about.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-semibold">Receive Compatibility-Based Soft Matches</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Get thoughtful match introductions based on emotional compatibility, shared interests, and
                  communication vibes. Start meaningful conversations at your pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="w-full py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Us</h2>
            <div className="space-y-6 text-lg text-muted-foreground text-pretty leading-relaxed">
              <p>
                Velo was created to address a growing challenge in modern dating: the feeling of disconnection despite
                endless options. We believe dating should feel warm, intentional, and genuinely human.
              </p>
              <p>
                Our mission is to reduce loneliness among Australian singles by prioritizing emotional intelligence,
                safety, and meaningful connections. We're building a community where respect isn't optional, where
                conversations flow naturally, and where compatibility goes beyond surface-level attributes.
              </p>
              <p>
                Designed specifically for Australians, Velo understands local dating culture and creates spaces where
                genuine connections can flourish. We're not just another dating app—we're a movement toward more
                intentional, emotionally aware relationships.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="w-full py-20 px-6 bg-secondary/50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Find Your Person?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Join the Velo community and experience dating that feels human again
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto min-w-[200px] h-14 text-base font-medium rounded-xl"
              >
                <Link href="/signup">Create Your Profile</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[200px] h-14 text-base font-medium rounded-xl bg-transparent"
              >
                <Link href="/signin">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>Made with care for Australian singles</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
