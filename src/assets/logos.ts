// Logo files for TPK and IASMA
// Place your logo files in: public/assets/logos/
// - logo-iasma-1.png (or .jpg, .svg) - Logo dengan "IASMA 1 LANDBOUW" dan "BUKITTINGGI"
// - logo-ytpk.png (or .jpg, .svg) - Logo circular dengan "YAYASAN TIM PEDULI KEMANUSIAAN"

// Import logo files (fallback to placeholder if files don't exist)
// Logo 1: IASMA 1 LANDBOUW BUKITTINGGI (dengan graphic biru dan green arcs)
export const logoIASMA = "/assets/logos/logo-iasma-1.png";

// Logo 2: YAYASAN TIM PEDULI KEMANUSIAAN (circular dengan border biru)
export const logoTPK = "/assets/logos/logo-ytpk.png";

// Fallback placeholders (akan digunakan jika file logo tidak ditemukan)
const placeholderTPK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%230F766E'/%3E%3Ctext x='50' y='50' font-family='Arial, sans-serif' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETPK%3C/text%3E%3C/svg%3E";

const placeholderIASMA = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='8' fill='%230F766E'/%3E%3Ctext x='50' y='40' font-family='Arial, sans-serif' font-size='20' font-weight='bold' fill='%23FACC15' text-anchor='middle'%3EIASMA%3C/text%3E%3Ctext x='50' y='70' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle'%3ELandbouw%3C/text%3E%3C/svg%3E";

// Helper function to handle image errors and fallback to placeholder
export const getLogoWithFallback = (logoPath: string, placeholder: string) => {
  return logoPath;
};
