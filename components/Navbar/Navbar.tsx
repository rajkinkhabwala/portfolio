import Link from "next/link"
import MaxWidthWapper from "@/components/utilities/MaxWidthWapper"
import { Braces, MenuIcon } from 'lucide-react'
import { Button } from "../ui/button"
import NavItems from "./NavItems"



const Navbar = () => {
    return (
        <div className="bg-transparent fixed z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-transparent">
                <MaxWidthWapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center justify-between">
                            <div className="ml-4 flex-row lg:ml-0">
                                <Link href='/' className="flex items-center gap-2">
                                    <Braces className="h-6 w-6" />
                                    <span className="text-lg font-semibold">RK</span>
                                </Link>
                            </div>
                            <NavItems />
                    </div>
                </div>
            </MaxWidthWapper>
        </header>
        </div >
    )
}

export default Navbar