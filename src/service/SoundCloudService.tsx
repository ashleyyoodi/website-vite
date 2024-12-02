import { SOUNDCLOUD_LINKS_URL } from "../constant/ApiConstants";

export const fetchSoundCloudLinks = async () => {
    const res = await fetch(SOUNDCLOUD_LINKS_URL);
    return res.json();
};