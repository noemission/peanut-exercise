import '@/styles/global.css';
import localFont from 'next/font/local';
import React from 'react';
 
// Add custom fonts
const Kentledge = localFont({
  src: [
    {
      path: '../fonts/kentledge/Kentledge Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/kentledge/Kentledge Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/kentledge/Kentledge Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/kentledge/Kentledge Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/kentledge/Kentledge Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/kentledge/Kentledge Bold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/kentledge/Kentledge Black.otf',
      weight: '900',
      style: 'normal',
    },
    
  ],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Kentledge.className}>
      <body>
        <div
          style={{ width: '100%', backgroundColor: 'pink', height: '2rem' }}
        />
        {children}
      </body>
    </html>
  );
}
