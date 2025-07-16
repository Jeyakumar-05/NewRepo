import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  )
}

export default NotFoundPage