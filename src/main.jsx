import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import fotoGhibli from './assets/foto-ghibli.webp'

const phrases = [
  'Amor, hay días en los que el mundo pesa más de la cuenta, pero quiero que recuerdes algo: tú no estás sola. Mientras yo exista, siempre tendrás a alguien que te admire, te cuide, te piense y te ame con el corazón completo.',
  'Me enamora verte en tu mundo, con esa forma tan tuya de cuidar, escuchar y sanar. Pero más me enamora saber que detrás de esa doctora fuerte también hay una mujer hermosa que merece ser cuidada con la misma ternura que entrega.',
  'Si esta cápsula llegó a tus manos, es porque necesitabas una dosis de verdad: eres una mujer increíble, valiosa, inteligente, hermosa y profundamente especial. Nunca olvides todo lo que provocas en mí.',
  'A veces no sé cómo explicarte lo mucho que me haces sentir, pero si pudiera resumirlo en una frase sería esta: desde que estás en mi vida, todo tiene un poquito más de sentido.',
  'No quiero amarte solo en los días fáciles, cuando todo sale bien y sobra la energía. Quiero amarte también en tus días largos, en tus silencios, en tu cansancio y en esos momentos en los que solo necesitas que alguien esté.',
  'Me gusta pensar que, mientras tú cuidas corazones, cuerpos y vidas, yo tengo el privilegio de cuidar un pedacito del tuyo. Y créeme, lo haría con todo el amor del mundo.',
  'Eres ese tipo de persona que no se encuentra dos veces: bonita por fuera, fuerte por dentro, noble en lo que hace y mágica sin intentarlo. Tenerte cerca es una suerte que no quiero tomar a la ligera.',
  'Esta cápsula se recomienda después de un día pesado: puede provocar relajación inmediata, besos terapéuticos, miradas peligrosas y una fuerte sospecha de que el verdadero tratamiento empieza cuando llegas a mis brazos.',
  'Hay personas que llegan y cambian el ánimo. Tú llegaste y cambiaste mucho más que eso: cambiaste mi forma de sonreír, de esperar, de querer y de imaginar un futuro bonito.',
  'No necesito que seas perfecta, amor. Me gustas real, humana, feliz, seria, tierna, intensa, tranquila y con todas esas versiones tuyas que te hacen ser tú. A todas las quiero.',
  'Si pudiera recetarte algo, sería descanso para tus días largos, calma para tus pensamientos, besos para tus tristezas y un recordatorio diario de que eres profundamente amada.',
  'Tú tienes una forma muy especial de hacer que lo cotidiano se siente bonito. Una mirada tuya, una palabra, una sonrisa o simplemente saber que existes puede cambiarme el día.',
  'Me enamora tu inteligencia, pero también tu ternura. Me enamora tu fuerza, pero también tu sensibilidad. Me enamora lo que muestras y también lo que guardas en silencio.',
  'Esta cápsula no cura el cansancio, pero sí viene cargada con una certeza: pase lo que pase, hay alguien que te desea paz, que te piensa bonito y que quiere verte feliz.',
  'Me gusta la idea de que en medio de tantas responsabilidades, consultas y días intensos, encuentres este pequeño papel y recuerdes que también mereces amor, detalles y momentos suaves.',
  'No sé si existe una fórmula exacta para el amor, pero si tuviera que crear una, tendría tu nombre, tu risa, tu mirada y esa forma tan tuya de hacerme sentir en casa.',
  'Tú no eres solo alguien que quiero. Eres alguien que admiro, que respeto, que me inspira y que me hace querer ser más cuidadoso, más presente y más sincero con lo que siento.',
  'En caso de nostalgia, cansancio o día difícil, repetir mentalmente: “soy amada, soy valiosa, soy suficiente y hay alguien (cuchurrumi) que sonríe solo por tenerme en su vida”.',
  'Esta cápsula puede causar efectos secundarios intensos: ganas de besarme sin previo aviso, mirarme con intenciones poco médicas y comprobar si el paciente responde bien al tratamiento cuerpo a cuerpo.',
  'Me encanta saber que el mundo te conoce como doctora, pero yo tengo la suerte de conocer también a la mujer que ríe, que sueña, que siente y que merece amor del bueno.',
  'Quiero ser ese lugar al que puedas llegar sin tener que fingir fuerza. Donde puedas descansar, hablar, callar, reír, llorar o simplemente existir, sabiendo que igual te voy a querer.',
  'Esta cápsula contiene una dosis concentrada de amor, admiración y ganas de abrazarte. No tiene contraindicaciones, salvo que puede causar sonrisas inesperadas y ganas de verme.',
  'Me gusta imaginar que cada una de estas cápsulas guarda un pedacito de lo que siento por ti. Y aun así, ni juntándolas todas alcanzaría para explicar lo mucho que te quiero.',
  'Hay algo en ti que me da paz. No es solo tu sonrisa ni tu forma de hablar; es esa energía tuya que hace que todo se sienta menos difícil cuando estás cerca.',
  'Amor, no olvides esto: antes de ser doctora, antes de cumplir con todos, antes de resolver mil cosas, también eres una mujer que merece ser abrazada, consentida y amada sin medida.',
  'Me siento orgulloso de ti, no solo por lo que haces, sino por la manera en que sigues adelante. Tu fuerza me inspira y tu corazón me enamora.',
  'Esta cápsula puede alterar el juicio clínico: después de leerla podrías sentir ganas repentinas de sonreír, buscarme con intenciones poco inocentes y confirmar si mi amor también viene en presentación nocturna.',
  'Me gusta quererte así, con detalles pequeños pero con intención grande. Porque tú mereces un amor que no solo se diga, sino que también se note, se cuide y se construya.',
  'A veces quisiera guardarte en un lugar donde nada te lastime, pero como no puedo, al menos quiero ser una presencia bonita en tu vida, de esas que suman, abrazan y dan calma.',
  'Dosis especial: recuerda que te amo no solo por lo que eres conmigo, sino por todo lo que eres incluso cuando no me ves: una mujer fuerte, dulce, brillante y profundamente hermosa.'
]

