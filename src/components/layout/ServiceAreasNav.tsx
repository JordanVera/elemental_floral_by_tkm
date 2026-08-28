'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { SERVICE_AREAS, SERVICE_AREAS_INDEX } from '@/lib/service-areas';
import { cn } from '@/lib/utils';

type ServiceAreasNavProps = {
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
};

export default function ServiceAreasNav({
  variant = 'desktop',
  onNavigate,
}: ServiceAreasNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  const isActive =
    pathname === SERVICE_AREAS_INDEX.href ||
    pathname.startsWith(`${SERVICE_AREAS_INDEX.href}/`);

  useEffect(() => {
    if (variant !== 'desktop') return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      clearCloseTimeout();
    };
  }, [variant]);

  if (variant === 'mobile') {
    return (
      <div className="flex flex-col">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={cn(
            'flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-[#f59a88]/10',
            isActive ? 'text-[#f59a88]' : 'text-white hover:text-[#f59a88]',
          )}
          aria-expanded={open}
        >
          {SERVICE_AREAS_INDEX.label}
          <ChevronDown
            size={16}
            className={cn('transition-transform', open && 'rotate-180')}
          />
        </button>
        {open ? (
          <div className="mt-1 flex flex-col gap-0.5 border-l border-[#f59a88]/20 pl-3 ml-3">
            <Link
              href={SERVICE_AREAS_INDEX.href}
              onClick={onNavigate}
              className={cn(
                'rounded-lg px-3 py-2 text-sm transition hover:bg-[#f59a88]/10',
                pathname === SERVICE_AREAS_INDEX.href
                  ? 'text-[#f59a88]'
                  : 'text-white/75 hover:text-[#f59a88]',
              )}
            >
              All Service Areas
            </Link>
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                onClick={onNavigate}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm transition hover:bg-[#f59a88]/10',
                  pathname === `/service-areas/${area.slug}`
                    ? 'text-[#f59a88]'
                    : 'text-white/75 hover:text-[#f59a88]',
                )}
              >
                {area.name}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimeout();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => {
          clearCloseTimeout();
          setOpen((value) => !value);
        }}
        className={cn(
          'group relative flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors xl:px-3',
          isActive ? 'text-[#f59a88]' : 'text-white/80 hover:text-white',
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {SERVICE_AREAS_INDEX.label}
        <ChevronDown
          size={12}
          className={cn('transition-transform', open && 'rotate-180')}
        />
        <span
          className={cn(
            'absolute inset-x-3.5 -bottom-0.5 h-px bg-[#f59a88] transition-transform duration-300',
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
          )}
        />
      </button>

      {open ? (
        <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e0c08]/95 py-2 shadow-xl backdrop-blur-xl">
            <Link
              href={SERVICE_AREAS_INDEX.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block px-4 py-2.5 text-[11px] tracking-[0.15em] uppercase transition hover:bg-[#f59a88]/10',
                pathname === SERVICE_AREAS_INDEX.href
                  ? 'text-[#f59a88]'
                  : 'text-white/80 hover:text-[#f59a88]',
              )}
            >
              All Areas
            </Link>
            <div className="my-1 border-t border-white/10" />
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'block px-4 py-2 text-sm transition hover:bg-[#f59a88]/10',
                  pathname === `/service-areas/${area.slug}`
                    ? 'text-[#f59a88]'
                    : 'text-white/75 hover:text-[#f59a88]',
                )}
              >
                {area.name}
                <span className="mt-0.5 block text-[10px] tracking-wide text-white/40 normal-case">
                  {area.region}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
