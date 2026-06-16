export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'portfolio';
  url: string;
  label: string;
}

export function buildVerifiedSocialLinks(username: string = 'Bindu7729', email: string = 'pbibinduamb@gmail.com'): SocialLink[] {
  return [
    {
      platform: 'github',
      url: `https://github.com/${username}`,
      label: `GitHub (${username})`
    },
    {
      platform: 'email',
      url: `mailto:${email}`,
      label: 'Email Me'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/penumala-bindu',
      label: 'LinkedIn'
    }
  ];
}
