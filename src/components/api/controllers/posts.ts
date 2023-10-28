import { Posts } from "../../assets";

const allPosts = Posts;

export const getAllPosts = () => allPosts;

export const getPost = (id: string) => allPosts.filter((el) => el.id === id)[0];

export const getComments = (videoId: string) => allPosts.find((el) => el.id === videoId)?.comments ;

export const addPost = (text: string) => {
    const newPost = {
        id: allPosts.length.toString(),
        userName: "David",
        createdAt: "10 seconds ago",
        hasImage: true,
        title: "New post",
        text,
        likes: 23,
        comments: [
        ]
    }

    allPosts.push(newPost);
    return allPosts
};

export const addComment = (postId: string, text: string) => {
    const currentPost = allPosts.find((el) => el.id === postId);
    const newComment = {
        id: (currentPost?.comments.length ?? 10).toString(),
        comment: text
    }
    currentPost?.comments.push(newComment)
};

export const searchPost = (param: string) =>
  allPosts.filter(
    (el) =>
      el.title.toLowerCase().includes(param.toLowerCase()) ||
      el.text?.toLowerCase().includes(param.toLowerCase())
  );
