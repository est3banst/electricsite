import { useEffect } from "react";

export function useScrollTop() {
    useEffect(() => {
        scrollTo(0, 0);
    })
}