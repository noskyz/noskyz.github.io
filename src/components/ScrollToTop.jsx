import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const scrollToPosition = () => {
            if (hash) {
                const element = document.getElementById(hash.substring(1));

                if (element) {
                    const navbar = document.querySelector(".navbar");
                    const navbarHeight = navbar?.offsetHeight ?? 0;

                    const elementPosition =
                        element.getBoundingClientRect().top +
                        window.scrollY -
                        navbarHeight;

                    window.scrollTo({
                        top: elementPosition,
                        left: 0,
                        behavior: "smooth",
                    });

                    return;
                }
            }

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        };

        // Wait for the new page/content to be rendered
        requestAnimationFrame(() => {
            requestAnimationFrame(scrollToPosition);
        });
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;