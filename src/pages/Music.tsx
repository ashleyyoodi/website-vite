import { Accordion, Text } from "@mantine/core";

const youtubeLinks = [
    { link: "https://www.youtube.com/embed/mtVSYTPDuq4?si=zmLJsRdDk7IkkOi_", 
        comment: "I am in love with how delicate this song feels"
     },
    { link: "https://www.youtube.com/embed/cLoQADJnGr4?si=BvkmlbHDMTZt9FUz", 
        comment: "don't know a lot of King Crimson but I come back to this one"
    },
    { link: "https://www.youtube.com/embed/pgrC-iZ8UDU?si=htNGJQIegEJW9PLf",
        comment: "what can I say... a beautiful classic!"
     },
    { link: "https://www.youtube.com/embed/Nj1M8lfq_os?si=zIWPAnJ3Uute5rYC",
        comment: "what can I say... a beautiful non-classic!"
     },
    { link: "https://www.youtube.com/embed/V7QaGc2fmmE?si=jPHIrCP1cZ9ioyav",
        comment: "never headbanged as much as I did at an LCD show"
     }
];

const soundcloudLinks = [
    { link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1200689353&color=%23ff5500&auto_play=false&show_comments=true&show_user=true&show_reposts=false",
        comment: "I made this one day for my friend's birthday : )"
    },
    { link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/890265739&color=%23ff5500&auto_play=false&show_comments=true&show_user=true&show_reposts=false",
        comment: "I remember being inspired by Mild High Club when I made this"
    },
    { link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/890265703&color=%23ff5500&auto_play=false&show_comments=true&show_user=true&show_reposts=false",
        comment: "Boy Pablo was all up in my youtube suggested during this time, so I gave in one day and checked them out. I thought they made fun, lighthearted jams, so I wanted to see if I could keep it simple and record something in that style" },
    { link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1546018699&color=%23ff5500&auto_play=false&show_comments=true&show_user=true&show_reposts=false",
        comment: "I believe this was to test playing the same background part on guitar and bass" },
    { link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1556238562&color=%23ff5500&auto_play=false&show_comments=true&show_user=true&show_reposts=false",
        comment: "I submitted this when I applied for UCLA Radio haha-- also partly inspired by Mild High Club. I also know I wanted that crunchy sound, though this could have done with some better mixing" },
    { link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1640566183&color=%23ff5500&auto_play=false&show_comments=true&show_user=true&show_reposts=false",
        comment: "video game type jam embracing virtual instruments! I love putting delay on electronic drums for that tactile pitter patter effect" },
    { link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1546016884&color=%23ff5500&auto_play=false&show_comments=true&show_user=true&show_reposts=false",
        comment: "When I made this little thing, my goal was to break out of the hole of looping that I often fall into and build something up little by little. I enjoyed incorporating some noise into this one for old videogame-style percussion" }
]

export function Music() {
    const soundcloudEmbeds = soundcloudLinks.map((link) => (
        <div className="media-embed-container">
            <iframe className="soundcloud-embed" width="40%" height="166" allow="autoplay" frameBorder="no" src={link.link}></iframe>
            <Text className="music-comment">{link.comment}</Text>
        </div>
    ));

    const youtubeEmbeds = youtubeLinks.map((link) => (
        <div className="media-embed-container">
            <iframe width="40%" height="315" src={link.link} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        <Accordion.Control className="accordian-label">&#119136; Music I like</Accordion.Control>
                        <Accordion.Panel className="accordian-content">
                            <div className="embedded-media-container">
                                { youtubeEmbeds }
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className="accordian-item" key="make" value="make">
                        <Accordion.Control className="accordian-label">&#119134; Music I make</Accordion.Control>
                        <Accordion.Panel className="accordian-content">
                            <div className="embedded-media-container">
                                { soundcloudEmbeds }
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}