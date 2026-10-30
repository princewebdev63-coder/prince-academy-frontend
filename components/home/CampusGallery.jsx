
import Image from "next/image";

const photos = [
  {
    src: "/images/imgi_12_basketball.jpg",
    alt: "Basketball Championship at Prince Academy",
    ratio: "4 / 3",
  },
  {
    src: "/images/imgi_13_cricket.jpg",
    alt: "Cricket Match & Training",
    ratio: "3 / 2",
  },
  {
    src: "/images/imgi_14_handball.jpg",
    alt: "Handball Tournament at Prince Academy",
    ratio: "4 / 3",
  },
  {
    src: "/images/imgi_15_shooting.jpg",
    alt: "Shooting Range & Sports Facility",
    ratio: "1 / 1",
  },
  {
    src: "/images/imgi_16_kabadi.jpg",
    alt: "Kabaddi Championship & Practice",
    ratio: "3 / 2",
  },
  {
    src: "/images/imgi_17_vollyball.jpg",
    alt: "Volleyball Tournament",
    ratio: "4 / 3",
  },
  {
    src: "/images/sport01.webp",
    alt: "Olympic Standard Sports Grounds",
    ratio: "16 / 10",
  },
  {
    src: "/images/imgi_18_badminton.jpg",
    alt: "Indoor Badminton Arena",
    ratio: "4 / 3",
  },
  {
    src: "/images/imgi_19_wrestling.jpg",
    alt: "Wrestling & Athletic Training",
    ratio: "3 / 2",
  },
  {
    src: "/images/imgi_20_5.jpg",
    alt: "Sports and Fitness Activities",
    ratio: "4 / 3",
  },
  {
    src: "/images/imgi_12_cri1.jpg",
    alt: "Cricket Practice Nets & Coaching",
    ratio: "1 / 1",
  },
  {
    src: "/images/imgi_13_cri2.jpg",
    alt: "Student Sports Team Practice",
    ratio: "3 / 2",
  },
];

// Mobile/tablet: 3 columns, 4 images per column.
const mobileColumns = [
  photos.slice(0, 4),
  photos.slice(4, 8),
  photos.slice(8, 12),
];

// Desktop: 4 columns, 3 images per column.
const desktopColumns = [
  photos.slice(0, 3),
  photos.slice(3, 6),
  photos.slice(6, 9),
  photos.slice(9, 12),
];

function GalleryColumn({ items, direction, duration }) {
  // The second set allows the animation to loop continuously.
  const repeatedItems = [...items, ...items];

  return (
    <div className="min-w-0 overflow-hidden">
      <div
        className={`prince-campus-gallery-track ${
          direction === "down"
            ? "prince-gallery-down"
            : "prince-gallery-up"
        }`}
        style={{ "--gallery-duration": duration }}
      >
        {repeatedItems.map((photo, index) => {
          const isDuplicate = index >= items.length;

          return (
            <figure
              key={`${photo.src}-${index}`}
              aria-hidden={isDuplicate}
              className="relative m-0 w-full shrink-0 overflow-hidden rounded-lg border border-border bg-background sm:rounded-xl"
              style={{ aspectRatio: photo.ratio }}
            >
              <Image
                src={photo.src}
                alt={isDuplicate ? "" : photo.alt}
                fill
                sizes="(max-width: 639px) 32vw, (max-width: 1023px) 32vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default function CampusGallery() {
  return (
    <section
      aria-label="Prince Academy sports gallery"
      className="w-full overflow-hidden bg-gradient-to-b from-[#F2F7FE] via-[#E8F2FC] to-[#F2F7FE] py-3 sm:py-4"
    >
      {/* Mobile and tablet: 3 columns */}
      <div
        className="grid h-[580px] w-full grid-cols-3 gap-2 overflow-hidden px-2 sm:h-[700px] sm:gap-3 sm:px-3 lg:hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      >
        {mobileColumns.map((items, index) => (
          <GalleryColumn
            key={`mobile-${index}`}
            items={items}
            direction={index === 1 ? "down" : "up"}
            duration={index === 1 ? "36s" : index === 0 ? "32s" : "30s"}
          />
        ))}
      </div>

      {/* Desktop: 4 columns */}
      <div
        className="hidden h-[820px] w-full grid-cols-4 gap-4 overflow-hidden px-4 lg:grid"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      >
        {desktopColumns.map((items, index) => (
          <GalleryColumn
            key={`desktop-${index}`}
            items={items}
            direction={index === 1 || index === 3 ? "down" : "up"}
            duration={["30s", "35s", "32s", "37s"][index]}
          />
        ))}
      </div>
    </section>
  );
}
