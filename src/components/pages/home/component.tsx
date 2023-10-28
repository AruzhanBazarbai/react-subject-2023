import React, { useEffect, useState } from "react";
import { addPost, getAllPosts } from "../../api";
import { PostBlock } from "../../molecules";

export const Home: React.FC = () => {
    const [posts, setPosts] = useState(getAllPosts())
    const handleSubmitTweet = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = addPost((e.target as HTMLElement).innerText); 
        // console.log(res)9-
        setPosts([...res])
    }
    useEffect(() => {
        console.log(posts)
    }, [posts])

    return (
        <div>
            
            <div>
                <form className="mb-6 flex border rounded-md py-2 px-3 w-[500px] gap-x-8" action="" onSubmit={(e) => handleSubmitTweet(e)}>
                    <div className="icon"></div>
                    <input type="text" placeholder="What's happening?" />
                    <button type="submit">Tweet</button>
                </form>
            </div>
            <div className="flex flex-col gap-y-6">
                {posts.map((el, ind) => (
                    <PostBlock id={el.id} key={ind} />
                ))}
            </div>
        </div>
    )
}