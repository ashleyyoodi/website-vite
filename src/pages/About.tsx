import { Text } from "@mantine/core"

export default function() {
    return (
        <div>
            <h2 className="page-header">About</h2>
            <br />
            <img 
                id="yoyo"
                src="static/assets/blue-yoyo.jpg"
            />          
            <Text>
                Hello, my name is Yoodi!
                <br /><br />
                I am learning to use React.
            </Text>
        </div>
    );
}