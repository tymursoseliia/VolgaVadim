import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании Волга-Авто - Авто из Европы",
  description: "Волга-Авто — команда специалистов с опытом в подборе и импорте автомобилей более 9 лет. Честность, прозрачность и профессионализм.",
  openGraph: {
    title: "О компании Волга-Авто - Авто из Европы",
    description: "Волга-Авто — команда специалистов с опытом в подборе и импорте автомобилей более 9 лет. Честность, прозрачность и профессионализм.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
