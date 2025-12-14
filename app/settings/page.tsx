"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [messageNotifications, setMessageNotifications] = useState(true)
  const [matchNotifications, setMatchNotifications] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [showAge, setShowAge] = useState(true)
  const [showDistance, setShowDistance] = useState(true)

  return (
    <div className="min-h-screen pb-6 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b border-border">
          <div className="flex items-center gap-4 px-6 py-4">
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>
        </div>

        <div className="px-6 space-y-6 pt-6">
          {/* Edit Profile */}
          <Card className="rounded-xl">
            <CardContent className="p-0">
              <Link href="/profile/edit">
                <button className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Edit Profile</p>
                      <p className="text-sm text-muted-foreground">Update your photos and info</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold px-1">Account Settings</h2>
            <Card className="rounded-xl">
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input id="email" type="email" defaultValue="alex@example.com" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Button variant="outline" className="w-full rounded-xl justify-start bg-transparent">
                    Change Password
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                    Phone (optional)
                  </Label>
                  <Input id="phone" type="tel" placeholder="Add phone number" className="rounded-xl" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preferences */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold px-1">Preferences</h2>
            <Card className="rounded-xl">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1 flex-1">
                    <Label className="text-sm font-medium">Gender preference</Label>
                    <p className="text-sm text-muted-foreground">Everyone</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1 flex-1">
                    <Label className="text-sm font-medium">Age range</Label>
                    <p className="text-sm text-muted-foreground">24-35</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1 flex-1">
                    <Label className="text-sm font-medium">Distance range</Label>
                    <p className="text-sm text-muted-foreground">Within 25 km</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1 flex-1">
                    <Label className="text-sm font-medium">Communication style</Label>
                    <p className="text-sm text-muted-foreground">Balanced communicator</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Privacy & Safety */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold px-1">Privacy & Safety</h2>
            <Card className="rounded-xl">
              <CardContent className="p-4 space-y-4">
                <button className="w-full flex items-center justify-between text-left">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Blocked users</p>
                    <p className="text-sm text-muted-foreground">0 users blocked</p>
                  </div>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="show-age" className="text-sm font-medium cursor-pointer">
                        Show age
                      </Label>
                      <p className="text-sm text-muted-foreground">Display your age on profile</p>
                    </div>
                    <Switch id="show-age" checked={showAge} onCheckedChange={setShowAge} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="show-distance" className="text-sm font-medium cursor-pointer">
                        Show distance
                      </Label>
                      <p className="text-sm text-muted-foreground">Display distance on profile</p>
                    </div>
                    <Switch id="show-distance" checked={showDistance} onCheckedChange={setShowDistance} />
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="pause-velo" className="text-base font-medium cursor-pointer">
                        Pause Velo mode
                      </Label>
                      <p className="text-sm text-muted-foreground">Take a break from new matches</p>
                    </div>
                    <Switch id="pause-velo" checked={isPaused} onCheckedChange={setIsPaused} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold px-1">Notifications</h2>
            <Card className="rounded-xl">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="email-notifications" className="text-sm font-medium cursor-pointer">
                      Email notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="push-notifications" className="text-sm font-medium cursor-pointer">
                      Push notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">Get alerts on your device</p>
                  </div>
                  <Switch id="push-notifications" checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="message-notifications" className="text-sm font-medium cursor-pointer">
                      New messages
                    </Label>
                    <p className="text-sm text-muted-foreground">Notify me of new messages</p>
                  </div>
                  <Switch
                    id="message-notifications"
                    checked={messageNotifications}
                    onCheckedChange={setMessageNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="match-notifications" className="text-sm font-medium cursor-pointer">
                      New matches
                    </Label>
                    <p className="text-sm text-muted-foreground">Notify me of soft intros</p>
                  </div>
                  <Switch
                    id="match-notifications"
                    checked={matchNotifications}
                    onCheckedChange={setMatchNotifications}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Help & Support */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold px-1">Help & Support</h2>
            <Card className="rounded-xl">
              <CardContent className="p-0">
                <button className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">Help Center</p>
                  </div>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Logout */}
          <Button className="w-full rounded-xl h-12 bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}
