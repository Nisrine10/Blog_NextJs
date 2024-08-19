"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../pictures/R.png';  // Ensure the path is correct

const navLinks = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/posts",
        label: "Posts",
    },
    {
        href: "/creatpost",
        label: "Create post",
    },
];

export default function Header() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <header className="flex justify-between items-center py-4 px-7 border-b">
            <Link href="/">
                <Image 
                    src={logo} 
                    alt="logo" 
                    className="w-[50px] h-[50px]"
                    width={70} 
                    height={70} 
                />
            </Link>
            <nav>
                <ul className="flex gap-x-5 text-[14px]">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link 
                                className={`${pathname === link.href ? "text-zinc-900" : "text-zinc-400"}`} 
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
