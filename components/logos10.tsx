import Marquee from "react-fast-marquee";
import { cn } from "cn";

interface Logo {
  src: string;
  alt: string;
  srcDark?: string;
  className?: string;
}

interface LogosBoxedMarqueeProps {
  heading?: string;
  logos: Logo[];
  className?: string;
}

interface Logos10Props extends LogosBoxedMarqueeProps {}
type Props = Partial<Logos10Props>;

const defaultProps: LogosBoxedMarqueeProps = {
  heading: "Trusted by these companies",
  logos: [
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-1.svg",
      alt: "Company logo 1",
      className: "h-7 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-2.svg",
      alt: "Company logo 2",
      className: "h-7 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-3.svg",
      alt: "Company logo 3",
      className: "h-7 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-4.svg",
      alt: "Company logo 4",
      className: "h-7 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-5.svg",
      alt: "Company logo 5",
      className: "h-5 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-6.svg",
      alt: "Company logo 6",
      className: "h-7 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-7.svg",
      alt: "Company logo 7",
      className: "h-7 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-8.svg",
      alt: "Company logo 8",
      className: "h-7 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-9.svg",
      alt: "Company logo 9",
      className: "h-7 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-10.svg",
      alt: "Company logo 10",
      className: "h-7 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-11.svg",
      alt: "Company logo 11",
      className: "h-7 w-auto",
    },
    {
      src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-12.svg",
      alt: "Company logo 12",
      className: "h-7 w-auto",
    },
  ],
};

const Logos10 = (props: Props) => {
  const { heading, logos, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-xl font-semibold tracking-tight text-balance md:text-2xl lg:mb-16 lg:text-3xl">
          {heading}
        </h2>
        <div className="relative">
          <Marquee autoFill pauseOnHover speed={40} gradient={false}>
            {logos.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="relative flex h-35 w-40 items-center justify-center border border-r-0 border-border sm:w-48 lg:w-52"
              >
                <p className="absolute top-2 left-2 text-xs tracking-tighter text-muted-foreground">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-auto max-h-7 w-auto object-contain dark:invert"
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos10 };
