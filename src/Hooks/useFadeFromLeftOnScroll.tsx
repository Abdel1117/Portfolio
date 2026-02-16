import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useFadeFromLeftOnScroll<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  delay = 0,
  duration = 1,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches;

    // Plus tôt sur mobile pour éviter l'effet "ça démarre tard"
    const startValue = isMobile ? "top 95%" : "top 80%";

    gsap.set(el, { x: -500, opacity: 0 });

    const tween = gsap.to(el, {
      x: 0,
      opacity: 1,
      delay,
      duration,
      ease: "power2.out",
      paused: true,
      overwrite: "auto",
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: startValue,
      onEnter: () => tween.restart(true),
      onLeaveBack: () => {
        tween.pause(0);
        gsap.set(el, { x: -500, opacity: 0 });
      },
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [ref, delay, duration]);
}
