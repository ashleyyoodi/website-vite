import { Accordion, createSafeContext, Group, Modal, Radio, Text, Textarea, TextInput, UnstyledButton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { createYoutubeLink, fetchYoutubeLinks } from "../service/YoutubeService";
import { createSoundcloudLink, fetchSoundCloudLinks } from "../service/SoundCloudService";
import { useDisclosure } from "@mantine/hooks";

export default function Music() {

    const isLoggedIn = sessionStorage.getItem("isAuthorized");
    const [youtubeLinks, setYoutubbeLinks] = useState<any[]>([]);
    const [soundCloudLinks, setSoundCloudLinks] = useState<any[]>([]);
    const [opened, {open, close}] = useDisclosure(false);
    const [linkType, setLinkType] = useState('react');
    const [postLink, setPostLink] = useState('');
    const [postComment, setPostComment] = useState('');

    const postTextInputRef = useRef<HTMLInputElement>(null);
    const postTextAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        fetchYoutubeLinks()
            .then(data => {
                setYoutubbeLinks(data);
            })
    }, []);

    useEffect(() => {
        fetchSoundCloudLinks()
            .then(data => {
                setSoundCloudLinks(data);
            })
    }, []);

    const soundCloudEmbeds = soundCloudLinks.map((link, index) => (
        <div className="media-embed-container" key={index}>
            <iframe className="soundcloud-embed" width="40%" height="166" allow="autoplay" frameBorder="no" src={link.link}></iframe>
            <Text className="music-comment">{link.comment}</Text>
        </div>
    ));

    const youtubeEmbeds = youtubeLinks.map((link, index) => (
        <div className="media-embed-container" key={index}>
            <iframe width="40%" height="315" src={link.link} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <Text className="music-comment">{link.comment}</Text>
        </div>
    ));

    function submitPost(id: number | undefined) {
        let link = postTextInputRef.current?.value;
        let comment = postTextAreaRef.current?.value;
        if (id) {

        } else {
            if (linkType == "youtube") {
                createYoutubeLink(link, comment)
                    .then(fetchYoutubeLinks)
                    .then(close);
            } else if (linkType == "soundcloud") {
                createSoundcloudLink(link, comment)
                    .then(fetchSoundCloudLinks)
                    .then(close);
            }
        }
    }

    return (
        true ? "Coming Soon" : 
        <div>
            <div id="blog-header">
                <h2 className="page-header">Music</h2>
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
            <Modal id="new-post-modal" opened={opened} onClose={close} title="New Music Post" size="50%" centered>
                <Radio.Group
                    label="Select platform"
                    value={linkType}
                    onChange={(event) => setLinkType(event)}
                    withAsterisk
                >
                    <Group>
                        <Radio label="Youtube" value="youtube" />
                        <Radio label="SoundCloud" value="soundcloud" />
                    </Group>
                </Radio.Group>
                <TextInput
                    ref={postTextInputRef}
                    label="Link"
                    value={postLink}
                    onChange={(event) => setPostLink(event.currentTarget.value)}
                    withAsterisk
                >
                </TextInput>
                <Textarea
                    ref={postTextAreaRef}
                    label="Comment"
                    autosize
                    minRows={5}
                    value={postComment}
                    onChange={(event) => setPostComment(event.currentTarget.value)}
                >
                </Textarea>
                <UnstyledButton
                    id="post-submit-button"
                    onClick={() => {submitPost(undefined)}}
                >
                    Submit
                </UnstyledButton>
            </Modal>
            <div>
                <Accordion className="accordian" transitionDuration={1000}>
                    <Accordion.Item className="accordian-item" key="like" value="like">
                        <Accordion.Control className="accordian-label">&#119136; I like</Accordion.Control>
                        <Accordion.Panel className="accordian-content">
                            <div className="embedded-media-container">
                                { youtubeEmbeds }
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className="accordian-item" key="make" value="make">
                        <Accordion.Control className="accordian-label">&#119134; I make</Accordion.Control>
                        <Accordion.Panel className="accordian-content">
                            <div className="embedded-media-container">
                                { soundCloudEmbeds }
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}