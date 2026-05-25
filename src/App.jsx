import { lazy, Suspense } from 'react'
import Header from './components/Header'
import HeroProfessional from './components/HeroProfessional'
import { useTheme } from './lib/useTheme'

const AboutSection = lazy(() => import('./components/AboutSection'))
const WhyInvestSection = lazy(() => import('./components/WhyInvestSection'))
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const FooterProfessional = lazy(() => import('./components/FooterProfessional'))
const FloatingWhatsAppButton = lazy(() => import('./components/FloatingWhatsAppButton'))

export default function App() {
  const [dark, toggleTheme] = useTheme()

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
