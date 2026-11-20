import { describe, it, expect } from "vitest";
import { personalInfo, projectsData, skillsData } from "@/data/portfolioData";

describe("Portfolio Data Integrity & Schema Validation", () => {
  describe("personalInfo", () => {
    it("contains complete and verified developer profile credentials", () => {
      expect(personalInfo.name).toBe("Penumala Bindu");
      expect(personalInfo.role).toBe("Full-Stack Developer");
      expect(personalInfo.email).toBe("pbibinduamb@gmail.com");
      expect(personalInfo.github).toBe("https://github.com/Bindu7729");
      expect(personalInfo.linkedin).toContain("linkedin.com");
      expect(personalInfo.resumeUrl.endsWith(".pdf")).toBe(true);
    });
  });

  describe("skillsData", () => {
    it("covers core engineering categories with comprehensive skill sets", () => {
      const categoryNames = skillsData.map((c) => c.category);
      expect(categoryNames).toContain("Programming Languages");
      expect(categoryNames).toContain("Data Analytics & ML");
      expect(categoryNames).toContain("Databases & Querying");
      expect(categoryNames).toContain("Tools & Technologies");
      expect(categoryNames).toContain("Core Competencies");

      for (const cat of skillsData) {
        expect(cat.skills.length).toBeGreaterThanOrEqual(3);
      }
    });
  });

  describe("projectsData", () => {
    it("contains structured metadata, technical stacks, and feature lists for all projects", () => {
      expect(projectsData.length).toBeGreaterThanOrEqual(4);

      for (const project of projectsData) {
        expect(project.id).toBeDefined();
        expect(project.title).toBeDefined();
        expect(project.technologies.length).toBeGreaterThan(0);
        expect(project.features.length).toBeGreaterThan(0);
      }
    });

    it("verifies unique IDs across all portfolio projects", () => {
      const ids = projectsData.map((p) => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });
});
