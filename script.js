const artworkData = [
  {
    id: "looming-meal",
    genre: "Painting",
    title: "Looming Meal",
    medium: "Acrylic on canvas",
    year: "2023",
    featured: true,
    image: "assets/artworks/paintings/looming-meal-2023-acrylic-on-canvas.jpeg",
    note: "Marked as featured in the source archive folder.",
  },
  {
    id: "blue-and-orange",
    genre: "Painting",
    title: "Blue and Orange",
    medium: "Acrylic on canvasboard",
    year: "2023",
    featured: false,
    image: "assets/artworks/paintings/blue-and-orange-2023-acrylic-on-canvasboard.png",
  },
  {
    id: "cannibalism-still-life",
    genre: "Painting",
    title: "Cannibalism Still Life (unfinished)",
    medium: "Oil on canvas",
    year: "2026",
    featured: false,
    image:
      "assets/artworks/paintings/cannibalism-still-life-unfinished-2026-oil-on-canvas.jpeg",
  },
  {
    id: "color-still-life",
    genre: "Painting",
    title: "Color Still Life",
    medium: "Oil on canvas",
    year: "2026",
    featured: false,
    image: "assets/artworks/paintings/color-still-life-2026-oil-on-canvas.jpeg",
  },
  {
    id: "gentleman-pirate",
    genre: "Painting",
    title: "Gentleman Pirate",
    medium: "Oil on canvas",
    year: "2022",
    featured: false,
    image: "assets/artworks/paintings/gentleman-pirate-2022-oil-on-canvas.jpg",
  },
  {
    id: "girls-best-friend",
    genre: "Painting",
    title: "Girl's Best Friend",
    medium: "Oil on canvas",
    year: "2026",
    featured: false,
    image: "assets/artworks/paintings/girls-best-friend-2026-oil-on-canvas.jpeg",
  },
  {
    id: "graffiti-beach",
    genre: "Painting",
    title: "Graffiti Beach",
    medium: "Acrylic on canvas",
    year: "2021",
    featured: false,
    image: "assets/artworks/paintings/graffiti-beach-2021-acrylic-on-canvas.jpg",
  },
  {
    id: "impossible-paths",
    genre: "Painting",
    title: "Impossible Paths",
    medium: "Acrylic on canvas",
    year: "2023",
    featured: false,
    image: "assets/artworks/paintings/impossible-paths-2023-acrylic-on-canvas.jpg",
  },
  {
    id: "keaton-mural",
    genre: "Painting",
    title: "Keaton Mural",
    medium: "Acrylic house paint on plywood",
    year: "2023",
    featured: false,
    image:
      "assets/artworks/paintings/keaton-mural-2023-acrylic-house-paint-on-plywood.png",
  },
  {
    id: "mastercopy-self-portrait",
    genre: "Painting",
    title: 'Mastercopy "Self-Portrait" William Orpen (unfinished)',
    medium: "Oil on canvas",
    year: "2026",
    featured: false,
    image:
      "assets/artworks/paintings/mastercopy-self-portrait-william-orpen-unfinished-2026-oil-on-canvas.jpeg",
  },
  {
    id: "albukerk-painting-6",
    genre: "Painting",
    title: "Albukerk Painting 6",
    medium: "Medium not listed in source file",
    year: "Undated",
    featured: false,
    image: "assets/artworks/paintings/albukerk-painting-6.jpg",
  },
  {
    id: "impasto-self-portrait",
    genre: "Painting",
    title: "Impasto Self Portrait",
    medium: "Medium not listed in source file",
    year: "Undated",
    featured: false,
    image: "assets/artworks/paintings/impasto-self-portrait.jpg",
  },
  {
    id: "isabel-collage",
    genre: "Painting",
    title: "Isabel Collage",
    medium: "Collage",
    year: "Undated",
    featured: false,
    image: "assets/artworks/paintings/isabel-collage.jpg",
  },
  {
    id: "fashion-outfit",
    genre: "Fashion",
    title: "Fashion Outfit",
    medium: "Cotton, denim",
    year: "2025",
    featured: true,
    image: "assets/artworks/fashion/fashion-outfit-front-2025-cotton-denim.png",
    supportingImages: [
      {
        src: "assets/artworks/fashion/fashion-outfit-back-2025-cotton-denim.png",
        alt: "Fashion Outfit back view",
      },
      {
        src: "assets/artworks/fashion/fashion-outfit-side-2025-cotton-denim.png",
        alt: "Fashion Outfit side view",
      },
      {
        src: "assets/artworks/fashion/fashion-final-outfit-large.jpeg",
        alt: "Fashion Outfit full view",
      },
      {
        src: "assets/artworks/fashion/washu-15018.jpg",
        alt: "Fashion Outfit documentation image 1",
      },
      {
        src: "assets/artworks/fashion/washu-15032.jpg",
        alt: "Fashion Outfit documentation image 2",
      },
      {
        src: "assets/artworks/fashion/washu-15038.jpg",
        alt: "Fashion Outfit documentation image 3",
      },
    ],
    note: "The source folder included front, back, side, and documentation views for this garment.",
  },
  {
    id: "flower-language-nails",
    genre: "Fashion",
    title: "Anatomy: SF: Flower Language Nails",
    medium: "Acrylic, micron pen, glitter, nail polish",
    year: "2024",
    featured: false,
    image: "assets/artworks/fashion/anatomy-sf-flower-language-nails-2024.jpeg",
  },
  {
    id: "print-studio",
    genre: "Printmaking",
    title: "Print Studio",
    medium: "Monotype",
    year: "2025",
    featured: true,
    image: "assets/artworks/prints/print-studio-2025-monotype.jpeg",
    supportingImages: [
      {
        src: "assets/artworks/prints/print-studio-both-directions-2025-monotype.jpeg",
        alt: "Print Studio alternate direction",
      },
    ],
    note: "Marked as featured in the source archive folder.",
  },
  {
    id: "cafeteria-12am",
    genre: "Printmaking",
    title: "Cafeteria 12am",
    medium: "Monotype",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/cafeteria-12am-2026-monotype.jpeg",
  },
  {
    id: "dreidel",
    genre: "Printmaking",
    title: "Dreidel",
    medium: "Monotype",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/dreidel-2026-monotype.jpeg",
  },
  {
    id: "eli-1",
    genre: "Printmaking",
    title: "Eli 1",
    medium: "Sintra carving",
    year: "2025",
    featured: false,
    image: "assets/artworks/prints/eli-1-2025-sintra-carving.jpeg",
  },
  {
    id: "eli-2",
    genre: "Printmaking",
    title: "Eli 2",
    medium: "Sintra carving",
    year: "2025",
    featured: false,
    image: "assets/artworks/prints/eli-2-2025-sintra-carving.jpeg",
  },
  {
    id: "eli-3",
    genre: "Printmaking",
    title: "Eli 3",
    medium: "Sintra carving",
    year: "2025",
    featured: false,
    image: "assets/artworks/prints/eli-3-2025-sintra-carving.jpeg",
  },
  {
    id: "incarcerated-pregnanacy-zine",
    genre: "Printmaking",
    title: "Incarcerated Pregnanacy Zine",
    medium: "Procreate",
    year: "2025",
    featured: false,
    image:
      "assets/artworks/prints/incarcerated-pregnanacy-zine-2025-procreate.png",
  },
  {
    id: "journey-to-hades",
    genre: "Printmaking",
    title: "Journey to Hades",
    medium: "Monotype, sintra carving",
    year: "2026",
    featured: false,
    image:
      "assets/artworks/prints/journey-to-hades-2026-monotype-sintra-carving.jpeg",
    supportingImages: [
      {
        src: "assets/artworks/prints/journey-to-hades-pg-1-2026-monotype-sintra-carving.jpeg",
        alt: "Journey to Hades page 1",
      },
      {
        src: "assets/artworks/prints/journey-to-hades-pg-2-2026-monotype-sintra-carving.jpeg",
        alt: "Journey to Hades page 2",
      },
      {
        src: "assets/artworks/prints/journey-to-hades-ghost-2026-monotype-ghost.jpeg",
        alt: "Journey to Hades ghost print",
      },
    ],
    note: "The source folder included the main work, two page views, and a ghost print variant.",
  },
  {
    id: "luminescence-monotypes",
    genre: "Printmaking",
    title: "Luminescence Monotypes",
    medium: "Monotype",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/luminescence-monotypes-2026-monotype.jpeg",
  },
  {
    id: "movement",
    genre: "Printmaking",
    title: "Movement",
    medium: "Monotype",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/movement-2026-monotype.jpeg",
  },
  {
    id: "smores",
    genre: "Printmaking",
    title: "S'mores",
    medium: "Monotype",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/smores-2026-monotype.jpeg",
  },
  {
    id: "studio-chaos-progression",
    genre: "Printmaking",
    title: "Studio Chaos Progression",
    medium: "Etching",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/studio-chaos-progression-2026-etching.jpeg",
  },
  {
    id: "watching-edition-1",
    genre: "Printmaking",
    title: "Watching edition 1",
    medium: "Etching",
    year: "2025",
    featured: false,
    image: "assets/artworks/prints/watching-edition-1-2025-etching.jpeg",
    supportingImages: [
      {
        src: "assets/artworks/prints/watching-edition-2-2025-etching.jpeg",
        alt: "Watching edition 2",
      },
    ],
  },
  {
    id: "zoe-albukerk-monotype-02",
    genre: "Printmaking",
    title: "Zoe Albukerk Monotype 02",
    medium: "Monotype",
    year: "Undated",
    featured: false,
    image: "assets/artworks/prints/zoe-albukerk-monotype-02.jpeg",
  },
  {
    id: "zoe-albukerk-relief-04",
    genre: "Printmaking",
    title: "Zoe Albukerk Relief 04",
    medium: "Relief print",
    year: "Undated",
    featured: false,
    image: "assets/artworks/prints/zoe-albukerk-relief-04.jpeg",
  },
];

