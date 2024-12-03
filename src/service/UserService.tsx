import { ADMIN_AUTHORIZE_URL } from "../constant/ApiConstants";

export const checkAdminAuthorized = async (input: string | undefined) => {
    const res = await fetch(ADMIN_AUTHORIZE_URL+input)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    return res;
};