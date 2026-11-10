export type Enquiry = { name: string; phone: string; city: string; message: string };
export type EnquiryErrors = Partial<Record<keyof Enquiry, true>>;

/** Turns Arabic-Indic (٠١٢) and Persian (۰۱۲) digits into 0-9, so people can type numbers in their own keyboard. */
export function normalizeDigits(value: string) {
  return value
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0));
}

export function enquiryErrors(values: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const phone = normalizeDigits(values.phone).trim();
  const digits = phone.replace(/\D/g, "");
  if (values.name.trim().length < 2) errors.name = true;
  if (!/^[+\d\s()-]+$/.test(phone) || digits.length < 7 || digits.length > 15) errors.phone = true;
  if (values.city.trim().length < 2) errors.city = true;
  if (values.message.trim().length < 10) errors.message = true;
  return errors;
}

export function validEnquiry(values: Enquiry) {
  return Object.keys(enquiryErrors(values)).length === 0;
}
