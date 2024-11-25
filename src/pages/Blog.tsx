import { Loader, Text } from "@mantine/core";
import { useEffect, useState } from "react";

export default function() {
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://website-backend-beta-bay.vercel.app/blog-posts')
        .then(response => response.json())
        .then(data => {
            setMessages(data);
            setIsLoading(false);
        });
    }, []);

    function formatDate(date: Date) {
        let formattedDate = new Date(date).toLocaleString();
        return formattedDate;
    }
    
    return (
        <div>
            <h2 className="page-header">Blog</h2>
            <br />  
            { 
                messages.map((message) => (
                    <div className = "blog-post">
                        <Text>
                            <span className="blog-date">{formatDate(message.created_date)}</span>
                            <br />
                            {message.text}
                        </Text>
                        <br />
                    </div>
                ))
            }
            { isLoading ?
                <div className="loader-container">
                    <Loader color="blue" />
                </div>
            : null }
        </div>
    );
}