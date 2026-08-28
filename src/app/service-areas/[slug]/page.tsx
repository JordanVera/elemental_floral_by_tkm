import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, MapPin } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import { COMPANY } from '@/lib/data';
import {
  getAdjacentServiceAreas,
  getServiceArea,
  SERVICE_AREAS,
} from '@/lib/service-areas';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ slug: area.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    return { title: `Service Areas | ${COMPANY.name}` };
  }

  return {
    title: `${area.headline} | ${COMPANY.name}`,
    description: area.metaDescription,
    openGraph: {
      title: `${area.headline} | ${COMPANY.name}`,
      description: area.metaDescription,
      images: [{ url: area.heroImage }],
    },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    notFound();
  }

  const { prev, next } = getAdjacentServiceAreas(area.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: COMPANY.name,
    telephone: COMPANY.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address,
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77084',
    },
    areaServed: {
      '@type': 'City',
      name: area.name,
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    description: area.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src={area.heroImage}
          alt={`${area.headline} — ${COMPANY.name}`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <Link
            href="/service-areas"
            className="mb-4 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] text-white/55 uppercase transition-colors hover:text-[#f59a88]"
          >
            <ArrowLeft size={12} />
            All Service Areas
          </Link>
          <p className="mb-3 flex items-center justify-center gap-2 text-[10px] tracking-[0.4em] text-[#f59a88] uppercase">
            <MapPin size={12} />
            {area.region}
          </p>
          <h1 className="max-w-3xl font-serif text-4xl text-white sm:text-5xl">
            {area.headline}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
              {area.intro}
            </p>
            <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
              {area.body}
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center bg-[#f59a88] px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#f8b5a8]"
              >
                Request a Consultation
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex justify-center border border-border px-8 py-3.5 text-xs tracking-[0.2em] text-foreground uppercase transition-all duration-200 hover:border-[#f59a88] hover:text-[#f59a88]"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <aside className="flex flex-col gap-8">
            <div className="border border-border bg-card p-6">
              <h2 className="mb-4 text-[10px] tracking-[0.3em] text-[#f59a88] uppercase">
                What We Offer
              </h2>
              <ul className="flex flex-col gap-3">
                {area.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-sm text-foreground/70"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-[#f59a88]"
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-card p-6">
              <h2 className="mb-4 text-[10px] tracking-[0.3em] text-[#f59a88] uppercase">
                Why Couples Choose Us
              </h2>
              <ul className="flex flex-col gap-3">
                {area.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm text-foreground/70"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-[#f59a88]"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-[#0e0c08] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-[10px] tracking-[0.35em] text-[#f59a88] uppercase">
            {area.name} Venues &amp; Settings
          </p>
          <h2 className="mb-8 font-serif text-3xl text-white sm:text-4xl">
            Florals for Every {area.name} Celebration
          </h2>
          <ul className="mx-auto grid max-w-2xl gap-3 text-left sm:grid-cols-2">
            {area.popularVenues.map((venue) => (
              <li
                key={venue}
                className="flex items-center gap-2 text-sm text-white/65"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-[#f59a88]" />
                {venue}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {prev && next ? (
        <section className="border-t border-border px-6 py-12 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2">
            <Link
              href={`/service-areas/${prev.slug}`}
              className="group flex items-center justify-between border border-border p-6 transition-colors hover:border-[#f59a88]/40"
            >
              <div>
                <p className="mb-2 inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-foreground/45 uppercase">
                  <ArrowLeft size={12} />
                  Previous Area
                </p>
                <h2 className="font-serif text-xl text-foreground transition-colors group-hover:text-[#f59a88] sm:text-2xl">
                  {prev.name}
                </h2>
              </div>
            </Link>
            <Link
              href={`/service-areas/${next.slug}`}
              className="group flex items-center justify-between border border-border p-6 text-right transition-colors hover:border-[#f59a88]/40"
            >
              <div className="ml-auto">
                <p className="mb-2 inline-flex items-center justify-end gap-2 text-[10px] tracking-[0.22em] text-foreground/45 uppercase">
                  Next Area
                  <ArrowRight size={12} />
                </p>
                <h2 className="font-serif text-xl text-foreground transition-colors group-hover:text-[#f59a88] sm:text-2xl">
                  {next.name}
                </h2>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <CtaStrip />
    </>
  );
}
