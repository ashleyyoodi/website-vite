import { Loader, Text } from "@mantine/core";
import { useEffect, useState } from "react";

export default function() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetch('https://website-backend-beta-bay.vercel.app/blog-posts')
        .then(response => response.json())
        .then(data => {
            setMessage(data[0].text);
            setIsLoading(false);
        });
    }, []);
    
    return (
        <div>
            <Text>
                {message}
            </Text>
            { isLoading ?
                <div className="loader-container">
                    <Loader color="blue" />
                </div>
            : null }
        </div>
    );
}