import { useEffect, useState } from 'react';
import './LeafOverlay.css';
import Leaf from './Leaf';

export default function LeafOverlay() {
    const [leaves, setLeaves] = useState<any[]>([]);

    useEffect(() => {
        const generateLeaves = () => {
            const numLeaves = 7;
            const newLeaves = [];
            for(let i=0; i<numLeaves; i++) {
                newLeaves.push({
                    id: i,
                    x: Math.random() * 100 + 'vw',
                    y: -20 + 'px',
                    animationDelay: (Math.random() * 5) + 's',
                    transform: 'rotateX(' + (Math.random() * (80-20) + 20)+ 'deg)'
                });
            }
            setLeaves(newLeaves);
        };
        generateLeaves();
    }, []);


    return (
        <div className="leaf-overlay">
            {
                leaves.map(leaf => (
                    <Leaf 
                        key={leaf.id}
                        fallStyle={{
                            left: leaf.x,
                            top: leaf.y,
                            animationDelay: leaf.animationDelay
                        }}
                        swayStyle={{
                            animationDelay: leaf.animationDelay
                        }}
                        rotateStyle={{
                            transform: leaf.transform
                        }}
                    />
                ))
            }
        </div>
    );

}