import { describe, it, expect } from 'vitest';
import { verifyCertificationData } from '../src/utils/certificationVerifier';

describe('Certification Verifier Utility', () => {
  it('validates verified certifications with credential IDs', () => {
    const cert = {
      id: 'aa-cert',
      title: 'Certified Advanced Automation Professional',
      issuer: 'Automation Anywhere',
      issueDate: '2026-06',
      credentialId: 'AAADVC2024A360-185172322',
      verified: true
    };

    expect(verifyCertificationData(cert)).toBe(true);
  });

  it('rejects incomplete certification records missing issuer or date', () => {
    const cert = {
      id: 'incomplete',
      title: 'Incomplete Course',
      issuer: '',
      issueDate: '',
      verified: false
    };

    expect(verifyCertificationData(cert)).toBe(false);
  });
});
