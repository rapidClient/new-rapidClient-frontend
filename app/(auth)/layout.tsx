import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'rapidClient Authentication',
  description: 'rapidClient Login and Registration and Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
