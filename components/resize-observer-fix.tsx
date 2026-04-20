"use client"

import { useEffect } from "react"

export function ResizeObserverFix() {
  useEffect(() => {
    // Suppress ResizeObserver errors - these are benign and occur during layout recalculations
    const resizeObserverErr = /ResizeObserver loop/
    
    const handleError = (event: Event) => {
      const e = event as ErrorEvent
      if (e.message && resizeObserverErr.test(e.message)) {
        event.stopImmediatePropagation()
        event.preventDefault()
      }
    }

    // Use capture phase to catch errors earlier
    window.addEventListener("error", handleError, true)
    
    // Also suppress console errors for ResizeObserver
    const originalError = console.error
    console.error = (...args) => {
      if (args[0] && typeof args[0] === "string" && resizeObserverErr.test(args[0])) {
        return
      }
      originalError.apply(console, args)
    }

    return () => {
      window.removeEventListener("error", handleError, true)
      console.error = originalError
    }
  }, [])

  return null
}
