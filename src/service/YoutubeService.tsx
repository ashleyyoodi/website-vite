import { YOUTUBE_LINKS_URL } from "../constant/ApiConstants";

export const fetchYoutubeLinks = async () => {
    const res = await fetch(YOUTUBE_LINKS_URL);
    return res.json();
};