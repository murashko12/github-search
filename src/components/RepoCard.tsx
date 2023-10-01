import React from "react";
import { IRepo } from "../modules/modules";
import { useAction } from "../hooks/actions";

export function RepoCard({repo}: {repo: IRepo}) {

    const {addFavorite} = useAction()

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavorite(repo.html_url)
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
                <button onClick={addToFavourite} className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md hover:bg-gray-100 transition-all">Add</button>
            </a>
        </div>
    )
}
