import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Админ панель - Волга-Авто",
  description: "Панель управления сайтом Волга-Авто. Добавление автомобилей и управление контентом.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
