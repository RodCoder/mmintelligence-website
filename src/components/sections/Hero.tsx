import React, { useEffect, useRef, useCallback } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

const TOTAL_FRAMES = 90;
const frames = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return new URL(`../../assets/images/vault-scroll-animation/ezgif-frame-${num}.jpg`, import.meta.url).href;
});

// Preload all frames into Image objects at module level
const imageCache: HTMLImageElement[] = new Array(TOTAL_FRAMES);
let loadedCount = 0;

function preloadFrames() {
  // First frame with high priority
  const first = new window.Image();
  first.fetchPriority = 'high';
  first.src = frames[0];
  first.onload = () => { loadedCount++; };
  imageCache[0] = first;

  // Rest in batches during idle time
  let idx = 1;
  function loadBatch() {
    const batchSize = 6;
    for (let j = 0; j < batchSize && idx < TOTAL_FRAMES; j++, idx++) {
      const img = new window.Image();
      img.src = frames[idx];
      img.onload = () => { loadedCount++; };
      imageCache[idx] = img;
    }
    if (idx < TOTAL_FRAMES) {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadBatch);
      } else {
        setTimeout(loadBatch, 16);
      }
    }
  }
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(loadBatch);
  } else {
    setTimeout(loadBatch, 0);
  }
}
preloadFrames();

export function Hero(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastFrameRef = useRef(-1);
  const rafRef = useRef<number>(0);
  const { isMobile, isTablet } = useBreakpoint();

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = imageCache[index];
    if (!img || !img.complete || !img.naturalWidth) return;

    // Resize canvas to match image on first draw or size change
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  }, []);

  useEffect(() => {
    // Draw first frame once loaded
    const checkFirst = setInterval(() => {
      if (imageCache[0]?.complete && imageCache[0]?.naturalWidth) {
        drawFrame(0);
        lastFrameRef.current = 0;
        clearInterval(checkFirst);
      }
    }, 50);
    return () => clearInterval(checkFirst);
  }, [drawFrame]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
      const newIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));

      if (newIndex !== lastFrameRef.current) {
        lastFrameRef.current = newIndex;
        // Use rAF to batch with paint
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(newIndex));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  const handleRequestAccess = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} style={{ height: isMobile ? '180vh' : '220vh', background: 'linear-gradient(180deg, #101010 80%, #0A0A0A 100%)' }}>
      <section
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          minHeight: isMobile ? '600px' : '700px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#101010'
        }}>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          height: '100%',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'space-between',
          padding: isMobile ? '80px 20px 20px' : isTablet ? '0 32px' : '0 56px',
          gap: isMobile ? '24px' : '0',
        }}>
          <div style={{ width: isMobile ? '100%' : isTablet ? '60%' : '55%', position: 'relative', zIndex: 1 }}>
            {/* Main headline */}
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                color: '#F5F2EE',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: isMobile ? '20px' : '28px',
                maxWidth: '820px',
                fontSize: isMobile ? 'clamp(32px, 9vw, 48px)' : 'clamp(48px, 6.5vw, 88px)',
              }}>
              Intelligence for digital and traditional assets
            </h1>

            {/* Subline */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: isMobile ? '14px' : '18px',
                fontWeight: 300,
                color: 'rgba(245,242,238,0.5)',
                letterSpacing: '0.04em',
                marginBottom: isMobile ? '32px' : '56px',
                maxWidth: '800px',
                lineHeight: 1.6
              }}>
              MM Intelligence provides technical evidencing, cybersecurity assurance,
              and operational governance support for high-value digital wealth environments.
              We deliver a partner-led work where outcomes depend on judgement, negotiation,
              and accountability. supported by controlled internal tooling where it improves
              rigour and confidentiality.
            </p>

            {/* CTA */}
            <button className="kinari-btn" onClick={handleRequestAccess}>
              Start a confidential discussion
            </button>
          </div>

          {/* Frame animation — behind text on mobile, side-by-side on desktop */}
          {!isMobile && (
            <div style={{
              width: isTablet ? '40%' : '45%',
              padding: isTablet ? '40px' : '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <canvas
                ref={canvasRef}
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  height: 'auto',
                  display: 'block',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </div>
          )}

          {/* Mobile: canvas as subtle background behind text */}
          {isMobile && (
            <canvas
              ref={canvasRef}
              style={{
                position: 'absolute',
                right: '-15%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '75%',
                height: 'auto',
                opacity: 0.2,
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 0,
              }}
            />
          )}
        </div>

        {/* Scroll indicator — hidden on mobile */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              bottom: '48px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '9px',
                letterSpacing: '0.25em',
                color: 'rgba(245,242,238,0.2)',
                textTransform: 'uppercase'
              }}>
              Scroll
            </span>
            <div
              style={{
                width: '1px',
                height: '48px',
                background: 'rgba(245,242,238,0.12)',
                position: 'relative',
                overflow: 'hidden'
              }}>
              <div
                className="scroll-dot"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '1px',
                  height: '16px',
                  background: 'rgba(201,168,76,0.6)'
                }} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
