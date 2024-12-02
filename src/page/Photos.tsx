import { Text } from "@mantine/core";

export default function Photos() {
    return (
        <div>
            <h2 className="page-header">Photos</h2>
            <br />  
            <div className="photo-container">
                <img 
                    src="static/assets/water-tower.jpg"
                    id="water-tower-img"
                />
                <img 
                    src="static/assets/mountain-light.jpg"
                    id="mountain-light-img"
                />
                <img 
                    src="static/assets/tree-on-tree.jpg"
                    id="tree-on-tree-img"
                />
            </div>
        </div>
    );
}