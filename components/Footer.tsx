export default function Footer() {
    return (
      <footer className="bg-gray-800 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Dmitrijus Drozdovas</p>
          <div className="flex gap-6">
            <a 
              href="mailto:dmitrijus.drozdovas@gmail.com" 
              className="hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              Email
            </a>
            <a 
              href="https://x.com/DrozdovasD" 
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              X.com
            </a>
            <a 
              href="https://github.com/drozdovas" 
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    )
  }