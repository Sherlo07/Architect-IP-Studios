import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar'



export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <Navbar/>
        <Outlet />
       
        
      
        
      </div>
     
    </React.Fragment>
  )
}
