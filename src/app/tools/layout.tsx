import React from 'react';

export default function ToolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271"
                    crossOrigin="anonymous"
                ></script>
            </head>
            {children}
        </>
    );
}
