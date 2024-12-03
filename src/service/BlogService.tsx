import { BLOG_POSTS_URL, NEW_BLOG_POST_URL } from "../constant/ApiConstants";

export const fetchBlogPosts = async () => {
    const res = await fetch(BLOG_POSTS_URL);
    return res.json();
};

export const createBlogPost = async (text: string | undefined) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({text: text})
    };
    const res = await fetch(NEW_BLOG_POST_URL, requestOptions);
    return res.json();
}