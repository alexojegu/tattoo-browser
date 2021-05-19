import { useEffect, useState } from "react";

export default function useResponsive<T extends Record<string, string>>(media: T): ResponsiveHookData<T> {
    const [matches, setMatches] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const keys = Object.keys(media);
        const queries: Record<string, MediaQueryList> = {};

        const listener = (): void => {
            setMatches(
                keys.reduce<Record<string, boolean>>((results, key) => {
                    results[key] = queries[key].matches;

                    return results;
                }, {}),
            );
        };

        setMatches(
            keys.reduce<Record<string, boolean>>((results, key) => {
                queries[key] = matchMedia(media[key]);
                results[key] = queries[key].matches;

                queries[key].addEventListener("change", listener);

                return results;
            }, {}),
        );

        return () => keys.forEach((key) => queries[key].removeEventListener("change", listener));
    }, [media]);

    return matches as ResponsiveHookData<T>;
}

export type ResponsiveHookData<T> = Record<keyof T, boolean>;
