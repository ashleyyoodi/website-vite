/* Blog */

export const BLOG_POSTS_URL = import.meta.env.VITE_API_URL + "/blog-posts";

export const NEW_BLOG_POST_URL = BLOG_POSTS_URL + "/new";

export const EDIT_BLOG_POST_URL = BLOG_POSTS_URL + "/edit?id=";

export const DELETE_BLOG_POST_URL = BLOG_POSTS_URL + "/delete?id=";


/* Music */

export const YOUTUBE_LINKS_URL = import.meta.env.VITE_API_URL + "/youtube-links";

export const NEW_YOUTUBE_LINK_URL = YOUTUBE_LINKS_URL + "/new";

export const SOUNDCLOUD_LINKS_URL = import.meta.env.VITE_API_URL + "/soundcloud-links";

export const NEW_SOUNDCLOUD_LINK_URL = SOUNDCLOUD_LINKS_URL + "/new";


/* Admin */

export const ADMIN_AUTHORIZE_URL = import.meta.env.VITE_API_URL + "/admin/authorize?input="
