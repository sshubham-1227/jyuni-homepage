"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    email: "",
    phone: "",
    role: "",
    providers: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="glass-card p-8">
      <h2 className="font-serif font-bold text-2xl mb-6">Book a personalized demo</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="clinic">Clinic/Practice Name *</Label>
            <Input
              id="clinic"
              value={formData.clinic}
              onChange={(e) => handleChange("clinic", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="role">Your Role *</Label>
            <Select onValueChange={(value) => handleChange("role", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bcba">BCBA</SelectItem>
                <SelectItem value="rbt">RBT</SelectItem>
                <SelectItem value="owner">Practice Owner</SelectItem>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="providers">Number of Providers</Label>
            <Select onValueChange={(value) => handleChange("providers", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3">1-3 providers</SelectItem>
                <SelectItem value="4-10">4-10 providers</SelectItem>
                <SelectItem value="11-25">11-25 providers</SelectItem>
                <SelectItem value="26-50">26-50 providers</SelectItem>
                <SelectItem value="50+">50+ providers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message">Tell us about your practice</Label>
          <Textarea
            id="message"
            placeholder="What challenges are you facing? What features are most important to you?"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full gradient-bg hover:opacity-90 transition-opacity">
          Schedule Demo
        </Button>
      </form>
    </Card>
  )
}
