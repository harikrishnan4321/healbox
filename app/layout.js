import "./globals.css";

export const metadata = {
  title: "Heal Boxx | Mental Health and Wellness",
  description: "A modern Heal Boxx wellness website with dynamic gallery and experts sections.",
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
