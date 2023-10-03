import React, { useState } from "react";
import { IRepo } from "../modules/modules";
import { useAction } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

export function RepoCard({repo}: {repo: IRepo}) {

    const {addFavorite, removeFavourite} = useAction()
    const {favourites} = useAppSelector(state => state.github)

    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavorite(repo.html_url)
        setIsFav(true)
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavourite(repo.html_url)
        setIsFav(false)
    }

    return (
        <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <a href={repo.html_url} target="_blank" >
                <h2 className="text-lg font-bold">{repo.full_name}</h2>
                <p className="text-sm">
                    Forks: <span className="font-bold mr-2">{repo.forks}</span>
                    Watchers: <span className="font-bold mr-2">{repo.watchers}</span>
                </p>
                <p className="text-sm font-thin">{repo?.description}</p>
                { !isFav && <button onClick={addToFavourite} className="py-2 px-4 bg-yellow-400 mr-4 rounded hover:shadow-md hover:bg-gray-100 transition-all">Add</button>}
                { isFav && <button onClick={removeFromFavourite} className="py-2 px-4 bg-red-500 rounded hover:shadow-md hover:bg-gray-100 transition-all">Remove</button>}           
            </a>
        </div>
    )
}
