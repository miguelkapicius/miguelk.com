"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const onMouseEnterInteractive = () => {
      ring.classList.add("cursor-ring--hover")
    }

    const onMouseLeaveInteractive = () => {
      ring.classList.remove("cursor-ring--hover")
    }

    const addListeners = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive)
        el.addEventListener("mouseleave", onMouseLeaveInteractive)
      })
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", onMouseMove)
    addListeners()
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground will-change-transform"
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/40 will-change-transform transition-[width,height,opacity] duration-200"
      />
    </>
  )
}
