import { Text } from "@mantine/core"

export default function() {
    return (
        <div>
            <h2 className="page-header">About</h2>
            <br />
            <div>
                <img 
                    id="selfie"
                    src="static/assets/selfie.jpg"
                />
                <br /><br />  
                <Text>
                    Hello, my name is Yoodi, and I am learning to use React. This has been a really fun experience so far-- I always wanted a place to share my thoughts and interests outside of the ecosystem of social media!
                    <br /><br />
                    I like music, climbing, surfing, making, tinkering, puzzling, solving, eating, and long walks on the beach &#9786;
                </Text>
            </div>
        </div>
    );
}