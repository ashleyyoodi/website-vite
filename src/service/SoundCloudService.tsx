import { NEW_SOUNDCLOUD_LINK_URL, SOUNDCLOUD_LINKS_URL } from "../constant/ApiConstants";

export const fetchSoundCloudLinks = async () => {
    const res = await fetch(SOUNDCLOUD_LINKS_URL);
    return res.json();
};

export const createSoundcloudLink = async(link: string | undefined, comment: string | undefined) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({link: link, comment: comment})
    };
    const res = await fetch(NEW_SOUNDCLOUD_LINK_URL, requestOptions);
    return res.json();
};