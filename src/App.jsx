import { lazy, Suspense, useEffect, useState } from 'react'
import Header from './components/Header'
import HeroProfessional from './components/HeroProfessional'
import { useTheme } from './lib/useTheme'

const AboutSection = lazy(() => import('./components/AboutSection'))
const WhyInvestSection = lazy(() => import('./components/WhyInvestSection'))
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const FooterProfessional = lazy(() => import('./components/FooterProfessional'))
const FloatingWhatsAppButton = lazy(() => import('./components/FloatingWhatsAppButton'))
const ProspectarPage = lazy(() => import('./components/prospectar/ProspectarPage'))

function usePathname() {
  const [path, setPath] = useState(() => window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    window.addEventListener('app:navigate', onPop)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('app:navigate', onPop)
    }
  }, [])
  return path
}

export default function App() {
  const [dark, toggleTheme] = useTheme()
  const path = usePathname()

  if (path.startsWith('/prospectar')) {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-grafite/60 dark:text-white/60">Carregando…</div>}>
        <ProspectarPage dark={dark} toggleTheme={toggleTheme} />
      </Suspense>
    )
  }

  return (
    <div className="relative">
      <Header dark={dark} toggleTheme={toggleTheme} />
      <HeroProfessional />
      <Suspense fallback={null}>
        <AboutSection />
        <WhyInvestSection />
        <ServicesSection />
        <ContactSection />
        <FooterProfessional />
        <FloatingWhatsAppButton />
      </Suspense>
    </div>
  )
}
