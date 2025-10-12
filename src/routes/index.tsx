import { createFileRoute } from '@tanstack/react-router'
import Intro from '../components/Intro'
import Footer from '../components/Footer' // Import Footer component

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      
        <Intro />
        <Footer />
       
        
        
   
    </>
  )
}
