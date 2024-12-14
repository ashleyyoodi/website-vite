import { NEW_YOUTUBE_LINK_URL, YOUTUBE_LINKS_URL } from "../constant/ApiConstants";

export const fetchYoutubeLinks = async () => {
    const res = await fetch(YOUTUBE_LINKS_URL);
    return res.json();
};

export const createYoutubeLink = async(link: string | undefined, comment: string | undefined) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({link: link, comment: comment})
    };
    const res = await fetch(NEW_YOUTUBE_LINK_URL, requestOptions);
    return res.json();
};