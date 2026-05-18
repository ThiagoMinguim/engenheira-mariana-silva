import Header from './components/Header'
import HeroProfessional from './components/HeroProfessional'
import AboutSection from './components/AboutSection'
import WhyInvestSection from './components/WhyInvestSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import FooterProfessional from './components/FooterProfessional'
import { useTheme } from './lib/useTheme'

export default function App() {
  const [dark, toggleTheme] = useTheme()

  return (
    <div className="relative">
      <Header dark={dark} toggleTheme={toggleTheme} />
      <HeroProfessional />
      <AboutSection />
      <WhyInvestSection />
      <ServicesSection />
      <ContactSection />
      <FooterProfessional />
    </div>
  )
}
