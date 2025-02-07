import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-3xl font-bold mb-6 text-secondary">WhosHim NBA</h3>
          <p className="text-xl text-gray-300">
            Modelling Player Performances Using Advanced Statistics & betting odds
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-6 text-secondary">Quick Links</h4>
          <ul className="space-y-4 text-xl">
            <li>
              <a href="/" className="hover:text-secondary transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/masbos" className="hover:text-secondary transition duration-300">
                MASBOS
              </a>
            </li>
            <li>
              <a href="/rankings" className="hover:text-secondary transition duration-300">
                Rankings
              </a>
            </li>
            <li>
              <a href="/top-10s" className="hover:text-secondary transition duration-300">
                Top 10s
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-6 text-secondary">Resources</h4>
          <ul className="space-y-4 text-xl">
            <li>
              <a href="/glossary" className="hover:text-secondary transition duration-300">
                Glossary
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-secondary transition duration-300">
                About Me
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-6 text-secondary">Connect With Me</h4>
          <div>
            <a 
              href="https://www.linkedin.com/in/shantbolat" 
              className="text-4xl hover:text-secondary transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center text-xl text-gray-300">
        <p>&copy; 2025 WhosHim NBA. All rights reserved.</p>
      </div>
    </footer>
  )
}

