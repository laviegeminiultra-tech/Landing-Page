import { useEffect, useRef, useState, useMemo } from 'react'

export function useInView(options?: IntersectionObserverInit) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    // Memoize options to prevent re-creating observer on every render
    const threshold = options?.threshold ?? 0.25
    const rootMargin = options?.rootMargin ?? '0px 0px -80px 0px'

    const stableOptions = useMemo(() => ({
        threshold,
        rootMargin,
    }), [threshold, rootMargin])

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.unobserve(element)
            }
        }, stableOptions)

        observer.observe(element)
        return () => observer.disconnect()
    }, [stableOptions])

    return { ref, isVisible }
}
