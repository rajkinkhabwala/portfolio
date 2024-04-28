import Link from "next/link"
import { Button } from "../ui/button"
import { MenuIcon } from "lucide-react"

const NavItems = () => {
    return (
        <>
        <nav className="hidden space-x-6 md:flex">
            <Link className="text-gray-600 transition-colors hover:text-gray-900" href="/">
                Home
            </Link>
            <Link className="text-gray-600 transition-colors hover:text-gray-900" href="/about-me">
                About Me
            </Link>
            <Link className="text-gray-600 transition-colors hover:text-gray-900" href="/blog">
                Blog
            </Link>
            <Link className="text-gray-600 transition-colors hover:text-gray-900" href="/contact-me" >
                Contact Me
            </Link>
        </nav><Button className="md:hidden" size="sm" variant="outline">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
            </Button>
            </>
    )
}

export default NavItems