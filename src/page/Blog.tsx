import { ActionIcon, Button, Loader, Modal, Text, Textarea, TextInput, UnstyledButton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { createBlogPost, deleteBlogPost, fetchBlogPosts } from "../service/BlogService";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export default function Blog() {
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const isLoggedIn = sessionStorage.getItem("isAuthorized");
    const [opened, {open, close}] = useDisclosure(false);

    const newPostRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setIsLoading(true);
        fetchPosts();
    }, []);

    function fetchPosts() {
        fetchBlogPosts()
            .then(data => {
                setMessages(data);
                setIsLoading(false);
            });
    }

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

    function submitPost() {
        let text = newPostRef.current?.value;
        createBlogPost(text)
            .then(fetchPosts)
            .then(close);
    }

    function deletePost(id: number) {
        deleteBlogPost(id)
            .then(fetchPosts);
    }

    return (
        <div>
            <div id="blog-header">
                <h2 className="page-header">Blog</h2>
                {
                    isLoggedIn ? 
                        <UnstyledButton 
                            id="new-post-button" 
                            variant="filled" 
                            onClick={open}>
                            New
                        </UnstyledButton> 
                        : null
                }
            </div>
            <Modal id="new-post-modal" opened={opened} onClose={close} title="New Blog Post" size="50%" centered>
                <Textarea
                    ref={newPostRef}
                    placeholder="text"
                    autosize
                    minRows={10}
                    size="lg"
                />
                <UnstyledButton 
                    id="post-submit-button"
                    onClick={submitPost}
                >
                    Submit
                </UnstyledButton>
            </Modal>
            <div>
                { 
                    messages.map((message, index) => (
                        <div className = "blog-post" key={message.blog_post_id}>
                            <br />
                            <div className="blog-post-header">
                                <span className="blog-date">{formatDate(message.created_date)}</span>
                                { 
                                    isLoggedIn ?
                                        <div className="blog-post-button-container">
                                        <ActionIcon 
                                            className="blog-post-button" 
                                            variant="default" 
                                            size={20}
                                        >
                                            <IconEdit></IconEdit>
                                        </ActionIcon>
                                        <ActionIcon 
                                            className="blog-post-button" 
                                            variant="default" 
                                            size={20}
                                            onClick={() => {deletePost(message.blog_post_id);}}
                                        >
                                            <IconTrash></IconTrash>
                                        </ActionIcon>
                                    </div>
                                    : null
                                }
                            </div>
                            <Text>
                                <br />
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