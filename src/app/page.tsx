"use client";

import { getPopularUrl, imageUrl } from "@/apis/urls";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const fetchPopularMovies = async () => {
    const res = await fetch(getPopularUrl()).then((res) => res.json());
    return res.results;
};

function HomePage() {
    const [popular, setPopular] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetchPopularMovies().then((data) => {
            setPopular(data);
        });
    }, []);

    const handleClick = (id: string) => {
        router.push(`/movie/${id}`);
    };

    return (
        <>
            <ul className={styles.movieList}>
                {popular.map((aItem: any, i: number) => (
                    <li
                        className={styles.movieItem}
                        key={`movie-item-card-${i}`}
                    >
                        <div className={styles.posterWrapper}>
                            <Image
                                className={styles.moviePoster}
                                alt="영화 포스터"
                                src={`${imageUrl}${aItem.poster_path}`}
                                fill={true}
                                onClick={() => {
                                    handleClick(aItem.id);
                                }}
                            />
                        </div>
                        <p
                            onClick={() => {
                                handleClick(aItem.id);
                            }}
                        >
                            {aItem.title}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default HomePage;
