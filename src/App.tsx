import { useEffect, useRef, useState } from 'react'
import { copy } from './copy'

export default function App() {
  const [showSticky, setShowSticky] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0 }
    )
    if (sentinelRef.current) observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [])

  const openBroker = () => {
    window.open('https://' + copy.brokerLink, '_blank')
  }

  const openTelegram = () => {
    window.open('https://' + copy.telegramLink, '_blank')
  }

  return (
    <div className="page">
      <div className="container">
        <header className="logo">OPERAX</header>

        <h1 className="headline">{copy.headline}</h1>
        <p className="subheadline">{copy.subheadline}</p>

        <button className="cta primary" onClick={openBroker}>
          👉 ABRIR A CORRETORA
        </button>

        <div className="creative-frame">
          <img
            src="/creative-480.webp"
            srcSet="/creative-480.webp 480w, /creative-960.webp 960w"
            sizes="(max-width: 480px) 480px, 960px"
            width={480}
            height={480}
            alt="MEGA OPERAÇÃO NVIDIA"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="card">
          <p>{copy.body1}</p>
          <p className="highlight">{copy.body2}</p>
        </div>

        <div className="card">
          <h2>{copy.conditionTitle}</h2>
          <h3>{copy.rulesTitle}</h3>
          <p>{copy.rulesText}</p>
          <ul className="deposits">
            {copy.deposits.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <p className="warning">{copy.limited}</p>
        </div>

        <div className="card broker-card">
          <p>{copy.openBroker}</p>
          <button className="cta" onClick={openBroker}>
            ABRIR A CORRETORA
          </button>
        </div>

        <div className="card">
          <p>{copy.depositInstruction}</p>
          <button className="cta primary" onClick={openTelegram}>
            📲 ENVIAR COMPROVANTE
          </button>
        </div>

        <div ref={sentinelRef} />

        {showSticky && (
          <div className="sticky">
            <button className="cta primary sticky-btn" onClick={openTelegram}>
              📲 ENVIAR COMPROVANTE
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
