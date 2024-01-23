"use client";

import { useEffect } from "react";

type MovieErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

function MovieError(props: MovieErrorProps) {
    const { error, reset } = props;

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>해당 영화 정보를 가져올 수 없습니다.</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
export default MovieError;
