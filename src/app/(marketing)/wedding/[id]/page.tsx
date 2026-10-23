import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WeddingTemplateDetail } from "@/features/wedding/components/wedding-template-detail";
import {
  getWeddingTemplates,
  getWeddingTemplateById,
  getAllWeddingTemplateIds,
} from "@/features/wedding/data/wedding-templates-data";
import { getWeddingDemoHrefs } from "@/shared/config/env";

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
  const demoHrefs = getWeddingDemoHrefs();
  const template = getWeddingTemplateById(id, demoHrefs);

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
  const demoHrefs = getWeddingDemoHrefs();
  const allTemplates = getWeddingTemplates(demoHrefs);
  const template = allTemplates.find((item) => item.id === id);

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
