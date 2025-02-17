"use client";
import Navbars from "@/components/navbars/navbars";
import { useEffect, useState } from "react";

export default function Film() {
    const API = process.env.NEXT_PUBLIC_OMDB_API_KEY;
    const [movie, setMovie] = useState([]);

    const response = () => {
        fetch(API)
            .then((res) => res.json())
            .then(json => setMovie(json.results));
    };

    console.log(movie);

    useEffect(() => {
        response();
    }, []);

    return (
        <div>
            <Navbars/>
            <h1 className="text-3xl text-black">Film</h1>
            <div>
                {movie.map((movie) => (
                    <div key={movie.id}>
                        <img src={movie.poster_path} alt={movie.title} width={200} />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}