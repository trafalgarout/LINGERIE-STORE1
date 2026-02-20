import type { Metadata } from 'next';
import Image from 'next/image';
import AdSenseUnit from '@/components/ads/AdSenseUnit';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Luxury Lingerie Shop | Elegant & Comfortable Lingerie Collections',
    description: 'Discover luxury lingerie collections including plus size, bridal, satin sleepwear, and designer styles. Shop Amazon\'s best picks for elegant, comfortable, and confident lingerie.',
    keywords: 'luxury lingerie, plus size lingerie, satin sleepwear, bridal lingerie, Amazon affiliate lingerie, lace bodysuit, corset shapewear',
};

interface Product {
    title: string;
    description: string;
    image: string;
    link: string;
}

interface Category {
    title: string;
    description: string;
    products: Product[];
}

const shopCategories: Category[] = [
    {
        title: "Sexy & Trending Styles",
        description: "Explore the most popular and seductive lingerie pieces that celebrate your femininity.",
        products: [
            {
                title: "Plus Size Plunging Neckline Teddy",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbH_Gf0Ji6qqW4LcWkO2ivGPYIx_gMTe1RE51SDt2c5k3FZunKsdC7U4viVzcuP4SI0boW0jSIwTo5BUJhIhNDZQBJl7Kc43Gb9pPxstGWYFB4qtWcoSghvF2nadJsM5pvuRAyc-DUec0SqJAG_xRqAo3YQy6mMrxh2wjes3oKAR9gWo1zTLxAqfdhC2d8/s320/Untitled%20design.png",
                link: "https://amzn.to/3OoEGGj",
            },
            {
                title: "Lace Bodysuit Lingerie for Women",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHy-a5KPdztivFnbglbMkUcL_ROyg2SSB9W56EAERH9rwsBGkZOjQsFXXBbM48Jm5vG-NLheq1wyzce3jsnoPIvBv5JwxT9htr1gLgp74QLJE3XfGlly9cYI9nFHOBqWUMUlVe9kGEsaf_E5dorbw5DO8B2Cv2MIgsTd0zi-QRTQ_ksgYVpLr84y5loexy/s320/Untitled%20design%20(1).png",
                link: "https://amzn.to/3LCkH5B",
            },
            {
                title: "Sheer Mesh Lingerie Set",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMx9e2EIRaIeJhwoxyAHnk8Il9cJRX2_uHhshAYQSHhGOii8Wg5xmBWoVzibmv5dmbgctZLTo4gfNvORbIh0RyBqNhhJyOJjNvc9t70aQICSWRdTrrbQnSjDdUUk7U8oJYqTs5XTdJieYgUCuXL7tIZfjZv6-dlmfngktr1AY7MEFqulAa161z61fUyTld/s320/Untitled%20design%20(2).png",
                link: "https://amzn.to/47Vdwgq",
            },
            {
                title: "Open Back Lace Babydoll",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7-MxoaUP8ahp670PmGgBQBVHqSg1D8sHiVvp_ihNqZ6UMWYpzrjCjoindryIfy3WflUu37P684Jw2cMR6_JdL3FomKRe3QYYIUNyNKFA-p8azPtB78Yi5A-bCSdqiHsZWxi-2QmWS04fc08u7smBmayjwS7BgKKuzRk2X2-dd7keoEo9_cRb_TsjHbOuZ/s320/Untitled%20design%20(3).png",
                link: "https://amzn.to/4nQ5I5q",
            },
        ],
    },
    {
        title: "Romantic & Elegant Pieces",
        description: "Timeless lingerie that combines sophistication with delicate femininity.",
        products: [
            {
                title: "Floral Lace Chemise Nightgown",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTl5FWWRzhnA8_1Tn-q3TreeMqVWDtERnLa_VpCBv1Yo_zneBBTZ6_Y44BQmd-yKdhRnUtfamFbArWyTnZXuwl2psE4xMv2EVpJg-Cd7JtVwHSIYx4nZslMqTdaxklVluVhj3mpsq9en1Ltyvqwe_HJfejDjN3f0DF8Q1P6bJsa3EjyTw8hgJXazdwu6HU/s320/Untitled%20design%20(4).png",
                link: "https://amzn.to/47RPXFj",
            },
            {
                title: "Satin Robe with Lace Trim",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPrg6nDGe0ieFFv3fmZdBpzc_h4iayKs0FmTv5jeK4EPcLWXwRGeWhyqCdJkFKXxK7aiyiGulFlj-VX1y_Xn0mihWZbux_lJelVDNnOL8-FL5Ohc0fFFB8yk9M0lAAhX-Q_frYb4p-jvvDPDhqktXT2Ky702gDBSORYfk8aVQmykpmlyHBLPdjLkUk1ZY4/s320/Untitled%20design%20(5).png",
                link: "https://amzn.to/47Sd7LH",
            },
            {
                title: "Lingerie Set with Garter Belt",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAXoRY-mTJBqfL3gNGFZYHqEcVvnyBdOPo_jdsRADKlPptQTI-tlx6T67TGiEJr70SvWKZMZUHTvL12iSYgDiwYRGixsWmgCg1nZ5vNqcg7pQnr3cBi51RGD2P1DhDZkIkrzgWgsBiIrJl85KCNVCGQev3_g9F5I6W-HAHbkaRlneUFQGF88YEpXXJ3ALC/s320/Untitled%20design%20(6).png",
                link: "https://www.amazon.com/s?k=Lingerie+Set+with+Garter+Belt+and+Stockings",
            },
            {
                title: "Lace Bralette and Panty Set",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK7h2lXrJxLe935Lml98E6gS1IUl-qFy3ENTszgGlfIzLMGb1RiEgyIcdut_qyWcNrYuU9iJxxmXIboRtBXTI4WS66keqAtxczNk0wMK4Kj6v0M696oKjEvoD0NpW8LV4P6xptH-Nji22O3goP27Dk8xCtJivyGwfKH3Og2qM765RbZZLJZWDVbf3uN_cM/s320/Untitled%20design%20(7).png",
                link: "https://amzn.to/3JudxQo",
            },
        ],
    },
    {
        title: "Curvy & Plus Size Favorites",
        description: "Beautiful lingerie designed to celebrate and enhance every curve.",
        products: [
            {
                title: "Plus Size Lingerie Set with Garter",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju347HkCfZi_2IahLVc6_eTto_QOagFcwtUw4XMoz2-GEpH3o5SIVooJNMrdQxSlhnjBl19Fo8zGlZOHhelXk0OaUDprQlAGSBPVIwDA_sqeuhyphenhyphenIFBmVDKQ8SMHdofK88a7fC1OowaaTs8-JwbDOqU0O_XFPK-cbsxS8hbknC71KRh-rJGRmMH4GEJfMss/s320/Untitled%20design%20(8).png",
                link: "https://amzn.to/3LtWQFk",
            },
            {
                title: "Plus Size Lace Babydoll Sleepwear",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSClDAeNzG13CzMfHpAgL5I-UTGBML6-upg5AccmXtAKe3-sqf1dXrDxc0zwB5wfpjrCequlyyl8iNsrpYXeh-oqfEVxiilm66R_FfYtDWAIYkl2NEqK7Xr7jKkMsWn_KjOT4Umrl2VeKKhrI68nf_XQydv8zNdwdAV3RCMFX4MGCFt-GobzTsJ9RTX3UG/s320/Untitled%20design%20(9).png",
                link: "https://amzn.to/4qW35BL",
            },
            {
                title: "Plus Size Open Cup Teddy",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJzIW_fjSPVYukHbtYe21KX8i5nZqaTgpYxHo_JHW9VetkJWrt6Lh-xMypNqs_pUGC9CiA-9KKu40zTHUOdJcOY7FGsGx1bXmxGj1Jlbu6P08fL89eDu1bxMX68voHufh2DygTrWij4mmV-7bdIOT7aPvDT3xj9kiUwP9MXoN2IhQMH36TuIAlyhHSPZH9/s320/Untitled%20design%20(10).png",
                link: "https://amzn.to/49R95pj",
            },
            {
                title: "Plus Size Corset Bustier Top",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia5iSnzw5qG56pTyVdPpbnDPHOrgwObS7GXsa8Tjc9T7JAMwknyl-NxLBmQxFOvJepsGtx21MvT86UeyU5lKjFVzgeWvkc9YReUwZNMNKzRJvw6DJ4iPZfrTeeWDam8qz9rXNEBA5rpLFj3oLAS3fUlXEXixog9f7UxSapBdZy-y5YRjBx_blGDPh0AJAX/s320/Untitled%20design%20(11).png",
                link: "https://amzn.to/3JYUSMA",
            },
        ],
    },
    {
        title: "Nightwear & Lounge Luxury",
        description: "Indulge in sumptuous sleepwear that feels as luxurious as it looks.",
        products: [
            {
                title: "Satin Pajama Set for Women",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJbgdU9Lbu8NCT8Yc1BsmyMCWbZPUMeJgPeH7ggOJazv_ECqzr2j9dMGPT9rBoI8lPRZgwO0Lgf6lF4ufMEugI05VpnCKnE6aiV2iMq0g9Gtgysd8S9-jDS9V_6vuuW8VXUWw368o_mwTOaCTOS3f95sHAoKAu-iHgWVGEi1T8N2I3JGrcqFl-tchHmnhk/s320/Untitled%20design%20(12).png",
                link: "https://amzn.to/3JUiL7X",
            },
            {
                title: "Silk Cami and Shorts Set",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjygBQbeyXKoOgpvMae93t7j1iYpVGT0w55I3r0AG8D9cPeeNldzmd4YvzlJUwova1LpRmWLgFACUdZ7ggBTe8gVhBzuMsusHpPv6T8djAtqaxfi7HIg82t8Or9HzXIsjPF8vq0ZhBWxkhdVTlIxhIgzzTo_DgSLULJS5sFD-gjKmwRrxis0TMxfPyNDyDS/s320/Untitled%20design%20(13).png",
                link: "https://amzn.to/3LFBSmM",
            },
            {
                title: "Lace Trim Sleep Dress",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ0sNOr1Iwn2rri_uxm8uiiFNSbdxcME2ulEiAG6Z7mKc9Lka8OlCZ3T5qYvHKX9hk7SpZSrIAu0GwJr-vbQ-rPVyBbYGmtkBbyhyphenhyphenQkSABYfYxvENavx0rgSQOYUHwjyfzVnaZQR6kfPq-fyhFuKP_Qt6IoKz65ux6JOvLdY6lri2fs4VMnp6Z_SLfdsam/s320/Untitled%20design%20(14).png",
                link: "https://amzn.to/49zlpe3",
            },
            {
                title: "Luxury Satin Sleepwear",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeXs3F1X4pKXY-RWx-DtuZdHtQiVa46pzDqdUpOa9CWBj-z6BbPtyXl-NzlPfWcKM5-SdlGzOPWFTLpJc0z332daeVnbtUfhL1LaHRVxq0-uhwZFYgWWVSTDaeEXFIPUVDCZkIKGLrVSEsMqhjlvJmaIfkV8ebWy6zuD9bDfhansu3J8qZ8TnNXw6uPqBp/s320/Untitled%20design%20(15).png",
                link: "https://amzn.to/489lGmt",
            },
        ],
    },
    {
        title: "Seductive & Special Occasion",
        description: "Make every special moment unforgettable with exquisite occasion lingerie.",
        products: [
            {
                title: "Bridal Lingerie Set White Lace",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrnSbyVq3-2_ssw0TQiRvi5e3AVi9nqlJuLboDDy5_4bTJss73pb5Q9I5i9opvf-pa0S6YcL_FvgCq3b_2AsJB5EyD38xHnnu4Cwc3pTpzbcFajmNUPSUZ8B2w8jQsVN0c2Gk4U75hzSoI02y41aKlFJsU69X-FjSyzl4T066b5PsVX6tKOUrQFAHer3xR/s320/Untitled%20design%20(16).png",
                link: "https://amzn.to/48arVGO",
            },
            {
                title: "Valentine's Day Lingerie",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgG4tfrJZRQ8JZVIlk0lM8vVpNtFBzfMLX9k-VqM52vVgf6O8O_8BJe7SfGpUyhAB3l-cTDkTX5mU7MDAozaXzNEGeQj5Hh0of5tE32RzCcLhqzJyMhWBPk6ThhnaANP96n0ZwTMxQ4IOGMqhEKJJ_5cQJyLhnsN7nxKoBbNO8B5xxwfPebOd5diQO8ujpK/s320/Untitled%20design%20(17).png",
                link: "https://amzn.to/43XH1wM",
            },
            {
                title: "Red Lace Teddy Lingerie",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhndNB8F-oRac4RV3uriOZMWYjA1fhJ-RCuKTLcFVVKVTiEybMj3kjMhcxaFpOo32CdRjFhhYaZEIciPWp_BrZgyBc1W5ypsZm5UWQ2uXeRsENjqM02gx23TcDQYyw84YLVjFTJLXSy_d_qVI8kCzliQOeG1ULSBbkT5-a1O7R522WCxwr39VzjP6s3KUim/s320/Untitled%20design%20(18).png",
                link: "https://amzn.to/4hTgWVs",
            },
            {
                title: "Black Strappy Lingerie Set",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUe6x7rf9ah9KVyyggDuL_Uk4SWnijWB4f1-HNMMkYAjQ0Kki_6j6D_FI9VZ8FUiLwMd67KX2p13SKvkMOSqfPfVbcdDmIHeSqDoXMbS8BC2oHAsFOGKWhqPBidkn-TnqAkoDPRGYEk5T_ADhvPnub4ripLUieKhiGCrfUazz4E27AgRYJTb82fFLMZbwT/s320/Untitled%20design%20(19).png",
                link: "https://amzn.to/4oCQ6mY",
            },
        ],
    },
    {
        title: "Shapewear & Corsets",
        description: "Enhance your silhouette with elegant and comfortable shaping pieces.",
        products: [
            {
                title: "Lace Corset Top",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGUws0tJ116x_USpjl7R9P6vLegfCuklkZsmN39_Rt_OhoJXkEeynP3ZubBc2UvWtkM4rQMFBc869STGKugaLo154icnrFA1ZXithWDFf_5RoChDTjr4pokI22oq2RPVnKCnJ8wG5OAzGnFHbtDGsm0BbzwrO82GfKMHSh12fzdO-GiRFqCkrSa0nZaozx/s320/Untitled%20design%20(20).png",
                link: "https://amzn.to/3LXuNOt",
            },
            {
                title: "Bustier Corset Lingerie",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0QtU9aEbw0kH1BanmT-2zISIQo8xiKVMUgKjhqDmmC34-AgOw2a9qPAIBNTM-epGV_md2EGiS4cTp-ooVsgYfsIMDzuAdLJUK10SCnsYT4wFyF7Vu84S7dfU0qGF19cb3NGg68c9d_m7hsY9uxMN4Nsb6hfhNXhv4ZSfJh_rWhtgw4Nc5f_MQ25LwbRkJ/s320/Untitled%20design%20(21).png",
                link: "https://amzn.to/4oyOsTn",
            },
            {
                title: "Tummy Control Bodysuit Shapewear",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAdcnl_JXiLPChp6y_YorpfEYS1IiETX35MOa8ncTGa-cHBEiaIB4BEtBMav42GFltH04Qra-FwqatJS7Z3yOie-mF_HOvqDgSOfiHJjYP2eOVktJMV-N4fHhDjDy7ffkfIXwmgxeqVuMEWBydijlzcdVDDaZ-kFC970HM6lrVMTilS_bmKMoI7aYvTtyH/s320/Untitled%20design%20(22).png",
                link: "https://amzn.to/4qVlqPt",
            },
            {
                title: "Waist Cincher Corset",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7CWyuBsDPVyWQlqowIPDHw7HpQH486MRTNlgXgJDrl-4UAbgy-9T16ZiKIROJr-qvsVEDQt09h8XgdZrl1OIQtjfAyIZZlBmMsXJhmIWc8lmVfRtF0F8LhIgXMg3gdGk39AUjO-q09aX6MIYo9MTSSdpuzJDYHG9IofVkVhZoGeCO-esdqDs9mITTROZe/s320/Untitled%20design%20(23).png",
                link: "https://amzn.to/4ozW73L",
            },
        ],
    },
    {
        title: "Premium Designer Styles",
        description: "Experience luxury lingerie from the world's most coveted designer brands.",
        products: [
            {
                title: "Victoria's Secret Lingerie",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPs05oXHPcm1BHJIRPLmZcYVZNcmLuWD4HUY2kQ5Irlr6DHlgl1eGOeMw2Mo3dq-Czx6CP1Q1NLLrRwvFsW9v6UvEtWrizMIj68hMUAQxNO3h18jEj_D7hkB06wxJFv3ryFB5nJ_pK-ssEZ1auLg_-2Vvsc13bD8ppB5MpznH2lb-wgvupnYk50KYiB4qq/s320/Untitled%20design%20(24).png",
                link: "https://amzn.to/48bRCqk",
            },
            {
                title: "Savage X Fenty Lingerie",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5UU-5RgBpJRdvYJfB8sR3OyuulZFz1PhZuo4E5LQaXC0_3jZI0_hMC5bxBgiCZ1Xn39aSK7LJa_00Bf3HSly4Mhjc7RP87szA87bMRC2ZyLkGzwHPoQfL9Tckvl5Q09h0XjsHg62DMQ0t-blrRy1Bppi2FbW80EQxO5kkgqobw_DgCMIGHFMe57WyvvmT/s320/Untitled%20design%20(25).png",
                link: "https://amzn.to/3WSp9je",
            },
            {
                title: "Luxury Silk Lingerie Set",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgckO3XjQcZ2D037G_xGDGadwmCaCkuJ6RpEF3TROpeQ3HJv7pR69hAybOO6WRNWWK6IKVWWfYQt21vOsRNUhNTAtTvxlqtx7g4x0jjGN7it3jjQ9YalSFkfZ4wK_S_4hSDUuk0qguiGPw7C4BNgMW1fhGIyGMfKXKQT2GtCqBBcKVMQsTgXcfU_Z_Tf7Xi/s320/Untitled%20design%20(26).png",
                link: "https://amzn.to/3LHKA3T",
            },
            {
                title: "High-End Lace Bodysuit",
                description: "Shop Amazon's best picks for this style",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1AlyeDLCiadoacHNr24hkYvymjXF2Y9sLDm4IPML0AZe8JDfVx8RyqfPfO2nQq0QPuuwHcyXRppU__wfOO_yv4aEtngZGUVrqLRXt_Uf6cdOR5j1mI77D_pN-tHfhNBtAH6bdFvZQcPWNkxIXu3hsBISi5PaUW8wmy1-CBx8DqB_yuSb10w2yR2ciUOR7/s320/Untitled%20design%20(28).png",
                link: "https://amzn.to/47D7uC7",
            },
        ],
    },
];

