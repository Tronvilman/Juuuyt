"use server"

export async function submitOnboardingForm(data: {
  companyName: string
  businessId: string
  personName: string
  phone: string
  email: string
  packageName: string
  packagePrice: number
}) {
  try {
    // TODO: Save to database/CRM
    // For now, log the data
    console.log("[v0] New lead submitted:", data)

    // TODO: Send email to liidi@tekijapuoti.fi
    // Email should contain all customer information
    const leadEmailContent = `
      Uusi liidi:
      
      Yritys: ${data.companyName}
      Y-tunnus: ${data.businessId}
      Yhteyshenkilö: ${data.personName}
      Puhelin: ${data.phone}
      Sähköposti: ${data.email}
      Valittu paketti: ${data.packageName} (${data.packagePrice}€/kk)
    `

    console.log("[v0] Lead email would be sent to liidi@tekijapuoti.fi:", leadEmailContent)

    // TODO: When payment is confirmed (Stripe webhook or invoice payment):
    // 1. Update lead status to "customer" in CRM/database (sorted by Y-tunnus)
    // 2. Send payment confirmation email to ville.olenius@tekijapuoti.fi

    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting onboarding form:", error)
    return { success: false, error: "Failed to submit form" }
  }
}

// TODO: Add function to handle payment confirmations
export async function handlePaymentConfirmation(businessId: string, paymentDetails: any) {
  // This will be called from Stripe webhook or invoice payment confirmation
  // 1. Move lead to customer in CRM (sorted by Y-tunnus/businessId)
  // 2. Send notification to ville.olenius@tekijapuoti.fi
  console.log("[v0] Payment confirmed for:", businessId, paymentDetails)

  const paymentEmailContent = `
    Maksu vastaanotettu:
    
    Y-tunnus: ${businessId}
    Maksutiedot: ${JSON.stringify(paymentDetails)}
  `

  console.log("[v0] Payment email would be sent to ville.olenius@tekijapuoti.fi:", paymentEmailContent)
}

// TODO: Add function to handle abandoned invoices
export async function handleAbandonedInvoice(email: string) {
  // Send follow-up notification to customer
  const followUpEmailContent = `
    Hei!
    
    Huomasimme, että et vielä suorittanut maksua. Otamme sinuun yhteyttä 24 tunnin sisällä.
    
    Ystävällisin terveisin,
    Tekijäpuoti
  `

  console.log("[v0] Follow-up email would be sent to:", email, followUpEmailContent)
}
