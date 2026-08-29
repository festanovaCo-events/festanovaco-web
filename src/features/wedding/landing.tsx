import { invitationsWeddingUrl } from "@/shared/config/routes";
import { ButtonLink } from "@/shared/ui/button-link";

type LandingProps = {
  demoToken?: string;
};

export function Landing({ demoToken }: LandingProps) {
  const invitationHref = invitationsWeddingUrl(demoToken);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-800">
        Bodas
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
        Invitaciones digitales para tu matrimonio
      </h1>
      <p className="mt-4 max-w-xl text-lg text-stone-600">
        Interactivas, funcionales y originales. Al ir a la invitación se abre la
        mini-web Angular en este mismo dominio.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="mailto:hola@festanovaco.com">Contactar asesor</ButtonLink>
        <ButtonLink href={invitationHref} variant="secondary" fullPage>
          Ir a la invitación
        </ButtonLink>
      </div>
    </section>
  );
}
