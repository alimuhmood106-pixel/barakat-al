import { describe, expect, it } from "vitest";
import { PHONE, PHONE_HREF, CONTACT } from "@/components/site/content";
import { validEnquiry, enquiryErrors } from "@/components/site/enquiry";
describe("Company contact rules", () => {
  it("uses the supplied phone and WhatsApp number", () => {
    expect(PHONE).toBe("0750 444 1747");
    expect(PHONE_HREF).toBe("tel:+9647504441747");
    expect(CONTACT.whatsapp).toBe("https://wa.me/9647504441747");
  });
  it("uses the supplied office coordinates", () => {
    expect(CONTACT.map).toBe("https://www.google.com/maps?q=36.192081,43.960754");
  });
  it("requires a name, phone, city and meaningful message", () => {
    const input = { name: "Ali", phone: "0750 444 1747", city: "Erbil", message: "We need a new villa." };
    expect(validEnquiry(input)).toBe(true);
    for (const field of ["name", "phone", "city", "message"] as const) expect(validEnquiry({ ...input, [field]: "" })).toBe(false);
    expect(validEnquiry({ ...input, phone: "invalid number" })).toBe(false);
  });
  it("accepts Arabic-Indic digits in the phone number", () => {
    expect(validEnquiry({ name: "Ali", phone: "٠٧٥٠ ٤٤٤ ١٧٤٧", city: "Erbil", message: "We need a new villa." })).toBe(true);
  });
  it("reports which fields are wrong", () => {
    expect(enquiryErrors({ name: "", phone: "1", city: "Erbil", message: "short" })).toEqual({ name: true, phone: true, message: true });
  });
});