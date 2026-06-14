const artworkData = [
  {
    id: "the-looming-meal",
    genre: "Painting",
    title: "The Looming Meal",
    medium: "Acrylic paint",
    year: "2023",
    dimensions: '36 x 48 inches',
    course: "Draw/Paint 300 (high school)",
    featured: true,
    image: "assets/artworks/paintings/looming-meal-2023-acrylic-on-canvas.jpeg",
    summary:
      "A multiple self portrait from below, meant to make the viewer feel like the food being eaten at a meal.",
    description:
      "This multiple self portrait is viewed from below and was made to place the viewer in the position of the meal itself. The perspective pushes the composition into something theatrical and slightly uncomfortable, turning the act of eating into the central emotional experience.",
  },
  {
    id: "orange-and-blue-perplexed",
    genre: "Painting",
    title: "Orange and Blue Perplexed",
    medium: "Acrylic paint",
    year: "2023",
    dimensions: "20 x 16 inches",
    featured: false,
    image: "assets/artworks/paintings/blue-and-orange-2023-acrylic-on-canvasboard.png",
    summary:
      "A self portrait from a mirror that explores unnatural color through bright orange hair and blue-toned skin.",
    description:
      "This self portrait was painted from a mirror while exploring unnatural color relationships. The exaggerated orange and blue palette shifts the image away from realism and into a more emotional, perplexed state.",
  },
  {
    id: "garden-puzzle",
    genre: "Painting",
    title: "Garden Puzzle",
    medium: "Acrylic paint, collage (magazine/variety paper), colored pencil",
    year: "Undated",
    dimensions: "22 x 16 inches",
    featured: false,
    image: "assets/artworks/paintings/isabel-collage.jpg",
    summary:
      "A painting of the artist and a friend in a garden, with collaged plants built for richer texture and color.",
    description:
      "This painting shows my friend and me in a garden. I collaged the plants with magazine and other paper so the image would have more variety of color and texture, especially because it was made into a puzzle for my friend's birthday.",
  },
  {
    id: "gentleman-pirate",
    genre: "Painting",
    title: "Gentleman Pirate",
    medium: "Oil paint",
    year: "2022",
    dimensions: "14 x 11 inches",
    course: "Draw/Paint 200 (high school)",
    featured: false,
    image: "assets/artworks/paintings/gentleman-pirate-2022-oil-on-canvas.jpg",
    summary:
      'A self portrait inserted into Andrey Shishkin\'s "Mercenary With a Sword."',
    description:
      'This self portrait places my face into Andrey Shishkin\'s "Mercenary With a Sword." The result lets me play with costume, character, and historical painting language while keeping the piece personal.',
  },
  {
    id: "isabel-of-the-spheres",
    genre: "Painting",
    title: "Isabel of the Spheres",
    medium: "Acrylic paint",
    year: "Undated",
    dimensions: "36 x 24 inches",
    course: "Draw/Paint 300 (high school)",
    featured: false,
    image: "assets/artworks/paintings/img-0375.jpg",
    summary:
      "A portrait of my friend Isabel, presented here with the closest matching archive image currently available.",
    description:
      'This entry is being used for "Isabel of the Spheres" based on the archive images currently available locally. It is a portrait of my friend Isabel and is the closest match I could identify from the source folder while keeping the renamed portfolio consistent.',
    note: "This title was matched to the closest available Isabel portrait in the archive.",
  },
  {
    id: "isabel",
    genre: "Painting",
    title: "Isabel",
    medium: "Oil paint, impasto medium",
    year: "Undated",
    dimensions: "14 x 11 inches",
    featured: false,
    image: "assets/artworks/paintings/impasto-self-portrait.jpg",
    summary:
      "A portrait built with palette-knife impasto everywhere except the background.",
    description:
      "This portrait of my friend Isabel was built with a palette knife for every area except the background. The thick impasto surface makes the face feel immediate and physical, with color and gesture doing as much work as likeness.",
  },
  {
    id: "cinema-of-the-popcorn-fairies",
    genre: "Drawing",
    title: "Cinema of the Popcorn Fairies",
    medium: "Digital art animation",
    year: "2024",
    course: "2-D Design",
    featured: false,
    video: "assets/artworks/paintings/popcorn-fairies-submission-version.mp4",
    externalUrl:
      "https://drive.google.com/file/d/1jSwCtlhaJw9wtrYaIB-qPalQ4hRu8c9O/view?usp=sharing",
    summary:
      "An animation that moves from static to dynamic compositions, inspired by a painting of popcorn fairies erupting from a movie-theater popcorn box.",
    description:
      "This digital animation progresses from static to dynamic compositions within the frame. It was inspired by a painting I made of popcorn fairies bursting out of a popcorn box at the movies, and it is included here with both the uploaded video file and an external watch link.",
    note: "The source archive included the local animation file, and the Google Drive link was provided for viewing.",
  },
  {
    id: "fashion-outfit",
    genre: "Fashion",
    title: "Fashion Outfit",
    medium: "Cotton, denim",
    year: "2025",
    featured: true,
    image: "assets/artworks/fashion/fashion-outfit-front-2025-cotton-denim.png",
    summary:
      "A garment entry with front, back, side, and documentation views from the source archive.",
    description:
      "This garment entry uses the multi-view fashion documentation found in the source folder. The archive included front, back, side, and additional documentation images, so the detail page shows the full set rather than just a single still.",
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
  },
  {
    id: "organs-san-francisco-and-flower-nails",
    genre: "Fashion",
    title: "Organs, San Francisco, and Flower Nails",
    medium: "Acrylic paint, micron pen, clear nail polish, glitter, false nails",
    year: "2024",
    dimensions: "About 0.75 x 0.5 inch (middle column size)",
    featured: false,
    image: "assets/artworks/fashion/anatomy-sf-flower-language-nails-2024.jpeg",
    summary:
      "Wearable false nails built in three themes: organs, San Francisco sites, and flowers with Victorian friendship meanings.",
    description:
      "This piece includes three themed nail sets: body and organ imagery, San Francisco sites, and flowers carrying meanings about friendship in Victorian flower language. The work was made as a birthday gift for a friend who loves elaborate nails, and yes, they are wearable.",
  },
  {
    id: "the-print-studio",
    genre: "Printmaking",
    title: "The Print Studio",
    medium: "Monotype",
    year: "2025",
    dimensions: "About 21 x 30 inches",
    course: "Intro Printmaking",
    featured: true,
    image: "assets/artworks/prints/print-studio-2025-monotype.jpeg",
    summary:
      "A set of monotypes showing the studio space from two opposite perspectives.",
    description:
      "This work is a set of monotypes of the print studio seen from two opposite viewpoints. It was made to capture the shapes, directions, and colorfulness of the space rather than treating the room as a neutral backdrop.",
    supportingImages: [
      {
        src: "assets/artworks/prints/print-studio-both-directions-2025-monotype.jpeg",
        alt: "The Print Studio from the opposite perspective",
      },
    ],
  },
  {
    id: "eli-print",
    genre: "Printmaking",
    title: "Eli Print",
    medium: "Relief print from sintra",
    year: "2025",
    dimensions: "15.5 x 11 inches",
    course: "Intro Printmaking",
    featured: false,
    image: "assets/artworks/prints/eli-1-2025-sintra-carving.jpeg",
    summary:
      "A portrait of my brother stylized like a punk music poster to emphasize his mohawk.",
    description:
      "This relief print is a portrait of my brother Eli. I stylized it to feel like a punk music poster so the image would push the shape, attitude, and graphic energy of his mohawk.",
    supportingImages: [
      {
        src: "assets/artworks/prints/eli-2-2025-sintra-carving.jpeg",
        alt: "Eli Print alternate state 1",
      },
      {
        src: "assets/artworks/prints/eli-3-2025-sintra-carving.jpeg",
        alt: "Eli Print alternate state 2",
      },
    ],
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
    summary:
      "A multi-part print sequence with page views and a ghost print variant from the source archive.",
    description:
      "The local archive included the main Journey to Hades print, two page views, and a ghost print variation. They are grouped here so the detail page can show the full sequence together.",
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
  },
  {
    id: "watching-edition-1",
    genre: "Printmaking",
    title: "Watching edition 1",
    medium: "Etching",
    year: "2025",
    featured: false,
    image: "assets/artworks/prints/watching-edition-1-2025-etching.jpeg",
    summary: "An etching from the archive paired with its second edition state.",
    description:
      "This etching is shown together with a second edition image from the archive so the detail page can hold both related states in one place.",
    supportingImages: [
      {
        src: "assets/artworks/prints/watching-edition-2-2025-etching.jpeg",
        alt: "Watching edition 2",
      },
    ],
  },
  {
    id: "cafeteria-12am",
    genre: "Printmaking",
    title: "Cafeteria 12am",
    medium: "Monotype",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/cafeteria-12am-2026-monotype.jpeg",
    summary: "A monotype carried over directly from the archive.",
  },
  {
    id: "dreidel",
    genre: "Printmaking",
    title: "Dreidel",
    medium: "Monotype",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/dreidel-2026-monotype.jpeg",
    summary: "A monotype carried over directly from the archive.",
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
    summary: "A digital zine image carried over directly from the archive.",
  },
  {
    id: "luminescence-monotypes",
    genre: "Printmaking",
    title: "Luminescence Monotypes",
    medium: "Monotype",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/luminescence-monotypes-2026-monotype.jpeg",
    summary: "A monotype carried over directly from the archive.",
  },
  {
    id: "movement",
    genre: "Printmaking",
    title: "Movement",
    medium: "Monotype",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/movement-2026-monotype.jpeg",
    summary: "A monotype carried over directly from the archive.",
  },
  {
    id: "smores",
    genre: "Printmaking",
    title: "S'mores",
    medium: "Monotype",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/smores-2026-monotype.jpeg",
    summary: "A monotype carried over directly from the archive.",
  },
  {
    id: "studio-chaos-progression",
    genre: "Printmaking",
    title: "Studio Chaos Progression",
    medium: "Etching",
    year: "2026",
    featured: false,
    image: "assets/artworks/prints/studio-chaos-progression-2026-etching.jpeg",
    summary: "An etching carried over directly from the archive.",
  },
  {
    id: "zoe-albukerk-monotype-02",
    genre: "Printmaking",
    title: "Zoe Albukerk Monotype 02",
    medium: "Monotype",
    year: "Undated",
    featured: false,
    image: "assets/artworks/prints/zoe-albukerk-monotype-02.jpeg",
    summary: "A monotype carried over directly from the archive.",
  },
];

