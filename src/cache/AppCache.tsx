import { fetchBlogPosts } from "../service/BlogService";
import { useQuery } from "react-query";

export const AppCache = () => {
    const blogPosts = useQuery("blogPosts", fetchBlogPosts);
};