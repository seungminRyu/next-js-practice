import NavBar from "@/components/NavBar";
import { ReactNode } from "react";
import "../styles/globals.css";

type RootLayoutProps = {
    children: ReactNode;
};

function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <html lang="ko">
            <body>
                <NavBar />
                <main>{children}</main>
            </body>
        </html>
    );
}

export default RootLayout;
