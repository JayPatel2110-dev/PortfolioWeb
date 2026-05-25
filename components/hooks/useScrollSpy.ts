"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(
    ids: string[],
    offset = 120
) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition =
                window.scrollY + offset;

            let currentSection = "";

            for (const id of ids) {
                const element =
                    document.getElementById(id);

                if (!element) continue;

                const offsetTop = element.offsetTop;
                const offsetHeight =
                    element.offsetHeight;

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition <
                    offsetTop + offsetHeight
                ) {
                    currentSection = id;
                }
            }

            setActiveId(currentSection);
        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, [ids, offset]);

    return activeId;
}