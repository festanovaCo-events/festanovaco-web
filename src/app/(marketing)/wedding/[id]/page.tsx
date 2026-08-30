import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WeddingTemplateDetail } from "@/features/wedding";
import {
  getWeddingTemplates,
  getWeddingTemplateById,
  getAllWeddingTemplateIds,
} from "@/features/wedding/data/wedding-templates-data";
import { getWeddingDemoToken } from "@/shared/config/env";
import { invitationsWeddingUrl } from "@/shared/config/routes";

interface WeddingDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = getAllWeddingTemplateIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: WeddingDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const demoHref = invitationsWeddingUrl(getWeddingDemoToken());
  const template = getWeddingTemplateById(id, demoHref);

  if (!template) {
    return {
      title: "Modelo de Boda no encontrado",
    };
  }

  return {
    title: `Modelo ${template.number}: ${template.name} | FestanovaCo Bodas`,
    description: template.description,
  };
}

export default async function WeddingTemplateDetailPage({
  params,
}: WeddingDetailPageProps) {
  const { id } = await params;
  const demoHref = invitationsWeddingUrl(getWeddingDemoToken());
  const allTemplates = getWeddingTemplates(demoHref);
  const template = getWeddingTemplateById(id, demoHref);

  if (!template) {
    notFound();
  }

  return (
    <WeddingTemplateDetail
      template={template}
      allTemplates={allTemplates}
    />
  );
}
