import { BrandImage } from "@/components/brand-image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui-layout"
import type { Club } from "@/lib/clubs"
import type { Copy } from "@/lib/copy"
import { cn } from "@/lib/utils"

export function ClubView({
  club,
  t,
  simLabel,
}: {
  club: Club
  t: Copy
  simLabel: string
}) {
  const canBook = club.status === "active" && Boolean(club.bookingUrl)

  return (
    <article>
      <header className="dark bg-background py-20 text-foreground md:py-28">
        <Container className="flex flex-col gap-4">
          <p className="type-eyebrow">
            {club.status === "active" ? t.clubsPage.statusActive : t.clubsPage.statusComing}
          </p>
          <h1 className="type-h1 max-w-3xl">{club.name}</h1>
          {club.location ? (
            <p className="type-lead text-muted-foreground">{club.location}</p>
          ) : null}
          {canBook ? (
            <div className="pt-2">
              <Button
                size="lg"
                render={
                  <a href={club.bookingUrl} rel="noopener noreferrer" />
                }
                nativeButton={false}
              >
                {t.clubsPage.book}
              </Button>
            </div>
          ) : null}
        </Container>
      </header>

      {club.images && club.images.length > 0 ? (
        <div
          className={cn(
            "grid gap-2 bg-ink",
            club.images.length > 1 ? "md:grid-cols-2" : "grid-cols-1"
          )}
        >
          {club.images.map((src) => (
            <BrandImage
              key={src}
              src={src}
              alt=""
              simLabel={simLabel}
              className="aspect-[16/10] min-h-56"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))}
        </div>
      ) : null}

      <Container className="flex flex-col gap-12 py-14 md:py-20">
        {club.amenities && club.amenities.length > 0 ? (
          <section>
            <h2 className="type-h2">{t.clubsPage.amenities}</h2>
            <ul className="type-body mt-5 space-y-2 text-muted-foreground">
              {club.amenities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {club.hours ? (
          <section>
            <h2 className="type-h2">{t.clubsPage.hours}</h2>
            <p className="type-body mt-4 text-muted-foreground">{club.hours}</p>
          </section>
        ) : null}
      </Container>
    </article>
  )
}