const genreDescriptions = {
  Painting:
    "Paintings pulled directly from Zoe's source archive, including acrylic, oil, mural work, and collage.",
  Drawing:
    "No drawing files were present in the source folder, so this section is waiting on uploads.",
  Fashion:
    "Fashion work from the archive, including garment views and material-based experimental pieces.",
  Printmaking:
    "Prints from the archive spanning monotype, etching, relief, digital zine work, and carving-based processes.",
};

const genres = ["Painting", "Drawing", "Fashion", "Printmaking"];

function createPlaceholder(label, variant = "placeholder-landscape") {
  return `
    <div class="placeholder ${variant}">
      <span>${label}</span>
    </div>
  `;
}

function createImageFrame(src, alt, className = "art-image-frame", eager = false) {
  const loading = eager ? "eager" : "lazy";
  return `
    <div class="${className}">
      <img src="${src}" alt="${alt}" loading="${loading}" />
    </div>
  `;
}

function buildSummary(piece) {
  const yearText = piece.year === "Undated" ? "Undated" : piece.year;
  const featuredText = piece.featured
    ? "Prioritized for the landing page from the source archive."
    : "Added directly from the source archive.";
  return `${yearText} ${piece.medium}. ${featuredText}`;
}

function buildDescription(piece) {
  const views = piece.supportingImages?.length
    ? `This artwork entry includes ${piece.supportingImages.length + 1} uploaded views so the detail page can show the piece from multiple angles or related print states.`
    : "This artwork entry currently uses the single uploaded image that was available in the source folder.";

  const note = piece.note
    ? ` ${piece.note}`
    : " The title, medium, and year were taken from the source filename where that information was available.";

  return `${piece.title} is presented here as part of Zoe's ${piece.genre.toLowerCase()} archive. ${views}${note}`;
}

