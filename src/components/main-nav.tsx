import Link from "next/link"

export default function MainNav() {
  return (
    <nav className="bg-sky-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-sky-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-sky-200">
              Blog
            </Link>
          </li>
          {/* Add other navigation items as needed */}
        </ul>
      </div>
    </nav>
  )
}

