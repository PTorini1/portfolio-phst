export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  message: string;
  channels: ContactChannel[];
};
