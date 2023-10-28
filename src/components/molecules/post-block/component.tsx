import React, { useState } from "react";
import classNames from "classnames";
import { Props } from "./props";
import { getPost } from "../../api";

export const PostBlock: React.FC<Props> = ({ id }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [postData, setPostData] = useState(getPost(id))
    return (
        <div className="flex gap-x-4">
            <div className={classNames(["icon"])}></div>
            <div className="flex flex-col gap-y-4">
                <div className=""><span className="text-[15px] bold pr-2">{postData.userName}</span><span className="text-[15px] text-gray-600 pr-2">{postData.createdAt}</span></div>
                <div>
                    <div>{ postData.title}</div>
                    <div>{postData.text}</div>
                </div>
                {postData.hasImage ? <div className="post-image"></div> : ""}
                <div className="flex text-[15px] text-gray-600 gap-x-5">
                    <div>Comments: { postData.comments.length}</div>
                    <div>Likes: { postData.likes}</div>
                </div>
            </div>
        </div>
    )
}