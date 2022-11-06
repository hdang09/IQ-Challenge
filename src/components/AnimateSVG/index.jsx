import { useRef } from 'react';

const AnimateSVG = ({ svg }) => {
    const svgRef = useRef();

    const animate = () => {
        const img = svgRef.current.contentDocument;
        let ids = img.querySelectorAll('[id]');
        [...ids].forEach((idItem) => {
            idItem.animate(
                [
                    { transform: 'translateY(0px)' },
                    { transform: 'translateY(-10px)' },
                    { transform: 'translateY(10px)' },
                    { transform: 'translateY(0px)' },
                ],
                {
                    duration: 5000,
                    iterations: Infinity,
                    easing: 'linear',
                }
            );
        });

        let paths = img.querySelectorAll('path');
        [...paths].forEach((item) => {
            item.style.strokeDasharray = item.getTotalLength();
            item.style.fillOpacity = 0;
            item.style.strokeWidth = '0.5px';
            item.animate(
                [
                    {
                        strokeDashoffset: item.getTotalLength(),
                        stroke: '#333',
                        fillOpacity: 0,
                    },
                    { strokeDashoffset: 0, stroke: '#333', fillOpacity: 0 },
                    { stroke: 'white', fillOpacity: 0.5 },
                    { stroke: 'white', fillOpacity: 1 },
                ],
                {
                    duration: 3000,
                    fill: 'forwards',
                    easing: 'linear',
                }
            );
        });
    };

    return <object data={svg} ref={svgRef} onLoad={animate} />;
};

export default AnimateSVG;
