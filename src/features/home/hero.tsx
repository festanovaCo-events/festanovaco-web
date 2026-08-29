import { ButtonLink } from "@/shared/ui/button-link";
import { ROUTES } from "@/shared/config/routes";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-800">
        Invitaciones digitales
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
        Invitaciones digitales para tu celebración
      </h1>
      <p className="mt-4 max-w-xl text-lg text-stone-600">
        Interactivas, funcionales y originales. Elige una categoría y mira un
        modelo.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={ROUTES.wedding}>Ver bodas</ButtonLink>
        <ButtonLink href={ROUTES.birthday} variant="secondary">
          Ver cumpleaños
        </ButtonLink>
      </div>
    </section>
  );
}
