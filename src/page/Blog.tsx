import { ActionIcon, Button, Checkbox, Loader, Modal, Text, Textarea, TextInput, UnstyledButton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { createBlogPost, deleteBlogPost, editBlogPost, fetchBlogPosts } from "../service/BlogService";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export default function Blog() {
    const [isLoading, setIsLoading] = useState(false);
    const [blogPosts, setBlogPosts] = useState<any[]>([]);
    const isLoggedIn = sessionStorage.getItem("isAuthorized");
    const [opened, {open, close}] = useDisclosure(false);
    const [editedPost, setEditedPost] = useState<any>(null);
    const [postText, setPostText] = useState('');
    const [postIsDraft, setPostIsDraft] = useState(true);

    const postTextAreaRef = useRef<HTMLTextAreaElement>(null);
    const draftCheckboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setIsLoading(true);
        fetchPosts();
    }, []);

    function fetchPosts() {
        fetchBlogPosts()
            .then(data => {
                setBlogPosts(data);
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

    function submitPost(id: number | undefined) {
        let text = postTextAreaRef.current?.value;
        let isDraft = draftCheckboxRef.current?.checked;
        let isSubmitting = false;
        if (id) {
            isSubmitting = isDraft ? false : (editedPost.draft ? true : false);
            editBlogPost(id, text, isDraft, isSubmitting, editedPost.submitted_date)
            .then(fetchPosts)
            .then(closePostModal);
        } else {
            isSubmitting = isDraft ? false : true;
            createBlogPost(text, isDraft, isSubmitting)
                .then(fetchPosts)
                .then(closePostModal);
        }
    }

    function deletePost(id: number) {
        deleteBlogPost(id)
            .then(fetchPosts);
    }

    function closePostModal() {
        close();
        setPostText('');
        setEditedPost(null);
    }

    function openEditPostModal(id: number) {
        let post = blogPosts.find((blogPost) =>
            blogPost.blog_post_id == id
        );
        setPostText(post.text);
        setPostIsDraft(post.draft);
        setEditedPost(post);
        open();
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
            <Modal id="new-post-modal" opened={opened} onClose={closePostModal} title={editedPost ? "Edit Blog Post" : "New Blog Post"} size="50%" centered>
                <Textarea
                    ref={postTextAreaRef}
                    placeholder="text"
                    autosize
                    minRows={10}
                    size="lg"
                    value={postText}
                    onChange={(event) => setPostText(event.currentTarget.value)}
                />
                <Checkbox
                    label="Draft"
                    ref={draftCheckboxRef}
                    checked={postIsDraft}
                    onChange={(event) => setPostIsDraft(event.currentTarget.checked)}
                >
                </Checkbox>
                <UnstyledButton 
                    id="post-submit-button"
                    onClick={() => {submitPost(editedPost ? editedPost.blog_post_id : null)}}
                >
                    Submit
                </UnstyledButton>
            </Modal>
            <div>
                { 
                    blogPosts.map((blogPost, index) => (
                        isLoggedIn ?
                            <div className = "blog-post" key={blogPost.blog_post_id}>
                                <br />
                                <div className="blog-post-header">
                                    <span className="blog-date"><span id="draft-label">{blogPost.draft ? 'DRAFT' : null}</span> {blogPost.submitted_date ? formatDate(blogPost.submitted_date) : null}</span>
                                            <div className="blog-post-button-container">
                                            <ActionIcon 
                                                className="blog-post-button" 
                                                variant="default" 
                                                size={20}
                                                onClick={() => {openEditPostModal(blogPost.blog_post_id)}}
                                            >
                                                <IconEdit></IconEdit>
                                            </ActionIcon>
                                            <ActionIcon 
                                                className="blog-post-button" 
                                                variant="default" 
                                                size={20}
                                                onClick={() => {deletePost(blogPost.blog_post_id);}}
                                            >
                                                <IconTrash></IconTrash>
                                            </ActionIcon>
                                        </div>
                                </div>
                                <Text>
                                    <br />
                                    {blogPost.text}
                                </Text>
                                <br />
                                {
                                    index !== blogPosts.length-1 ? <hr className="post-divider" /> : null
                                }
                            </div>
                        : !blogPost.draft ?
                            <div className = "blog-post" key={blogPost.blog_post_id}>
                            <br />
                            <div className="blog-post-header">
                                <span className="blog-date">{formatDate(blogPost.submitted_date)}</span>
                                        <div className="blog-post-button-container">
                                        <ActionIcon 
                                            className="blog-post-button" 
                                            variant="default" 
                                            size={20}
                                            onClick={() => {openEditPostModal(blogPost.blog_post_id)}}
                                        >
                                            <IconEdit></IconEdit>
                                        </ActionIcon>
                                        <ActionIcon 
                                            className="blog-post-button" 
                                            variant="default" 
                                            size={20}
                                            onClick={() => {deletePost(blogPost.blog_post_id);}}
                                        >
                                            <IconTrash></IconTrash>
                                        </ActionIcon>
                                    </div>
                            </div>
                            <Text>
                                <br />
                                {blogPost.text}
                            </Text>
                            <br />
                            {
                                index !== blogPosts.length-1 ? <hr className="post-divider" /> : null
                            }
                        </div>
                        : null
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