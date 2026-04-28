"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_BREAKPOINT = 1024;
const NAV_OFFSET = 96;
const WHEEL_THRESHOLD = 60;
const TOUCH_THRESHOLD = 50;
const STEP_COOLDOWN_MS = 420;

const clampIndex = (value: number, total: number) =>
  Math.min(total - 1, Math.max(0, value));

interface UsePinnedStepScrollOptions {
  enableTouchOnMobile?: boolean;
  mobileScrollProgress?: boolean;
  mobileStepDistance?: number;
}

export const usePinnedStepScroll = (
  itemCount: number,
  options: UsePinnedStepScrollOptions = {}
) => {
  const {
    enableTouchOnMobile = false,
    mobileScrollProgress = false,
    mobileStepDistance,
  } = options;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const deltaAccumulatorRef = useRef(0);
  const cooldownRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    const clearCooldown = () => {
      if (cooldownRef.current !== null) {
        window.clearTimeout(cooldownRef.current);
        cooldownRef.current = null;
      }
    };

    const inPinnedZone = () => {
      const element = sectionRef.current;
      if (!element) {
        return false;
      }

      const rect = element.getBoundingClientRect();
      return (
        rect.top <= NAV_OFFSET &&
        rect.bottom >= window.innerHeight - NAV_OFFSET
      );
    };

    const step = (direction: 1 | -1) => {
      setActiveIndex((current) => clampIndex(current + direction, itemCount));
      deltaAccumulatorRef.current = 0;
      touchStartYRef.current = null;
      clearCooldown();
      cooldownRef.current = window.setTimeout(() => {
        cooldownRef.current = null;
      }, STEP_COOLDOWN_MS);
    };

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth < DESKTOP_BREAKPOINT) {
        return;
      }

      if (!inPinnedZone()) {
        deltaAccumulatorRef.current = 0;
        return;
      }

      const direction = Math.sign(event.deltaY);
      if (direction === 0) {
        return;
      }

      const atFirst = activeIndex === 0;
      const atLast = activeIndex === itemCount - 1;
      const leavingUp = direction < 0 && atFirst;
      const leavingDown = direction > 0 && atLast;

      if (leavingUp || leavingDown) {
        deltaAccumulatorRef.current = 0;
        return;
      }

      event.preventDefault();

      if (cooldownRef.current !== null) {
        return;
      }

      deltaAccumulatorRef.current += event.deltaY;
      if (Math.abs(deltaAccumulatorRef.current) < WHEEL_THRESHOLD) {
        return;
      }

      step(direction > 0 ? 1 : -1);
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (
        !enableTouchOnMobile ||
        mobileScrollProgress ||
        window.innerWidth >= DESKTOP_BREAKPOINT
      ) {
        return;
      }

      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (
        !enableTouchOnMobile ||
        mobileScrollProgress ||
        window.innerWidth >= DESKTOP_BREAKPOINT
      ) {
        return;
      }

      if (!inPinnedZone()) {
        touchStartYRef.current = null;
        return;
      }

      const startY = touchStartYRef.current;
      const currentY = event.touches[0]?.clientY;
      if (startY === null || currentY === undefined) {
        return;
      }

      const deltaY = startY - currentY;
      if (deltaY === 0) {
        return;
      }

      const direction = Math.sign(deltaY);
      const atFirst = activeIndex === 0;
      const atLast = activeIndex === itemCount - 1;
      const leavingUp = direction < 0 && atFirst;
      const leavingDown = direction > 0 && atLast;

      if (leavingUp || leavingDown) {
        touchStartYRef.current = currentY;
        return;
      }

      event.preventDefault();

      if (cooldownRef.current !== null) {
        return;
      }

      if (Math.abs(deltaY) < TOUCH_THRESHOLD) {
        return;
      }

      step(direction > 0 ? 1 : -1);
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = null;
    };

    const handleScroll = () => {
      if (!mobileScrollProgress || window.innerWidth >= DESKTOP_BREAKPOINT) {
        return;
      }

      const element = sectionRef.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const trackLength = Math.max(1, element.offsetHeight - window.innerHeight);
      const distanceScrolled = Math.min(
        trackLength,
        Math.max(0, -rect.top + NAV_OFFSET)
      );
      const nextIndex =
        mobileStepDistance && mobileStepDistance > 0
          ? clampIndex(Math.floor(distanceScrolled / mobileStepDistance), itemCount)
          : clampIndex(
              Math.round((distanceScrolled / trackLength) * (itemCount - 1)),
              itemCount
            );

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (window.innerWidth < DESKTOP_BREAKPOINT || !inPinnedZone()) {
        return;
      }

      const isForwardKey =
        event.key === "ArrowDown" ||
        event.key === "PageDown" ||
        event.key === " ";
      const isBackwardKey =
        event.key === "ArrowUp" || event.key === "PageUp";

      if (!isForwardKey && !isBackwardKey) {
        return;
      }

      const direction = isForwardKey ? 1 : -1;
      const atFirst = activeIndex === 0;
      const atLast = activeIndex === itemCount - 1;
      const leavingUp = direction < 0 && atFirst;
      const leavingDown = direction > 0 && atLast;

      if (leavingUp || leavingDown) {
        return;
      }

      event.preventDefault();
      if (cooldownRef.current !== null) {
        return;
      }

      step(direction as 1 | -1);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    handleScroll();

    return () => {
      clearCooldown();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    activeIndex,
    enableTouchOnMobile,
    itemCount,
    mobileScrollProgress,
    mobileStepDistance,
  ]);

  return {
    activeIndex,
    progressPercent: ((activeIndex + 1) / itemCount) * 100,
    sectionRef,
  };
};
