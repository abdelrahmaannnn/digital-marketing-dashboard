// Shared icon set (24x24 viewBox, stroke icons). Used by background.html and icons.html.
window.ICONS = {
  revenue: '<circle cx="12" cy="12" r="9"/><path d="M15 8.5c-.6-1-1.8-1.5-3-1.5-1.7 0-3 .9-3 2.3 0 3.2 6 1.7 6 5 0 1.4-1.3 2.4-3 2.4-1.3 0-2.6-.6-3.2-1.6"/><path d="M12 5v2M12 17v2"/>',
  spend: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M7 15h3"/>',
  profit: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  roas: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
  conversions: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16.5 9"/>',
  ctr: '<path d="M9 9l11 4-4.5 1.5L14 19z"/><path d="M5 3v3M3 5h3M9 4.5l-1.2 1.2M4.5 9l1.2-1.2"/>',
  trend: '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-6"/>',
  platform: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
  funnel: '<path d="M3 4h18l-7 8.5V19l-4 2v-8.5z"/>',
  campaign: '<path d="M3 10v4a1 1 0 0 0 1 1h3l6 4V5L7 9H4a1 1 0 0 0-1 1z"/><path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  logo: '<path d="M4 18V9M10 18V5M16 18v-6M22 18H2"/>'
};
window.icon = (name, size, color, sw) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${sw || 2}" stroke-linecap="round" stroke-linejoin="round" style="color:${color}">${window.ICONS[name]}</svg>`;
