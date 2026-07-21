export function generatePersonJsonLd(name: string = 'Penumala Bindu', role: string = 'Software Engineer') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle: role,
    url: 'https://github.com/Bindu7729',
    sameAs: [
      'https://github.com/Bindu7729',
      'https://linkedin.com/in/penumala-bindu'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Mohan Babu University'
    }
  };
}
