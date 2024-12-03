import { Accordion, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchYoutubeLinks } from "../service/YoutubeService";
import { fetchSoundCloudLinks } from "../service/SoundCloudService";

export default function Music() {

    const [youtubeLinks, setYoutubbeLinks] = useState<any[]>([]);
    const [soundCloudLinks, setSoundCloudLinks] = useState<any[]>([]);

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

    return (
        <div>
            <h2 className="page-header">Music</h2>
            <br />  
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