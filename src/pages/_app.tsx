// import Layout from "@/components/Layout";
import { AppProps } from "next/app";

export type _appProps = AppProps;

function _app(props: _appProps) {
    const { Component, pageProps } = props;

    return (
        <Component {...pageProps} />
        // <Layout>
        // </Layout>
    );
}

export default _app;
