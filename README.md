# Site MJSC Judo Manosque — Cloudflare Pages

## Déploiement rapide
1. Mets le dossier sur GitHub.
2. Va dans Cloudflare > Workers & Pages > Create application > Pages.
3. Choisis ton dépôt GitHub.
4. Build command : laisse vide.
5. Output directory : `/`.
6. Deploy.

Cloudflare Pages peut déployer un site statique HTML/CSS/JS sans framework.

## À modifier
Tout se règle dans `config.js` :
- email, téléphone, adresse
- lien Google Maps
- lien Google Calendar intégré
- lien Google Forms intégré
- lien dossier Google Drive
- Facebook, Instagram, YouTube

## Google Forms vers Drive
Dans Google Forms : Réponses > icône Google Sheets. Les réponses seront stockées dans un fichier Sheets sur Google Drive.

## Google Calendar
Rends le calendrier public ou partageable, puis récupère le code d'intégration iframe dans les paramètres du calendrier.
