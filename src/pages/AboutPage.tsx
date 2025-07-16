const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About This App</h1>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">React 18:</span> UI library with hooks and functional components</li>
          <li><span className="font-medium">TypeScript:</span> Static type checking</li>
          <li><span className="font-medium">Vite:</span> Fast build tool and dev server</li>
          <li><span className="font-medium">Redux Toolkit:</span> State management</li>
          <li><span className="font-medium">React Router:</span> Routing and navigation</li>
          <li><span className="font-medium">Tailwind CSS:</span> Utility-first CSS framework</li>
          <li><span className="font-medium">React Hook Form:</span> Form handling with validation via Zod</li>
          <li><span className="font-medium">Axios:</span> HTTP client</li>
        </ul>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-3">Project Structure</h2>
        <p className="mb-3">This project follows a modular architecture with the following organization:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">components/:</span> Reusable UI components</li>
          <li><span className="font-medium">hooks/:</span> Custom React hooks</li>
          <li><span className="font-medium">lib/:</span> Utility functions and shared code</li>
          <li><span className="font-medium">pages/:</span> Page components corresponding to routes</li>
          <li><span className="font-medium">services/:</span> API service layers and external integrations</li>
          <li><span className="font-medium">store/:</span> Redux store configuration and slices</li>
          <li><span className="font-medium">types/:</span> TypeScript type definitions</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage