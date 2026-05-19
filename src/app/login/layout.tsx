import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход в систему - Волга-Авто",
  description: "Вход в панель управления Волга-Авто",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
