"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

function NavBar() {
    const pathname = usePathname();

    return (
        <>
            <nav>
                <Link href="/">
                    <button
                        style={{
                            fontWeight: pathname === "/" ? "bold" : "normal",
                            marginRight: "10px",
                        }}
                    >
                        홈
                    </button>
                </Link>
                <Link href="/about">
                    <button
                        style={{
                            fontWeight:
                                pathname === "/about" ? "bold" : "normal",
                        }}
                    >
                        소개
                    </button>
                </Link>
            </nav>
        </>
    );
}

export default NavBar;
