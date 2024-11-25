import './Leaf.css';

export default function Leaf(props: { fallStyle: any, swayStyle: any, rotateStyle: any }) {
    return (
        <div
            className="leaf-fall"
            style={props.fallStyle}
        >
            <div
                className="leaf-sway"
                style={props.swayStyle}
            >
                <img 
                    src="/static/assets/pixel-leaf.png"
                    className="leaf-rotate"
                    style={props.rotateStyle}
                />
            </div>
        </div>
    );
}