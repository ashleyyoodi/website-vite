import { BLOG_POSTS_URL } from "../constant/ApiConstants";

export const fetchBlogPosts = async () => {
    const res = await fetch(BLOG_POSTS_URL);
    return res.json();
};