import { Contact31 } from "@/components/contact31";
import { Footer1 } from "@/components/footer1";
import { Gallery4 } from "@/components/gallery4";
import { Hero195 } from "@/components/hero195";
import { Logos10 } from "@/components/logos10";
import { Pricing16 } from "@/components/pricing16";
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8">
      <Hero195 />
        <Logos10 />
        <Gallery4  />
        <Pricing16 />
        <Contact31 />
        <Footer1 />

    </div>
  )
}
