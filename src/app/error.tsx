"use client";

import { useEffect } from "react";

type HomeErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

function HomeError(props: HomeErrorProps) {
    const { error, reset } = props;

    useEffect(() => {
        console.error(error);
    }, []);

    return (
        <div>
            <h2>에러가 발생</h2>
            <button onClick={() => reset()}>다시 로드</button>
        </div>
    );
}

export default HomeError;
