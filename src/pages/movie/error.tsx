import { useEffect } from "react";

type MovieErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

function MovieError(props: MovieErrorProps) {
    const { error, reset } = props;

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>로딩 중 문제가 발생했습니다.</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}
export default MovieError;
