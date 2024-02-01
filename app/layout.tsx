import "@/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{ width: "100%", backgroundColor: "pink", height: "2rem" }}
        />
        {children}
      </body>
    </html>
  );
}
