const artworkData = [
  {
    id: "ember-harbor",
    genre: "Painting",
    title: "Ember Harbor",
    medium: "Acrylic on canvas",
    year: "2025",
    dimensions: "90 x 120 cm",
    featured: true,
    summary:
      "A warm coastal painting built with layered orange, rust, and smoke-blue tones to capture the last light before evening.",
    description:
      "Ember Harbor explores the feeling of a shoreline shifting from movement into stillness. Zoe built the surface in transparent acrylic layers so earlier marks remain visible underneath the final glow, creating a sense of memory sitting just below the present moment. The composition balances broad atmospheric fields with smaller passages of detail that suggest distant boats, structures, and reflections.",
    supportingImages: ["Texture Study", "Detail Crop", "Studio View"],
  },
  {
    id: "quiet-bloom",
    genre: "Painting",
    title: "Quiet Bloom",
    medium: "Oil and cold wax",
    year: "2024",
    dimensions: "76 x 101 cm",
    featured: true,
    summary:
      "A floral-inspired abstract painting where soft pinks and earth tones open gradually across a textured surface.",
    description:
      "Quiet Bloom began as a study in restraint, using a reduced palette and repeated scraping to let the painting unfold slowly. The work brings together softness and structure, with clustered gestures that suggest petals, shadows, and folded fabric without resolving into a fixed image. Zoe was interested in how atmosphere could be carried through surface alone.",
    supportingImages: ["Edge Detail", "Surface Texture", "Hanging View"],
  },
  {
    id: "stone-window",
    genre: "Painting",
    title: "Stone Window",
    medium: "Mixed media on board",
    year: "2023",
    dimensions: "60 x 80 cm",
    featured: false,
    summary:
      "Muted grays and pale ochres shape a painting about still architecture and interior light.",
    description:
      "Stone Window focuses on quiet geometry and the emotional weight of interior space. Zoe combined paint, graphite, and matte medium to create a layered surface that feels architectural but still handmade. The piece reflects an interest in how enclosed spaces can hold calm, pause, and reflection.",
    supportingImages: ["Frame Mockup", "Corner Detail", "Underpainting"],
  },
  {
    id: "threaded-light",
    genre: "Drawing",
    title: "Threaded Light",
    medium: "Graphite and charcoal",
    year: "2025",
    dimensions: "50 x 70 cm",
    featured: true,
    summary:
      "A tonal drawing of intertwined forms that uses sharp highlights to pull light through the page.",
    description:
      "Threaded Light studies tension and softness at the same time. Zoe used compressed charcoal for the deepest passages, then lifted areas back with erasers to carve out brightness and direction. The final result feels both woven and fragile, as if the image is being held together by the smallest luminous threads.",
    supportingImages: ["Process Layer", "Close Marking", "Mounted View"],
  },
  {
    id: "hands-at-rest",
    genre: "Drawing",
    title: "Hands at Rest",
    medium: "Pencil on paper",
    year: "2024",
    dimensions: "42 x 59 cm",
    featured: true,
    summary:
      "A close observational study of folded hands, focused on gesture, patience, and anatomical rhythm.",
    description:
      "Hands at Rest is built from slow observation and repeated line adjustments. Rather than chasing photographic finish, Zoe kept some construction lines visible so the drawing retains a sense of process and decision-making. The piece reflects her interest in how subtle gestures can communicate presence without needing a dramatic setting.",
    supportingImages: ["Line Detail", "Sketchbook Page", "Framed Mockup"],
  },
  {
    id: "midnight-study",
    genre: "Drawing",
    title: "Midnight Study",
    medium: "Ink wash and graphite",
    year: "2023",
    dimensions: "30 x 42 cm",
    featured: false,
    summary:
      "A moody tonal study shaped by dark washes, erased highlights, and atmospheric transitions.",
    description:
      "Midnight Study began as an exercise in value range and gradually turned into a small atmospheric work. Zoe layered diluted ink to establish depth, then returned with graphite to sharpen edges and pull forms forward. The contrast between fluid wash and controlled line is central to the piece.",
    supportingImages: ["Ink Layer", "Paper Texture", "Desk View"],
  },
  {
    id: "runway-echo",
    genre: "Fashion",
    title: "Runway Echo",
    medium: "Fashion illustration and textile notes",
    year: "2025",
    dimensions: "A3 presentation board",
    featured: true,
    summary:
      "A fashion concept pairing elongated silhouette drawing with notes on drape, structure, and movement.",
    description:
      "Runway Echo presents a garment concept inspired by architecture and motion. Zoe combined a stylized fashion figure with fabric annotations and tonal accents to show how the design would shift while worn. The piece functions as both illustration and design communication, balancing mood with clarity.",
    supportingImages: ["Fabric Detail", "Back View", "Color Story"],
  },
  {
    id: "soft-armor",
    genre: "Fashion",
    title: "Soft Armor",
    medium: "Marker, pencil, and collage",
    year: "2024",
    dimensions: "A3 presentation board",
    featured: true,
    summary:
      "A layered fashion board exploring protective shapes through softened tailoring and textured surfaces.",
    description:
      "Soft Armor investigates contrast by placing structured outer forms against fluid inner lines. Zoe used collage fragments and marker rendering to push the feeling of materiality, while keeping the central figure airy and expressive. The project imagines clothing as something both protective and deeply personal.",
    supportingImages: ["Material Swatches", "Silhouette Sheet", "Detail Rendering"],
  },
  {
    id: "city-pleat",
    genre: "Fashion",
    title: "City Pleat",
    medium: "Garment concept sketch",
    year: "2023",
    dimensions: "A4 design sheet",
    featured: false,
    summary:
      "An urban-inspired fashion study using repeated folds and narrow line work to suggest movement.",
    description:
      "City Pleat was developed through repeated line studies that focused on rhythm and repeated structure. Zoe was interested in how a pleated garment could echo vertical city forms while still moving fluidly with the body. The final board includes notes that connect silhouette, textile choice, and wearability.",
    supportingImages: ["Construction Notes", "Pleat Detail", "Palette Test"],
  },
  {
    id: "pressed-memory",
    genre: "Printmaking",
    title: "Pressed Memory",
    medium: "Linocut print",
    year: "2025",
    dimensions: "40 x 50 cm",
    featured: true,
    summary:
      "A bold linocut combining floral fragments and geometric blocks into a print about memory and repetition.",
    description:
      "Pressed Memory uses the directness of linocut to build a composition that feels both graphic and emotional. Zoe leaned into the carved edge and the irregular pressure of hand printing so each area feels alive rather than mechanical. The repeated motifs suggest the way remembered images return in fragments rather than as a complete picture.",
    supportingImages: ["Block Carving", "Ink Rollout", "Edition Layout"],
  },
  {
    id: "ink-garden",
    genre: "Printmaking",
    title: "Ink Garden",
    medium: "Monoprint with chine-colle",
    year: "2024",
    dimensions: "38 x 56 cm",
    featured: true,
    summary:
      "A layered monoprint where plant-like forms move through translucent papers and dark ink fields.",
    description:
      "Ink Garden is one of Zoe's more process-driven print works, built through successive pulls and paper layering. The composition allows chance textures to stay visible, which gives the piece its sense of growth and movement. Small paper additions create shifts in edge, opacity, and tactile depth.",
    supportingImages: ["Layer Detail", "Press Setup", "Paper Sample"],
  },
  {
    id: "signal-repeat",
    genre: "Printmaking",
    title: "Signal Repeat",
    medium: "Screen print",
    year: "2023",
    dimensions: "50 x 70 cm",
    featured: false,
    summary:
      "A screen print built from repeated symbols and offset color layers that create vibration across the page.",
    description:
      "Signal Repeat focuses on rhythm, registration, and controlled variation. Zoe used small alignment shifts intentionally so the stacked color layers create energy instead of perfect flatness. The print connects graphic design thinking with studio experimentation, using repetition as both structure and subject.",
    supportingImages: ["Layer Separation", "Registration Test", "Wall View"],
  },
];

