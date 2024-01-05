import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
    const router = useRouter();

    return (
        <>
            <nav>
                <Link href="/">
                    <button className="home-btn">홈</button>
                </Link>
                <Link href="/about">
                    <button className="about-btn">소개</button>
                </Link>
            </nav>
            <style jsx>
                {`
                    button.home-btn {
                        font-weight: ${router.pathname === "/"
                            ? "bold"
                            : "normal"};
                        margin-right: 10px;
                    }

                    button.about-btn {
                        font-weight: ${router.pathname === "/intro"
                            ? "bold"
                            : "normal"};
                    }
                `}
            </style>
        </>
    );
}

export default NavBar;
