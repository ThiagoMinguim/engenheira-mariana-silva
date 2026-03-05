import Header from './components/Header'
import HeroProfessional from './components/HeroProfessional'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import FooterProfessional from './components/FooterProfessional'

export default function App() {
  return (
    <div className="relative">
      <Header />
      <HeroProfessional />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <FooterProfessional />
    </div>
  )
}
