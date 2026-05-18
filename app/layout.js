import "./globals.css";

export const metadata = {
  title: "Heal Boxx | Mental Health and Wellness",
  description: "A modern Heal Boxx wellness website with dynamic gallery and experts sections.",
  icons: {
    icon: "/out/logo-icon.png",
    shortcut: "/out/logo-icon.png",
    apple: "/out/logo-icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
