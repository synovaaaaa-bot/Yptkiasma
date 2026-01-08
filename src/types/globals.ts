// Global Types - matching Payload CMS globals structure

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'youtube' | 'twitter' | 'whatsapp';
  url: string;
}

export interface Header {
  logo: {
    primary: string;
    secondary: string;
  };
  organizationName: {
    main: string;
    sub: string;
  };
  navigation: NavLink[];
  announcement?: {
    enabled: boolean;
    text: string;
    link?: string;
  };
}

export interface Footer {
  logo: {
    primary: string;
    secondary: string;
  };
  description: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    whatsapp?: string;
  };
  socialLinks: SocialLink[];
  quickLinks: Array<{
    label: string;
    href: string;
  }>;
  copyright: string;
  footerText?: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  organizationInfo: {
    fullName: string;
    shortName: string;
    tagline: string;
    foundedYear: string;
    location: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    defaultImage: string;
    keywords: string[];
  };
}
