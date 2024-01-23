import { getDetailUrl, imageUrl } from "@/apis/urls";
import Image from "next/image";
import styles from "./Movie.module.css";

type MoviePageProps = {
    params: {
        id: string;
    };
};

const fetchMovieDetails = async (id: string) => {
    try {
        const res = await fetch(getDetailUrl(id));
        return res.json();
    } catch (error) {
        console.error("Error in fetchMovieDetail:", error);
        throw error;
    }
};

async function MoviePage(props: MoviePageProps) {
    const { params } = props;
    const details = await fetchMovieDetails(params.id);

    if (!details) {
        return <div>Error</div>;
    }

    return (
        <>
            <div>
                <div className={styles.posterWrapper}>
                    <Image
                        className={styles.poster}
                        alt="영화 포스터"
                        src={`${imageUrl}${details.poster_path}`}
                        fill={true}
                    />
                </div>
                <h1>{details.title}</h1>
                <p>
                    {details.release_date} | {details.runtime} min
                </p>
                <p>{details.overview}</p>
            </div>
        </>
    );
}

export default MoviePage;
