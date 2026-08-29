import Link from "next/link";

import { categoryPath, type Category } from "@/shared/config/routes";

const categories: { id: Category; title: string; description: string }[] = [
  {
    id: "wedding",
    title: "Bodas",
    description: "Invitaciones digitales para matrimonio, con confirmación y agenda.",
  },
  {
    id: "birthday",
    title: "Cumpleaños",
    description: "Próximamente: mini-webs de cumpleaños en el mismo dominio.",
  },
];

export function CategoryLinks() {
  return (
    <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-20 sm:grid-cols-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={categoryPath(category.id)}
          className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-colors hover:border-teal-700"
        >
          <h2 className="text-xl font-semibold text-stone-900">{category.title}</h2>
          <p className="mt-2 text-sm text-stone-600">{category.description}</p>
        </Link>
      ))}
    </section>
  );
}
