import { Outlet } from 'react-router'
import { Navbar } from '@components'

function MainLayout() {  
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 pt-[100px] lg:max-w-5xl">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
