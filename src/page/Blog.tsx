import { Loader, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchBlogPosts } from "../service/BlogService";

export default function Blog() {
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);


    useEffect(() => {
        setIsLoading(true);
        fetchBlogPosts()
            .then(data => {
                setMessages(data);
                setIsLoading(false);
            });
    }, []);

    function formatDate(date: Date) {
        let formattedDate = new Date(date).toLocaleString("en-US", {
                timeZone: "America/Los_Angeles",
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long", 
                year: "numeric"
            }
        );
        return formattedDate;
    }

    return (
        <div>
            <h2 className="page-header">Blog</h2>
            <div>
                { 
                    messages.map((message, index) => (
                        <div className = "blog-post">
                            <br />
                            <Text>
                                <span className="blog-date">{formatDate(message.created_date)}</span>
                                <br /><br />
                                {message.text}
                            </Text>
                            <br />
                            {
                                index !== messages.length-1 ? <hr className="post-divider" /> : null
                            }
                        </div>
                    ))
                }
                { isLoading ?
                    <div className="loader-container">
                        <Loader color="blue" />
                    </div>
                : null }
            </div>
        </div>
    );
}