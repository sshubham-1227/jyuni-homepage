import type { Metadata } from "next"

// Central metadata defaults
export const defaultMetadata: Metadata = {
  title: {
    template: "%s | Jyuni",
    default: "Jyuni - ABA Practice Management Platform"
  },
  description: "Practice management for ABA—fast, clear, and built for outcomes. Scheduling, notes, data collection, billing, and family engagement in one secure platform.",
  keywords: "ABA practice management, ABA software, practice management platform, ABA therapy, HIPAA compliant",
  authors: [{ name: "Jyuni Team" }],
  creator: "Jyuni",
  publisher: "Jyuni",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jyuni.com",
    siteName: "Jyuni",
    title: "Jyuni - ABA Practice Management Platform",
    description: "Practice management for ABA—fast, clear, and built for outcomes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jyuni - ABA Practice Management Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://jyuni.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyuni - ABA Practice Management Platform",
    description: "Practice management for ABA—fast, clear, and built for outcomes.",
    images: ["/og-image.jpg"],
    creator: "@jyuni",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
}

// Helper function to create page-specific metadata
export function createPageMetadata(overrides: Partial<Metadata> & { path?: string }): Metadata {
  const { path, ...metadataOverrides } = overrides
  
  // Auto-generate canonical URL if path is provided
  const canonicalUrl = path ? `https://jyuni.com${path}` : undefined
  
  return {
    ...defaultMetadata,
    ...metadataOverrides,
    alternates: {
      canonical: canonicalUrl || defaultMetadata.alternates?.canonical,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
      url: canonicalUrl || defaultMetadata.openGraph?.url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
    },
  }
}
