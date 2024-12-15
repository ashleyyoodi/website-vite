import "@mantine/core/styles.css";
import "/src/style.css"
import { Text } from "@mantine/core";
import LeafOverlay from "../components/LeafOverlay";

export default function Home() {
    const randNum = Math.random();

    return (
        <div>
            <LeafOverlay></LeafOverlay>
            <div className="welcome-contents">
                {
                    randNum < 0.5 ?
                        <img 
                            id="welcome-image"
                            src="static/assets/walking.jpg"
                        />
                    : 
                        <img 
                            id="welcome-image"
                            src="static/assets/room.jpg"
                        />     
                }
                <Text
                    id="welcome-text"
                >
                    Welcome to my website! &#127760;
                </Text>
                <br />
            </div>
        </div>
    );
}