import { getDetailUrl, imageUrl } from "@/apis/urls";
import Seo from "@/components/Seo";
import { GetServerSidePropsContext } from "next";

type MovieDetailsProps = {
    details: any;
    url: string;
};

function MovieDetails(props: MovieDetailsProps) {
    const { details, url } = props;

    if (!details) {
        return <div>Error</div>;
    }

    return (
        <>
            <div>
                <Seo title={details.title} />
                <img
                    alt="영화 포스터"
                    src={`${imageUrl}${details.poster_path}`}
                />
                <h1>{details.title}</h1>
                <p>
                    {details.release_date} | {details.runtime} min
                </p>
                <p>{details.overview}</p>
            </div>
        </>
    );
}

const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { params } = context;
    const id = params?.id as string;

    try {
        const res = await fetch(getDetailUrl(id));
        const data = await res.json();

        return {
            props: {
                details: data,
                url: getDetailUrl(id),
            },
        };
    } catch (error) {
        console.error("Error in getServerSideProps:", error);

        return {
            props: {
                error: true,
            },
        };
    }
};

export { getServerSideProps };
export default MovieDetails;
