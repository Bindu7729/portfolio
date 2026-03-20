import { describe, it, expect } from "vitest";
import { buildMailtoUrl, validateContactInput } from "@/components/contactUtils";

describe("Contact Form Validation & URL Builder", () => {
  describe("validateContactInput", () => {
    it("approves valid contact form input", () => {
      const valid = {
        name: "Alice Developer",
        email: "alice@example.com",
        message: "Hello! I saw your portfolio and would love to collaborate.",
      };
      const result = validateContactInput(valid);

      expect(result.valid).toBe(true);
      expect(result.errors).toEqual({});
    });

    it("rejects empty fields with required error messages", () => {
      const empty = { name: "  ", email: "", message: "   " };
      const result = validateContactInput(empty);

      expect(result.valid).toBe(false);
      expect(result.errors.name).toBe("Name is required");
      expect(result.errors.email).toBe("Email is required");
      expect(result.errors.message).toBe("Message is required");
    });

    it("validates email syntax and flags malformed addresses", () => {
      const badEmail = {
        name: "Bob",
        email: "bob-no-at-sign.com",
        message: "Hi there",
      };
      const result = validateContactInput(badEmail);

      expect(result.valid).toBe(false);
      expect(result.errors.email).toBe("Invalid email format");
    });
  });

  describe("buildMailtoUrl", () => {
    it("constructs properly encoded mailto links with subject and message body", () => {
      const input = {
        name: "Charlie",
        email: "charlie@company.org",
        message: "Let's connect about an internship opportunity.",
      };
      const url = buildMailtoUrl(input, "pbibinduamb@gmail.com");

      expect(url.startsWith("mailto:pbibinduamb@gmail.com")).toBe(true);
      expect(url).toContain("subject=Portfolio%20contact%20from%20Charlie");
      expect(url).toContain("charlie%40company.org");
    });
  });
});
