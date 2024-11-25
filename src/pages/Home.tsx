import "@mantine/core/styles.css";
import "/src/style.css"
import { Text } from "@mantine/core";
import LeafOverlay from "../components/LeafOverlay";

export default function Home() {

    return (
        <div>
            <LeafOverlay></LeafOverlay>
            <div className="welcome-contents">
                <img 
                    id="welcome-image"
                    src="static/assets/walking.jpg"
                />
                <Text
                    id="welcome-text"
                >
                    Welcome to my website!
                </Text>
                <br />
            </div>
        </div>
    );
}