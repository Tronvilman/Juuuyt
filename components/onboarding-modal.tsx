"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { submitOnboardingForm } from "@/app/actions"

type Package = {
  name: string
  price: number
  description: string
}

const packages: Package[] = [
  { name: "Professional", price: 800, description: "Yritysviestintä ja imago" },
  { name: "Responsiveness", price: 1300, description: "Digitaalinen läsnäolo" },
  { name: "Full Digital", price: 1799, description: "Kokonaisvaltainen ratkaisu" },
]

export function OnboardingModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [step, setStep] = useState<"form" | "invoice" | "success">("form")
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    businessId: "",
    personName: "",
    phone: "",
    email: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = async () => {
    if (!selectedPackage) return

    setIsSubmitting(true)

    try {
      const result = await submitOnboardingForm({
        ...formData,
        packageName: selectedPackage.name,
        packagePrice: selectedPackage.price,
      })

      if (result.success) {
        setStep("invoice")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (step === "invoice") {
      // TODO: Send notification that customer will be contacted within 24 hours
      console.log("[v0] Customer closed invoice - trigger follow-up notification")
    }
    onOpenChange(false)
    // Reset state
    setTimeout(() => {
      setStep("form")
      setSelectedPackage(null)
      setFormData({
        companyName: "",
        businessId: "",
        personName: "",
        phone: "",
        email: "",
      })
    }, 300)
  }

  const isFormValid =
    formData.companyName &&
    formData.businessId &&
    formData.personName &&
    formData.phone &&
    formData.email &&
    selectedPackage

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {step === "form" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Aloita kasvumatkasi</DialogTitle>
              <DialogDescription>
                Täytä tietosi alle ja valitse sopiva palvelupaketti. Otamme sinuun yhteyttä 24 tunnin sisällä.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* Company Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Yritystiedot</h3>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="companyName">Yrityksen nimi *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="Esim. Oy Yritys Ab"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessId">Y-tunnus *</Label>
                    <Input
                      id="businessId"
                      value={formData.businessId}
                      onChange={(e) => handleInputChange("businessId", e.target.value)}
                      placeholder="1234567-8"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Person */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Yhteyshenkilö</h3>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="personName">Nimi *</Label>
                    <Input
                      id="personName"
                      value={formData.personName}
                      onChange={(e) => handleInputChange("personName", e.target.value)}
                      placeholder="Matti Meikäläinen"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Puhelinnumero *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+358 40 123 4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Sähköposti *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="matti@yritys.fi"
                    />
                  </div>
                </div>
              </div>

              {/* Package Selection */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Valitse palvelupaketti *</h3>
                <div className="grid gap-4">
                  {packages.map((pkg) => (
                    <Card
                      key={pkg.name}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedPackage?.name === pkg.name ? "border-primary border-2 bg-primary/5" : "border-2"
                      }`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-lg">{pkg.name}</h4>
                          <p className="text-sm text-muted-foreground">{pkg.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{pkg.price}€</p>
                          <p className="text-sm text-muted-foreground">/kk</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t">
              <Button variant="outline" onClick={handleClose}>
                Peruuta
              </Button>
              <Button onClick={handleNext} disabled={!isFormValid || isSubmitting} className="gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Lähetetään...
                  </>
                ) : (
                  <>
                    Seuraava
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </>
        )}

        {step === "invoice" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Lasku</DialogTitle>
              <DialogDescription>
                Alla on laskusi tiedot. Voit maksaa laskun tai käyttää Stripe-linkkiä.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              <Card className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center border-b pb-4">
                    <h3 className="text-2xl font-bold">Tekijäpuoti</h3>
                    <p className="text-sm text-muted-foreground">Kasvun hallinta</p>
                    <p className="text-sm text-muted-foreground">Helsinki, Finland</p>
                    {/* TODO: Add official company details (Y-tunnus, address, etc.) */}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Asiakas:</span>
                      <span className="font-semibold">{formData.companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Y-tunnus:</span>
                      <span className="font-semibold">{formData.businessId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Yhteyshenkilö:</span>
                      <span className="font-semibold">{formData.personName}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Palvelupaketti:</span>
                      <span className="font-semibold">{selectedPackage?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{selectedPackage?.description}</span>
                      <span>{selectedPackage?.price}€/kk</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Yhteensä:</span>
                      <span className="text-primary">{selectedPackage?.price}€</span>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                    <p>Viitenumero ja täydelliset laskutustiedot lähetetään sähköpostiisi.</p>
                    {/* TODO: Add reference number generation */}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  {/* TODO: Integrate Stripe payment link */}
                  Maksa Stripe-linkillä
                </Button>
                <p className="text-center text-sm text-muted-foreground">tai</p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  size="lg"
                  onClick={() => setStep("success")}
                >
                  Maksan laskulla myöhemmin
                </Button>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t">
              <Button variant="ghost" onClick={handleClose}>
                Sulje
              </Button>
            </div>
          </>
        )}

        {step === "success" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Kiitos yhteydenotostasi!</DialogTitle>
            </DialogHeader>

            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Tietosi on vastaanotettu!</p>
                <p className="text-muted-foreground">
                  Otamme sinuun yhteyttä 24 tunnin sisällä keskustellaksemme tarkemmin tarpeistasi ja aloittaaksemme
                  kasvumatkasi.
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-4 border-t">
              <Button onClick={handleClose}>Sulje</Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
