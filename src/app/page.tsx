import type { Metadata } from "next";
import { faqs, services, site } from "@/lib/site";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Warranty } from "@/components/Warranty";
import { DampCallout } from "@/components/DampCallout";
import { Coverage } from "@/components/Coverage";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { BookingCta } from "@/components/BookingCta";

export const metadata: Metadata = {
  title: "Caravan & Motorhome Servicing Malton, York | Caravan Support",
  description:
    "AWS Approved caravan & motorhome servicing, repairs and upgrades in Malton, North Yorkshire. Workshop & fully mobile. Keep your warranty valid — call 01653 513019.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Caravan & Motorhome Servicing in North Yorkshire | Caravan Support",
    description:
      "AWS Approved servicing, repairs and upgrades — at our Malton workshop or mobile at your home, storage site or holiday park. Rated 4.9/5 on Google.",
    url: "/",
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Caravan & Motorhome Servicing in North Yorkshire | Caravan Support",
    description:
      "AWS Approved servicing, repairs and upgrades — workshop & mobile across North Yorkshire. Rated 4.9/5 on Google.",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${site.domain}/#business`,
  name: site.legalName,
  alternateName: site.name,
  description:
    "AWS Approved, NCC qualified caravan and motorhome servicing, repairs and upgrades. Workshop in Malton plus fully mobile coverage across North Yorkshire.",
  url: site.domain,
  telephone: "+441653513019",
  email: site.email,
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.town,
    addressRegion: site.address.county,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:30",
    },
  ],
  areaServed: [
    "Malton",
    "York",
    "Pickering",
    "Helmsley",
    "Scarborough",
    "Driffield",
    "Ryedale",
    "North Yorkshire",
  ].map((name) => ({ "@type": "Place", name })),
  founder: { "@type": "Person", name: "Harvey Dukesell" },
  foundingDate: "2023",
  sameAs: [site.facebook],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Caravan & Motorhome Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
      ...(service.price.startsWith("£")
        ? { price: service.price.replace("£", ""), priceCurrency: "GBP" }
        : {}),
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Services />
      <Warranty />
      <DampCallout />
      <Coverage />
      <About />
      <Reviews />
      <Faq />
      <BookingCta />
    </main>
  );
}
