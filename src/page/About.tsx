import { Text } from "@mantine/core"

export default function About() {
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
                    Hello, my name is Yoodi!
                    <br /><br />
                    I originally started building this personal website as a way to learn React. 
                    However, I now recognize the additional value of having a space to share my thoughts outside of the ecosystem of social media.
                    I like the idea that anything I write here will not be pushed onto anyone's feed... it is just here....
                    You can take a look, or you can not take a look &#9786;
                </Text>
            </div>
        </div>
    );
}