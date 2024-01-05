import { getPopularUrl, imageUrl } from "@/apis/urls";
import Seo from "@/components/Seo";
import Link from "next/link";
import { useEffect } from "react";

type HomeProps = {
    popular: Array<any> | null;
    error: Error | null;
};

function Home(props: HomeProps) {
    const { popular, error } = props;

    useEffect(() => {
        fetch(getPopularUrl());
    }, []);

    if (error || !popular) {
        return <div>Error</div>;
    }

    return (
        <>
            <Seo title="Home" />
            <ul>
                {popular.map((aItem, i) => (
                    <li key={`movie-item-card-${i}`}>
                        <Link href={`/movie/${aItem.id}`}>
                            <img
                                alt="영화 포스터"
                                src={`${imageUrl}${aItem.poster_path}`}
                            />
                            <p>{aItem.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>
                {`
                    ul {
                        display: grid;
                        grid-template-columns: repeat(
                            auto-fill,
                            minmax(200px, 1fr)
                        );
                        column-gap: 20px;
                        row-gap: 20px;
                        padding: 0;
                        margin: 0;
                    }

                    li {
                        list-style: none;
                    }

                    img {
                        width: 100%;
                    }

                    @media (max-width: 768px) {
                        ul {
                            grid-template-columns: repeat(
                                auto-fill,
                                minmax(150px, 1fr)
                            );
                            column-gap: 10px;
                            row-gap: 10px;
                        }
                    }
                `}
            </style>
        </>
    );
}

const getServerSideProps = async () => {
    let error = null;
    const res = await fetch(getPopularUrl())
        .then((res) => res.json())
        .catch((e) => (error = e));

    return {
        props: {
            popular: res.results ?? null,
            error: error,
        },
    };
};

export { getServerSideProps };
export default Home;