const adSlots = [
    { slot: "6434061346", format: "auto" as const },
    { slot: "6367871917", format: "auto" as const },
    { slot: "3703670817", format: "auto" as const },
    { slot: "8920338476", format: "auto" as const },
    { slot: "7607256800", format: "auto" as const },
    { slot: "4626155651", format: "auto" as const },
    { slot: "2428626901", format: "auto" as const },
];

export default function ShopPage() {
    return (
        <div className={styles.container}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Embrace Your Inner <span className={styles.heroTitleGold}>Elegance</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Discover elegance, comfort, and confidence with our curated luxury lingerie collections.
                    </p>
                </div>
            </section>

            <div className={styles.categoriesMain}>
                <div className={styles.goldDivider}></div>

                {shopCategories.map((category, catIndex) => (
                    <div key={category.title}>
                        <section className={styles.categorySection}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}>{category.title}</h2>
                                <p className={styles.sectionDescription}>{category.description}</p>
                            </div>

                            <div className={styles.productsGrid}>
                                {category.products.map((product) => (
                                    <div key={product.title} className={styles.productCard}>
                                        <div className={styles.productImageWrap}>
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                                                className={styles.productImage}
                                            />
                                        </div>
                                        <div className={styles.productInfo}>
                                            <h3 className={styles.productTitle}>{product.title}</h3>
                                            <p className={styles.productDescription}>{product.description}</p>
                                            <div className={styles.productBtnWrap}>
                                                <a
                                                    href={product.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer nofollow"
                                                    className={styles.productBtn}
                                                >
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Ad banner after each category */}
                        {catIndex < adSlots.length && (
                            <div className={styles.adBanner}>
                                <AdSenseUnit slot={adSlots[catIndex].slot} format={adSlots[catIndex].format} />
                            </div>
                        )}
                    </div>
                ))}

                {/* Disclaimer */}
                <div className={styles.disclaimer}>
                    <p>
                        Luxury Lingerie Shop curates exquisite lingerie selections designed to inspire confidence
                        and allure. Some of our product recommendations may include affiliate links that support
                        our work — always at no additional cost to you.
                    </p>
                </div>
            </div>

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Luxury Lingerie Shop",
                        url: "https://www.lingerieparadise.store/shop",
                        description: "Discover luxury lingerie collections including plus size, bridal, satin sleepwear, and designer styles.",
                        publisher: {
                            "@type": "Organization",
                            name: "Lingerie Paradise",
                            url: "https://www.lingerieparadise.store/",
                        },
                    }),
                }}
            />
        </div>
    );
}
