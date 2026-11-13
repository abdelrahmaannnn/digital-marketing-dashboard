// Single source of truth for the page grid (1280 x 720). Visual positions in Power BI use the same numbers.
window.LAYOUT = {
  page: { w: 1280, h: 720 },
  sidebar: { x: 0, y: 0, w: 196, h: 720 },
  header: { x: 212, y: 16, w: 1052, h: 56 },
  kpis: [
    { key: 'revenue',     label: 'Total Revenue',  color: '#22D3EE', x: 212,  y: 88, w: 165, h: 96 },
    { key: 'spend',       label: 'Total Spend',    color: '#A78BFA', x: 389,  y: 88, w: 165, h: 96 },
    { key: 'profit',      label: 'Profit',         color: '#34D399', x: 566,  y: 88, w: 165, h: 96 },
    { key: 'roas',        label: 'ROAS',           color: '#F59E0B', x: 743,  y: 88, w: 165, h: 96 },
    { key: 'conversions', label: 'Conversions',    color: '#F472B6', x: 920,  y: 88, w: 165, h: 96 },
    { key: 'ctr',         label: 'CTR',            color: '#60A5FA', x: 1097, y: 88, w: 165, h: 96 }
  ],
  panels: [
    { key: 'trend',    icon: 'trend',    title: 'Revenue vs Spend Trend',  x: 212, y: 200, w: 614, h: 252 },
    { key: 'platform', icon: 'platform', title: 'Revenue & ROAS by Platform', x: 838, y: 200, w: 424, h: 252 },
    { key: 'country',  icon: 'globe',    title: 'Revenue by Country',      x: 212, y: 464, w: 402, h: 240 },
    { key: 'funnel',   icon: 'funnel',   title: 'Funnel Stages',           x: 626, y: 464, w: 292, h: 240 },
    { key: 'spendshare', icon: 'spend',  title: 'Spend Share by Platform', x: 930, y: 464, w: 332, h: 240 }
  ],
  slicers: [
    { key: 'year',      icon: 'calendar', label: 'Year',         x: 16, y: 148, w: 164, h: 40 },
    { key: 'platform',  icon: 'platform', label: 'Platform',     x: 16, y: 232, w: 164, h: 40 },
    { key: 'country',   icon: 'globe',    label: 'Country',      x: 16, y: 316, w: 164, h: 40 },
    { key: 'funnel',    icon: 'funnel',   label: 'Funnel Stage', x: 16, y: 400, w: 164, h: 40 },
    { key: 'objective', icon: 'roas',     label: 'Objective',    x: 16, y: 484, w: 164, h: 40 }
  ]
};