const youtubeVideoId = 'sMHsnOtPg38'
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`
const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&playsinline=1&controls=1&rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`

function Header({ darkMode, onToggleTheme, musicActive, onActivateMusic }) {
  return (
    <header className="site-header" aria-label="Encabezado principal">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <span className="brand-mark">♡</span>
        <span>AMORCILINA</span>
      </a>

      <nav className="nav-actions" aria-label="Acciones rápidas">
        <button className="ghost-button" onClick={onActivateMusic} type="button">
          <span className="button-icon">{musicActive ? '♪' : '▶'}</span>
          {musicActive ? 'Dosis musical activa' : 'Activar dosis musical'}
        </button>
        <button className="ghost-button theme-toggle" onClick={onToggleTheme} type="button" aria-label="Cambiar modo oscuro">
          <span className="button-icon">{darkMode ? '☀' : '☾'}</span>
          {darkMode ? 'Modo día' : 'Modo noche'}
        </button>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="inicio">
      <div className="hero-copy reveal">
        <div className="route-banner" aria-label="Vía de administración">
          <span className="route-line"></span>
          <span className="route-heart">♡</span>
          <span className="route-text">Vía de administración: directa al corazón</span>
          <span className="route-line"></span>
        </div>

        <p className="eyebrow">Tratamiento digital de liberación afectiva</p>
        <h1><span>AMORCILINA</span> 500 mg</h1>
        <p className="hero-lead">
          Medicamento sentimental indicado para elevar el ánimo, fortalecer sonrisas y recordar que el amor también puede venir en cápsulas, detalles y canciones.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#capsula">Abrir cápsula digital</a>
          <a className="secondary-link" href="#prospecto">Ver prospecto</a>
        </div>
      </div>

      <div className="medicine-card reveal delay-1" aria-label="Etiqueta visual de Amorcilina">
        <div className="label-top">
          <div>
            <span className="small-label">Uso exclusivamente sentimental</span>
            <h2>Cápsulas de liberación afectiva</h2>
          </div>
          <span className="dose-pill">500 mg</span>
        </div>

        <div className="hero-capsule" aria-hidden="true">
          <span className="hero-half hero-green"></span>
          <span className="hero-half hero-clear">
            {Array.from({ length: 8 }).map((_, index) => <i key={index}></i>)}
          </span>
          <span className="hero-heart">♥</span>
        </div>

        <div className="mini-prescription">
          <div>
            <strong>Indicaciones</strong>
            <span>Jornadas largas, nostalgia y falta de besos.</span>
          </div>
          <div>
            <strong>Dosificación</strong>
            <span>1 dosis cuando necesite amor extra.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function MusicPanel({ musicActive }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    if (!musicActive) return

    const timeout = window.setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      )
    }, 850)

    return () => window.clearTimeout(timeout)
  }, [musicActive])

  return (
    <section className="music-panel section-shell reveal" id="musica" aria-live="polite">
      <div>
        <p className="eyebrow">Dosis musical</p>
        <h2>Una canción para activar el tratamiento</h2>
        <p>
          Toca el botón de reproducción y deja que la página haga su parte. El navegador necesita ese clic para permitir el audio.
        </p>
      </div>
      <div className={`music-frame ${musicActive ? 'active' : ''}`} id="musicFrame">
        {musicActive ? (
          <>
            <div className="music-iframe-shell">
              <iframe
                ref={iframeRef}
                id="youtubeDose"
                title="Dosis musical"
                src={youtubeEmbedUrl}
                allow="autoplay; encrypted-media; clipboard-write; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="music-fallback">
              <p>Si el navegador no inicia el audio automáticamente, toca play dentro del video o abre la canción directamente.</p>
              <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">Abrir canción en YouTube</a>
            </div>
          </>
        ) : (
          <div className="music-placeholder">
            <span>♪</span>
            <p>La dosis musical aparecerá aquí.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function Prospect() {
  const cards = [
    {
      icon: '💊',
      title: 'Indicaciones',
      text: 'Indicado para elevar el ánimo, fortalecer sonrisas y acompañar largas jornadas de consultas.'
    },
    {
      icon: '😍',
      title: 'Efectos secundarios',
      text: 'Puede causar sonrisas involuntarias, mariposas en el estómago y necesidad repentina de abrazos.'
    },
    {
      icon: '🚫',
      title: 'Contraindicaciones',
      text: 'No administrar en presencia de personas poco románticas, amargadas o alérgicas a los detalles bonitos.'
    },
    {
      icon: '💚',
      title: 'Tratamiento',
      text: 'No suspender. Repetir con besos, paciencia, compañía y amor sin fecha de vencimiento.'
    }
  ]

  return (
    <section className="section-shell prospect" id="prospecto">
      <div className="section-heading reveal">
        <p className="eyebrow">Prospecto digital</p>
        <h2>Información farmacéutica del corazón</h2>
        <p>Un prospecto serio en apariencia, pero clínicamente cargado de amor.</p>
      </div>

      <div className="prospect-grid">
        {cards.map((card, index) => (
          <article className={`prospect-card reveal ${index ? `delay-${index}` : ''}`} key={card.title}>
            <span className="card-icon" aria-hidden="true">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function MemorySection() {
  return (
    <section className="memory-section section-shell" id="recuerdo">
      <div className="photo-card reveal">
        <img src={fotoGhibli} alt="Ilustración estilo Ghibli de una pareja sonriendo en un paisaje de montaña y mar" loading="lazy" />
        <div className="photo-date">14 · julio · 2024</div>
        <div className="photo-shine" aria-hidden="true"></div>
      </div>
      <div className="memory-copy reveal delay-1">
        <p className="eyebrow">Registro clínico del corazón</p>
        <h2>El día que también quedó guardado en esta fórmula</h2>
        <p>
          Ese día no fue solo una fecha. Fue una de esas pruebas bonitas de que hay personas que llegan sin hacer ruido y terminan ocupando un lugar donde nadie más llega.
        </p>
        <p>
          Me encanta verte como doctora, fuerte, inteligente y entregada. Pero también me encanta recordarte que antes de cuidar a todos, tú mereces ser cuidada, consentida y amada con calma.
        </p>
        <div className="love-note">
          <span>Diagnóstico reservado:</span>
          <strong>alto riesgo de que me sigas gustando cada día más.</strong>
        </div>
      </div>
    </section>
  )
}

function CapsuleLab() {
  const [opening, setOpening] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)
  const [messageLeaving, setMessageLeaving] = useState(false)
  const [message, setMessage] = useState('Presiona el botón y deja que esta cápsula libere una frase sorpresa.')
  const [lastPhraseIndex, setLastPhraseIndex] = useState(-1)
  const animationTimer = useRef(null)
  const messageTimer = useRef(null)

  const openCapsule = () => {
    window.clearTimeout(animationTimer.current)
    window.clearTimeout(messageTimer.current)

    setDisabled(true)
    setMessageVisible(false)
    setMessageLeaving(true)
    setOpening(false)

    let next = Math.floor(Math.random() * phrases.length)
    if (phrases.length > 1) {
      while (next === lastPhraseIndex) {
        next = Math.floor(Math.random() * phrases.length)
      }
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setOpening(true))
    })

    messageTimer.current = window.setTimeout(() => {
      setLastPhraseIndex(next)
      setMessage(phrases[next])
      setMessageLeaving(false)
      setMessageVisible(true)
    }, 650)

    animationTimer.current = window.setTimeout(() => {
      setDisabled(false)
    }, 980)
  }

  useEffect(() => {
    return () => {
      window.clearTimeout(animationTimer.current)
      window.clearTimeout(messageTimer.current)
    }
  }, [])

  const kicker = lastPhraseIndex >= 0 ? `Dosis ${String(lastPhraseIndex + 1).padStart(2, '0')} de ${phrases.length}` : 'Dosis pendiente'

  return (
    <section className="capsule-lab section-shell" id="capsula" aria-labelledby="capsuleTitle">
      <div className="capsule-panel reveal">
        <p className="eyebrow">Cápsula digital</p>
        <h2 id="capsuleTitle">Abre una dosis sorpresa</h2>
        <p className="capsule-intro">Cada clic reinicia la cápsula, la abre y libera una frase distinta debajo del tratamiento.</p>

        <div className="capsule-controls">
          <button className="primary-button capsule-button" onClick={openCapsule} disabled={disabled} type="button">
            {disabled ? 'Liberando dosis...' : lastPhraseIndex >= 0 ? 'Abrir otra cápsula' : 'Abrir cápsula'}
          </button>
        </div>

        <div className="capsule-module">
          <div className={`capsule-stage ${opening ? 'opening' : ''}`} aria-hidden="true">
            <div className="burst burst-a">♥</div>
            <div className="burst burst-b">✦</div>
            <div className="burst burst-c">♥</div>
            <div className="burst burst-d">✧</div>

            <div className="digital-capsule">
              <div className="cap cap-left"><span>♥</span></div>
              <div className="cap cap-right">
                {Array.from({ length: 6 }).map((_, index) => <i key={index}></i>)}
              </div>
            </div>
            <div className="paper-slip">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <article className={`message-card ${messageVisible ? 'visible' : ''} ${messageLeaving ? 'leaving' : ''}`} aria-live="polite">
            <span className="message-kicker">{kicker}</span>
            <p>{message}</p>
          </article>
        </div>
      </div>

      <div className="final-diagnosis reveal delay-1">
        <span>Diagnóstico final</span>
        <h2>Paciente con amor bonito, pronóstico excelente y tratamiento indefinido.</h2>
        <p>
          Recomendación: no suspender besos, detalles, mensajes inesperados ni abrazos largos. Uso exclusivo para la dueña de mi corazón.
        </p>
      </div>
    </section>
  )
}

function useRevealOnScroll() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -60px 0px' }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('amorcilina-theme') === 'dark')
  const [musicActive, setMusicActive] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useRevealOnScroll()

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
    localStorage.setItem('amorcilina-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const updateScrollProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll <= 0 ? 0 : (window.scrollY / maxScroll) * 100
      setScrollProgress(progress)
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  const activateMusic = () => {
    setMusicActive(true)
    window.setTimeout(() => {
      document.getElementById('musica')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 40)
  }

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      <div className="ambient ambient-one" aria-hidden="true"></div>
      <div className="ambient ambient-two" aria-hidden="true"></div>
      <div className="ambient ambient-three" aria-hidden="true"></div>

      <Header
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((value) => !value)}
        musicActive={musicActive}
        onActivateMusic={activateMusic}
      />

      <main>
        <Hero />
        <MusicPanel musicActive={musicActive} />
        <Prospect />
        <MemorySection />
        <CapsuleLab />
      </main>

      <footer className="site-footer">
        <p>AMORCILINA 500 mg · Producto decorativo. No ingerir. Sí sonreír.</p>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
