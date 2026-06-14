const cfg = window.MJSC_CONFIG || {};
const $ = (id) => document.getElementById(id);

$("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");
navToggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

function safeSetLink(id, href, text){
  const el = $(id); if(!el || !href) return;
  el.href = href; if(text) el.textContent = text;
}

$("clubAddress").textContent = cfg.address || "Dojo à Manosque";
safeSetLink("clubEmail", `mailto:${cfg.email}`, cfg.email);
safeSetLink("clubPhone", `tel:${cfg.phone}`, cfg.phone?.replace("+33", "0"));
safeSetLink("mapsLink", cfg.googleMapsUrl);
safeSetLink("driveFolderLink", cfg.googleDriveFolderUrl);
safeSetLink("facebookLink", cfg.facebookUrl);
safeSetLink("instagramLink", cfg.instagramUrl);

$("calendarEmbed").innerHTML = `<iframe title="Calendrier du club" loading="lazy" src="${cfg.googleCalendarEmbedUrl}"></iframe>`;
$("formEmbed").innerHTML = cfg.googleFormEmbedUrl?.includes("TON_ID_FORMULAIRE")
  ? `<div class="placeholder"><h3>Formulaire à connecter</h3><p>Va dans Google Forms → Envoyer → Intégrer → copie le lien iframe, puis colle l'URL dans <strong>config.js</strong>.</p></div>`
  : `<iframe title="Formulaire d'inscription" loading="lazy" src="${cfg.googleFormEmbedUrl}"></iframe>`;
$("youtubeEmbed").innerHTML = `<iframe title="Vidéo YouTube du club" loading="lazy" allowfullscreen src="https://www.youtube.com/embed/${cfg.youtubeVideoId}?rel=0"></iframe>`;
