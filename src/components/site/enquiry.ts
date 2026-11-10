export function validEnquiry(values: { name: string; phone: string; city: string; message: string }) {
  return values.name.trim().length >= 2 && /^[+\d\s()-]+$/.test(values.phone) && values.phone.replace(/\D/g, "").length >= 7 && values.phone.replace(/\D/g, "").length <= 15 && values.city.trim().length >= 2 && values.message.trim().length >= 10;
}