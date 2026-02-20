'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.08, // Subtle easing for luxury feel
                duration: 1.5, // slightly longer duration for smoothness
                smoothWheel: true,
                wheelMultiplier: 1,
            }}
        >
            {children}
        </ReactLenis>
    );
}