const genreDescriptions = {
  Painting:
    "Paintings that explore mood, surface, and atmosphere through layered color and tactile mark-making.",
  Drawing:
    "Drawings centered on observation, tonal structure, and the expressive potential of line.",
  Fashion:
    "Fashion development pieces that connect silhouette, fabric ideas, and storytelling through design.",
  Printmaking:
    "Prints shaped by repetition, texture, and process, from carved blocks to layered monoprints.",
};

const genres = ["Painting", "Drawing", "Fashion", "Printmaking"];

function createPlaceholder(label, variant = "placeholder-landscape") {
  return `
    <div class="placeholder ${variant}">
      <span>${label}</span>
    </div>
  `;
}

function createArtworkCard(piece) {
  return `
    <a class="art-link" href="artwork.html?id=${piece.id}">
      <article class="art-card">
        ${createPlaceholder(`${piece.title} Placeholder`, "placeholder-landscape")}
        <h4>${piece.title}</h4>
        <p>${piece.summary}</p>
        <div class="art-meta">
          <span class="meta-chip">${piece.genre}</span>
          <span class="meta-chip">${piece.medium}</span>
        </div>
      </article>
    </a>
  `;
}

function renderGenreSection(title, description, pieces, gridClass = "") {
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
        ${pieces.map(createArtworkCard).join("")}
      </div>
    </section>
  `;
}

function renderHomePage() {
  const container = document.getElementById("home-featured-sections");
  if (!container) return;

  container.innerHTML = genres
    .map((genre) => {
      const pieces = artworkData
        .filter((piece) => piece.genre === genre && piece.featured)
        .slice(0, 2);
      return renderGenreSection(genre, genreDescriptions[genre], pieces);
    })
    .join("");
}

function renderPortfolioPage() {
  const container = document.getElementById("portfolio-sections");
  if (!container) return;

  container.innerHTML = genres
    .map((genre) => {
      const pieces = artworkData.filter((piece) => piece.genre === genre);
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

  container.innerHTML = `
    <section class="artwork-layout">
      <div class="artwork-gallery">
        <div class="artwork-main-image">
          ${createPlaceholder(`${piece.title} Large Image`, "placeholder-landscape")}
        </div>
        <div class="artwork-thumbs">
          ${piece.supportingImages
            .map((label) => createPlaceholder(label, "placeholder-square"))
            .join("")}
        </div>
      </div>
      <div class="artwork-copy">
        <p class="eyebrow">${piece.genre}</p>
        <h1>${piece.title}</h1>
        <p>${piece.description}</p>
        <div class="art-meta">
          <span class="meta-chip">${piece.medium}</span>
          <span class="meta-chip">${piece.year}</span>
          <span class="meta-chip">${piece.dimensions}</span>
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
