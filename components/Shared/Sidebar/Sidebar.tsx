import { Logo } from "../Logo"
import { SidebarRoutes } from "../SidebarRoutes"

export const  Sidebar =() => {
  return (
    <>
    
    <div className="py-6" >
      <Logo/>
    </div>
    <SidebarRoutes />
    </>
  )
}