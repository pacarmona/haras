"use client"

import { useState, useEffect } from "react"

const texto = "TRADIÇÃO • ELEGÂNCIA • EXCELÊNCIA"

export const HowItWorks = () => {
  const [exibido, setExibido] = useState("")

  useEffect(() => {
    let i = 0
    const intervalo = setInterval(() => {
      setExibido(texto.slice(0, i + 1))
      i++
      if (i === texto.length) clearInterval(intervalo)
    }, 80)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <section className="bg-gray-100 p-8 mx-auto">
      <h2 className="text-2xl font-bold tracking-widest text-center">
        {exibido}
      </h2>
    </section>
  )
}

export default HowItWorks