import {
  FaApple,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { cn } from "cn";

import { Separator } from "@/components/ui/separator";

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface FooterSocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}
interface FooterLogo {
  url: string;
  src: string;
  alt: string;
  title: string;
}

interface FooterBasicProps {
  logo?: FooterLogo;
  sections?: FooterSection[];
  socialLinks?: FooterSocialLink[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface Footer1Props extends FooterBasicProps {
  tagline?: string;
}
type Props = Partial<Footer1Props>;

const defaultProps: Footer1Props = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "/images/logo/shadcnblocks-logo-word.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  sections: [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Marketplace", href: "#" },
        { name: "Features", href: "#" },
        { name: "Integrations", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Team", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Status", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Guides", href: "#" },
        { name: "Templates", href: "#" },
        { name: "Sales", href: "#" },
        { name: "Advertise", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { icon: <FaDiscord className="size-6" />, href: "#", label: "Discord" },
    { icon: <FaRedditAlien className="size-6" />, href: "#", label: "Reddit" },
    { icon: <FaTwitter className="size-6" />, href: "#", label: "Twitter" },
    {
      icon: <FaTelegramPlane className="size-6" />,
      href: "#",
      label: "Telegram",
    },
  ],
  copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  tagline: "Download our app and get started today.",
};

const MAX_SECTIONS = 3;

const Footer1 = (props: Props) => {
  const {
    logo,
    tagline,
    sections,
    socialLinks,
    legalLinks,
    copyright,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn("py-32 pb-16", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-center">
              <a href={logo?.url ?? "#"}>
                <img
                  src={logo?.src ?? ""}
                  alt={logo?.alt ?? ""}
                  title={logo?.title ?? ""}
                  className="h-7 dark:invert"
                />
              </a>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <p className="text-sm font-medium text-muted-foreground">
                {tagline}
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-sm bg-primary p-1"
                >
                  <FaApple className="size-5 text-background" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-sm bg-primary p-1"
                >
                  <img
                    src="https://cdn.shadcnblocks.com/shadcnblocks/block/logos/google-play-icon.svg"
                    className="size-5 text-background"
                    alt="google play"
                  />
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-tight">
                Legal
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {legalLinks?.map((link, idx) => (
                  <li key={idx} className="font-medium hover:text-primary">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 mb-4 text-sm font-semibold tracking-tight">
                Social
              </h3>
              <ul className="flex items-center gap-4 text-sm text-muted-foreground">
                {socialLinks?.map((social, idx) => (
                  <li key={idx} className="font-medium hover:text-primary">
                    <a href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-xs font-medium text-muted-foreground">
            {copyright}
          </p>
        </footer>
      </div>
    </section>
  );
};

export { Footer1 };