const genreDescriptions = {
  Painting:
    "Paintings updated with your preferred titles, dimensions, materials, and project descriptions where matches were clear.",
  Drawing:
    "This section currently holds the digital animation piece because no separate drawing image folder was present in the local archive.",
  Fashion:
    "Fashion and wearable design work from the archive, including garment views and the full nail series.",
  Printmaking:
    "Printmaking work from the archive, including the renamed featured pieces and grouped multi-state print sets.",
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

function createVideoFrame(src, className = "art-image-frame", detail = false) {
  const controls = detail ? "controls" : "";
  const autoplay = detail ? "" : "muted loop autoplay playsinline";
  return `
    <div class="${className}">
      <video src="${src}" ${controls} ${autoplay} preload="metadata"></video>
    </div>
  `;
}

function createPrimaryMedia(piece, className, eager = false, detail = false) {
  if (piece.image) {
    return createImageFrame(piece.image, `${piece.title} by Zoe`, className, eager);
  }
  if (piece.video) {
    return createVideoFrame(piece.video, className, detail);
  }
  return createPlaceholder(piece.title, "placeholder-landscape");
}

function defaultSummary(piece) {
  const bits = [piece.dimensions, piece.medium, piece.course].filter(Boolean);
  return bits.join(" | ");
}

function buildDescription(piece) {
  if (piece.description) return piece.description;

  const views = piece.supportingImages?.length
    ? `This artwork entry includes ${piece.supportingImages.length + 1} uploaded views so the detail page can show related angles or print states together.`
    : "This artwork entry currently uses the single uploaded image that was available in the source folder.";

  return `${piece.title} is presented here as part of Zoe's ${piece.genre.toLowerCase()} archive. ${views}`;
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
        ${createPrimaryMedia(piece, "art-image-frame", eager, false)}
        <h4>${piece.title}</h4>
        <p>${piece.summary || defaultSummary(piece)}</p>
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

  const watchMarkup = piece.externalUrl
    ? `<a class="button" href="${piece.externalUrl}" target="_blank" rel="noreferrer">Watch Animation</a>`
    : `<a class="button" href="portfolio.html">Back to Portfolio</a>`;

  container.innerHTML = `
    <section class="artwork-layout">
      <div class="artwork-gallery">
        <div class="artwork-main-image">
          ${createPrimaryMedia(piece, "art-image-frame artwork-main-frame", true, true)}
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
          ${piece.dimensions ? `<span class="meta-chip">${piece.dimensions}</span>` : ""}
          ${piece.course ? `<span class="meta-chip">${piece.course}</span>` : ""}
          ${piece.featured ? '<span class="meta-chip">Featured on home</span>' : ""}
        </div>
        ${piece.note ? `<p class="artwork-note">${piece.note}</p>` : ""}
        ${watchMarkup}
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
