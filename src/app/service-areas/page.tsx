import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import { COMPANY } from '@/lib/data';
import { SERVICE_AREAS } from '@/lib/service-areas';

export const metadata: Metadata = {
  title: `Service Areas | ${COMPANY.name}`,
  description:
    'Elemental Floral By TKM Designs serves Greater Houston with custom wedding and event florals — including Houston, Katy, Cypress, The Woodlands, Sugar Land, Pearland, Spring, and Memorial.',
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/hero/hero-2.webp"
          alt={`Service areas — ${COMPANY.name}`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#f59a88] uppercase">
            Greater Houston
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Service Areas
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="leading-relaxed text-foreground/60">
            Based in West Houston, {COMPANY.shortName} travels throughout
            Greater Houston to design wedding florals, ceremony installations,
            and reception tablescapes. Select your area to learn more about
            local services, venues, and what to expect when working with{' '}
            {COMPANY.founder}.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:border-[#f59a88]/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={area.heroImage}
                  alt={`${area.name} wedding florals`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#f59a88] uppercase">
                  <MapPin size={12} />
                  {area.region}
                </div>
                <h2 className="font-serif text-2xl md:text-5xl text-foreground transition-colors group-hover:text-[#f59a88]">
                  {area.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/55">
                  {area.intro.slice(0, 140)}…
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#f59a88] uppercase transition-all group-hover:gap-3">
                  Learn More
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-sm text-foreground/50">
            Don&apos;t see your area listed? We serve celebrations throughout
            Greater Houston — reach out to confirm availability.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-[#f59a88] px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#f8b5a8]"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
