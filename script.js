const icons = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
  message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.9 8.9 0 0 1-3.8-.9L3 21l1.7-5A8.6 8.6 0 1 1 21 11.5Z"/><path d="M8.5 9.5c.8 2.3 2.3 3.8 4.7 4.7"/></svg>',
  whatsapp: '<svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" focusable="false"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-221.7 99.6-221.7 222 0 39.1 10.2 77.3 29.6 111L.3 480l117.7-30.9c32.4 17.7 68.9 27 106 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.3-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.8l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.1-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.3-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m14 18-6-6 6-6"/></svg>',
  contact: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="10" cy="10" r="2"/><path d="M7 16c.8-1.5 1.8-2.2 3-2.2s2.2.7 3 2.2M15 8h2M15 12h2"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>'
};

document.querySelectorAll('[data-icon]').forEach((el) => {
  el.innerHTML = icons[el.dataset.icon] || '';
});

window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => document.body.classList.add('loaded'));
});

const contact = {
  firstName: 'Jianna',
  middleName: 'Juam',
  lastName: 'Al Shukaili',
  organization: 'Omani Unified Bureau for the Orange Card S.A.O.C.',
  title: 'General Accountant',
  phone: '+96824788747',
  email: 'jshukaili@orangecard.com.om',
  website: 'https://www.orangecard.com.om',
  address: 'P.O. Box 164, P.C. 122, Ruwi, Muscat, Sultanate of Oman'
};

function downloadVCard() {
  const vCard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${contact.lastName};${contact.firstName};${contact.middleName};;`,
    `FN:${contact.firstName} ${contact.middleName} ${contact.lastName}`,
    `ORG:${contact.organization}`,
    `TITLE:${contact.title}`,
    `TEL;TYPE=CELL,VOICE:${contact.phone}`,
    `EMAIL;TYPE=INTERNET,WORK:${contact.email}`,
    `URL:${contact.website}`,
    `ADR;TYPE=WORK:;;${contact.address};;;;`,
    'NOTE:OUBOC digital business card',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Jianna Al Shukaili.vcf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  const toast = document.getElementById('toast');
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
}

document.getElementById('saveContact').addEventListener('click', downloadVCard);
