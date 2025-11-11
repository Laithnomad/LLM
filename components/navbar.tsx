import Link from "next/link";
import Image from"next/image";
import NavItems from "@/components/NavItems"; // or wherever it's located

const navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/">
            <div className="flex item-center gap 2.5 cursor-pointer">
                <img 
                src="/images/logo.svg" alt="logo" width={46} height={46} />
            </div>
        </Link>
        <div className="flex item-center gap-8">
            <NavItems />
            <p>Sign In</p>
        </div>
    </nav>
  )
}

export default navbar