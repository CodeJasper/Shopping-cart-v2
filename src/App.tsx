import { RouterProvider } from 'react-router'
import { router } from '@app'

function App() {
  return (
    <div className="container mx-auto p-4 lg:max-w-5xl">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
