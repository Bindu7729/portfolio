import { describe, it, expect } from "vitest";
import { accentOf, splitTitle } from "@/components/projectUtils";
import type { Project } from "@/types";

describe("Project Utilities", () => {
  const createMockProject = (title: string, accentColor?: string): Project => ({
    id: "test-proj",
    title,
    category: "WEB DEVELOPMENT",
    accentColor,
    description: "Sample description",
    technologies: ["React", "TypeScript"],
    features: ["Feature 1", "Feature 2"],
  });

  describe("splitTitle", () => {
    it("splits project titles formatted with en-dash delimiter", () => {
      const p = createMockProject("Ghostline – Secure Communication");
      expect(splitTitle(p)).toEqual(["Ghostline", "Secure Communication"]);
    });

    it("splits project titles formatted with standard hyphen or em-dash", () => {
      const pHyphen = createMockProject("CodeVista - Visualizer");
      expect(splitTitle(pHyphen)).toEqual(["CodeVista", "Visualizer"]);

      const pEmDash = createMockProject("PrepSuite — Placement AI");
      expect(splitTitle(pEmDash)).toEqual(["PrepSuite", "Placement AI"]);
    });

    it("returns whole title in single-element array when no delimiter is present", () => {
      const p = createMockProject("StandalonePortfolio");
      expect(splitTitle(p)).toEqual(["StandalonePortfolio"]);
    });

    it("handles empty or missing title safely", () => {
      const p = createMockProject("");
      expect(splitTitle(p)).toEqual([""]);
    });
  });

  describe("accentOf", () => {
    it("returns project accent color when defined", () => {
      const p = createMockProject("Project with Accent", "#4a90e2");
      expect(accentOf(p)).toBe("#4a90e2");
    });

    it("falls back to default CSS orange variable when accent color is omitted", () => {
      const p = createMockProject("No Accent Project");
      expect(accentOf(p)).toBe("var(--color-orange)");
    });
  });
});
