import Script from 'next/script';

export default function AdSenseScript() {
    return (
        <Script
            id="adsense-script"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" // Replace with actual client ID
            strategy="afterInteractive"
            crossOrigin="anonymous"
        />
    );
}
