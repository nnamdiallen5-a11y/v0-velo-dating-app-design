"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { VeloLogo } from "@/components/velo-logo"
import { Badge } from "@/components/ui/badge"

const USERS = [
  { id: 1, name: "Emma Watson", email: "emma@example.com", city: "Sydney", status: "active", joined: "2024-01-15" },
  { id: 2, name: "James Smith", email: "james@example.com", city: "Melbourne", status: "active", joined: "2024-02-10" },
  {
    id: 3,
    name: "Sophie Brown",
    email: "sophie@example.com",
    city: "Brisbane",
    status: "paused",
    joined: "2024-01-28",
  },
  { id: 4, name: "Alex Chen", email: "alex@example.com", city: "Sydney", status: "active", joined: "2024-03-05" },
]

const REPORTS = [
  {
    id: 1,
    type: "spam",
    reportedUser: "John Doe",
    reporter: "Emma Watson",
    reason: "Sending inappropriate messages",
    status: "pending",
    date: "2024-03-15",
  },
  {
    id: 2,
    type: "harassment",
    reportedUser: "Jane Smith",
    reporter: "James Smith",
    reason: "Harassing behavior in rooms",
    status: "pending",
    date: "2024-03-14",
  },
  {
    id: 3,
    type: "fake-profile",
    reportedUser: "Mike Johnson",
    reporter: "Sophie Brown",
    reason: "Using fake photos",
    status: "resolved",
    date: "2024-03-12",
  },
]

const ROOMS_CONFIG = [
  { id: 1, name: "Sydney Music Lounge", city: "Sydney", members: 24, status: "active" },
  { id: 2, name: "Melbourne Coffee Club", city: "Melbourne", members: 32, status: "active" },
  { id: 3, name: "Brisbane Fitness Crew", city: "Brisbane", members: 18, status: "inactive" },
  { id: 4, name: "Book Lovers Australia", city: "Australia-wide", members: 56, status: "active" },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"users" | "reports" | "rooms">("users")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <VeloLogo />
            <Badge className="bg-primary text-primary-foreground">Admin</Badge>
          </div>
          <Button variant="outline" className="rounded-xl bg-transparent">
            Sign Out
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-3xl font-bold">1,247</p>
                <p className="text-xs text-primary">+12% this month</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Active Rooms</p>
                <p className="text-3xl font-bold">24</p>
                <p className="text-xs text-primary">+3 new this week</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Pending Reports</p>
                <p className="text-3xl font-bold">2</p>
                <p className="text-xs text-muted-foreground">Needs attention</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Matches Today</p>
                <p className="text-3xl font-bold">89</p>
                <p className="text-xs text-primary">+5% from yesterday</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "users"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab("reports")}
            className={`px-4 py-2 font-medium transition-colors relative ${
              activeTab === "reports"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Reports
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <button
            onClick={() => setActiveTab("rooms")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "rooms"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Rooms
          </button>
        </div>

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">User Management</h2>
              <div className="relative w-64">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <Input placeholder="Search users..." className="pl-10 h-10 rounded-xl" />
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Name</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Email</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">City</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Joined</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {USERS.map((user) => (
                        <tr key={user.id} className="border-b border-border last:border-0 hover:bg-secondary/50">
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-primary">{user.name[0]}</span>
                              </div>
                              <span className="font-medium">{user.name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                          <td className="p-4 text-sm">{user.city}</td>
                          <td className="p-4">
                            <Badge
                              variant={user.status === "active" ? "default" : "secondary"}
                              className={user.status === "active" ? "bg-primary/10 text-primary" : ""}
                            >
                              {user.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">{user.joined}</td>
                          <td className="p-4">
                            <Button variant="ghost" size="sm" className="h-8 text-xs">
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Report Management</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                  All
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                  Pending
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                  Resolved
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {REPORTS.map((report) => (
                <Card key={report.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={report.status === "pending" ? "default" : "secondary"}
                            className={report.status === "pending" ? "bg-primary text-primary-foreground" : ""}
                          >
                            {report.status}
                          </Badge>
                          <Badge variant="outline">{report.type}</Badge>
                          <span className="text-xs text-muted-foreground">{report.date}</span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm">
                            <span className="font-medium">Reported user:</span> {report.reportedUser}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Reporter:</span> {report.reporter}
                          </p>
                          <p className="text-sm text-muted-foreground">{report.reason}</p>
                        </div>
                      </div>
                      {report.status === "pending" && (
                        <div className="flex gap-2">
                          <Button size="sm" className="rounded-xl">
                            Review
                          </Button>
                          <Button size="sm" variant="outline" className="rounded-xl bg-transparent">
                            Dismiss
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Rooms Tab */}
        {activeTab === "rooms" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Room Configuration</h2>
              <Button className="rounded-xl">Create New Room</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ROOMS_CONFIG.map((room) => (
                <Card key={room.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{room.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{room.city}</p>
                      </div>
                      <Badge
                        variant={room.status === "active" ? "default" : "secondary"}
                        className={room.status === "active" ? "bg-primary/10 text-primary" : ""}
                      >
                        {room.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Members</span>
                      <span className="font-medium">{room.members}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 rounded-xl bg-transparent">
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`flex-1 rounded-xl ${
                          room.status === "active" ? "text-destructive" : "text-primary"
                        }`}
                      >
                        {room.status === "active" ? "Deactivate" : "Activate"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