function sortPieces(pieces) {
  return [...pieces].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.year !== b.year) return String(b.year).localeCompare(String(a.year));
    return a.title.localeCompare(b.title);
  });
}

function getHomepagePieces(genre) {
  const pieces = sortPieces(artworkData.filter((piece) => piece.genre === genre));
  const featured = pieces.filter((piece) => piece.featured);
  const fallbacks = pieces.filter((piece) => !piece.featured);
  return [...featured, ...fallbacks].slice(0, 2);
}

function createArtworkCard(piece, eager = false) {
  return `
    <a class="art-link" href="artwork.html?id=${piece.id}">
      <article class="art-card">
        ${createImageFrame(piece.image, `${piece.title} by Zoe`, "art-image-frame", eager)}
        <h4>${piece.title}</h4>
        <p>${buildSummary(piece)}</p>
        <div class="art-meta">
          <span class="meta-chip">${piece.genre}</span>
          <span class="meta-chip">${piece.medium}</span>
          <span class="meta-chip">${piece.year}</span>
        </div>
      </article>
    </a>
  `;
}

function renderEmptyGenreSection(title, description, message) {
  return `
    <section class="genre-section">
      <div class="genre-header">
        <div>
          <p class="eyebrow">Genre</p>
          <h3>${title}</h3>
        </div>
        <p class="genre-intro">${description}</p>
      </div>
      <div class="empty-genre-note">
        ${createPlaceholder(`${title} Uploads Pending`, "placeholder-landscape")}
        <p>${message}</p>
      </div>
    </section>
  `;
}

