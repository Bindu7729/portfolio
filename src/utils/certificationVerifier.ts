export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verified: boolean;
}

export function verifyCertificationData(cert: Certification): boolean {
  if (!cert.title || !cert.issuer || !cert.issueDate) return false;
  return Boolean(cert.verified || cert.credentialId);
}
