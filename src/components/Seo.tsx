import Head from "next/head";

type SeoProps = {
    title: string;
};

function Seo(props: SeoProps) {
    const { title } = props;

    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    );
}

export default Seo;
