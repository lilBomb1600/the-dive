import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { reviews, averageRating, reviewCount } from "@/data/reviews";

export function Testimonials() {
  const featured = reviews.filter((r) => r.featured);
  const rest = reviews.filter((r) => !r.featured);

  return (
    <section className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="right-0 top-10" />
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="What the neighborhood is saying"
          description={`${averageRating.toFixed(1)} average from ${reviewCount} verified Google reviews.`}
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {[...featured, ...rest].map((r) => (
            <RevealItem key={r.name}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-gradient-to-b from-surface to-surface-light p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_20px_50px_-15px_rgba(61,123,255,0.3)]">
                <StarRating rating={r.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/90">&ldquo;{r.text}&rdquo;</p>
                {r.ownerReply && (
                  <div className="mt-4 rounded-2xl bg-surface-light p-4 text-xs leading-relaxed text-muted">
                    <span className="font-semibold text-blue">The Dive (Owner):</span> {r.ownerReply}
                  </div>
                )}
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
                  <span className="font-semibold text-cream/80">{r.name}</span>
                  <span>{r.date}</span>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