function renderGenreSection(title, description, pieces, gridClass = "", eager = false) {
  if (!pieces.length) {
    return renderEmptyGenreSection(
      title,
      description,
      `${title} files were not present in the source folder yet, so this section is waiting for image uploads.`
    );
  }

  return `
    <section class="genre-section">
      <div class="genre-header">
        <div>
          <p class="eyebrow">Genre</p>
          <h3>${title}</h3>
        </div>
        <p class="genre-intro">${description}</p>
      </div>
      <div class="art-grid ${gridClass}">
        ${pieces.map((piece, index) => createArtworkCard(piece, eager && index < 2)).join("")}
      </div>
    </section>
  `;
}

function renderHomePage() {
  const container = document.getElementById("home-featured-sections");
  if (!container) return;

  container.innerHTML = genres
    .map((genre) =>
      renderGenreSection(genre, genreDescriptions[genre], getHomepagePieces(genre), "", true)
    )
    .join("");
}

function renderPortfolioPage() {
  const container = document.getElementById("portfolio-sections");
  if (!container) return;

  container.innerHTML = genres
    .map((genre) => {
      const pieces = sortPieces(artworkData.filter((piece) => piece.genre === genre));
      return renderGenreSection(
        genre,
        genreDescriptions[genre],
        pieces,
        "portfolio-grid"
      );
    })
    .join("");
}

function renderArtworkDetailPage() {
  const container = document.getElementById("artwork-detail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const pieceId = params.get("id");
  const piece = artworkData.find((item) => item.id === pieceId);

  if (!piece) {
    container.innerHTML = `
      <section class="artwork-empty">
        <p class="eyebrow">Artwork Not Found</p>
        <h1>That piece could not be found.</h1>
        <p>
          The link may be incomplete or the artwork may have been moved. You can
          return to the portfolio and continue browsing from there.
        </p>
        <a class="button" href="portfolio.html">Back to Portfolio</a>
      </section>
    `;
    document.title = "Zoe's Art Portfolio | Artwork Not Found";
    return;
  }

  document.title = `Zoe's Art Portfolio | ${piece.title}`;

  const supportingMarkup = piece.supportingImages?.length
    ? `
      <div class="artwork-thumbs">
        ${piece.supportingImages
          .map((image) =>
            createImageFrame(image.src, image.alt, "art-image-frame art-thumb-frame")
          )
          .join("")}
      </div>
    `
    : "";

  container.innerHTML = `
    <section class="artwork-layout">
      <div class="artwork-gallery">
        <div class="artwork-main-image">
          ${createImageFrame(piece.image, `${piece.title} by Zoe`, "art-image-frame artwork-main-frame", true)}
        </div>
        ${supportingMarkup}
      </div>
      <div class="artwork-copy">
        <p class="eyebrow">${piece.genre}</p>
        <h1>${piece.title}</h1>
        <p>${buildDescription(piece)}</p>
        <div class="art-meta">
          <span class="meta-chip">${piece.medium}</span>
          <span class="meta-chip">${piece.year}</span>
          ${piece.featured ? '<span class="meta-chip">Featured on home</span>' : ""}
        </div>
        <a class="button" href="portfolio.html">Back to Portfolio</a>
      </div>
    </section>
  `;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:zalbukerk@gmail.com?subject=${subject}&body=${body}`;
  });
}

function initPage() {
  renderHomePage();
  renderPortfolioPage();
  renderArtworkDetailPage();
  initContactForm();
}

document.addEventListener("DOMContentLoaded", initPage);
