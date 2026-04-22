import Button from "@/components/ui/Button";

export default function HomeContact() {
  return (
    <section className="relative overflow-hidden bg-navy py-8 sm:py-20 px-5 sm:px-6 lg:px-8 md:z-[40]">
      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
          {/* Overline */}
          <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-5">
            Get in Touch
          </p>

          <h2 className="font-display font-bold text-pearl text-[2rem] sm:text-5xl leading-tight">
            Ready to Move Forward?
          </h2>

          {/* Short gold rule */}
          <div className="mt-3 mb-3 sm:mt-6 sm:mb-6 w-12 h-px bg-gold mx-auto" />

          <p className="font-body text-pearl/70 text-lg leading-relaxed">
            Whether you&apos;re buying property, setting up a company, or navigating
            Thai regulations — our team is ready to help. Reach out today for a
            straightforward conversation about your needs.
          </p>

          <div className="mt-5 sm:mt-10">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-5 sm:mt-10 font-body text-pearl/35 text-sm">
            Infinity Global Solutions Co., Ltd. — Koh Phangan, Thailand
          </p>
      </div>
    </section>
  );
}
