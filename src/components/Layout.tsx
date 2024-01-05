import { ReactElement } from "react";
import NavBar from "./NavBar";

export type LayoutProps = {
    children: React.ReactNode;
    aside: ReactElement;
    bside: ReactElement;
};

function Layout(props: LayoutProps) {
    const { children, aside, bside } = props;

    return (
        <>
            <div>
                <NavBar />
                <main>{children}</main>
            </div>
            <div>
                {aside}
                {bside}
            </div>
            <style jsx>
                {`
                    div {
                        max-width: 1000px;
                        margin: 0 auto;
                    }

                    main {
                        margin-top: 40px;
                    }
                `}
            </style>
        </>
    );
}

export default Layout;
