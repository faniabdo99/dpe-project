// Compnents
import HeroSection from './Components/HeroSection'
import TextSection from './Components/TextSection'
export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <HeroSection />
      <TextSection title="About Me" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ut delectus laudantium doloremque in officia" />
      <TextSection title="Features" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ut delectus laudantium doloremque in officia" />
      <TextSection title="Resume" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ut delectus laudantium doloremque in officia" />
    </main>
  )
}