import Link from "next/link"
import MaxWidthWapper from "../utilities/MaxWidthWapper"



const Navbar = () => {
    return(
        <div className="bg-transparent sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-transparent">
                <MaxWidthWapper>
                <div className="border-b border-gray-200">
                <div className="flex h-16 items-center">
                <div className="ml-4 flex lg:ml-0">
                <Link href='/' className="text-primary text-4xl">RK</Link>
                </div>
                </div>
                </div>
                </MaxWidthWapper>
            </header>
        </div>
    )
}

export default Navbar