import { z } from "zod";

export const ProjectSchema = z.object({
  // Step I
  title: z.string().min(5),
  category: z.string().optional(),
  industry: z.string().optional(),
  businessModel: z.string().optional(),
  status: z.enum(["ACTIVE", "FOR_SALE", "SHOWCASE"]),

  // Step IV (direct column)
  revenueConfidential: z.boolean().default(false),

  // Step V (direct column)
  blueprintAvailable: z.boolean().default(false),

  // JSON content
  content: z.object({
    valueProposition: z.object({
      overview: z.string().optional(),
      problem: z.string().optional(),
      solution: z.string().optional(),
      operationalStructure: z.string().optional(),
      techStack: z.array(z.string()).optional()
    }).optional(),

    monetization: z.object({
      revenueStreams: z.array(z.string()).optional(),
      marginRange: z.string().optional(),
      costStructure: z.string().optional(),
      pricingNotes: z.string().optional()
    }).optional(),

    activity: z.object({
      metrics: z.record(z.string(), z.union([z.string(), z.number()])).optional(),
      hasScreenshots: z.boolean().optional()
    }).optional(),

    blueprint: z.object({
      requiredSkills: z.array(z.string()).min(1),
      startupCost: z.string().min(1),
      timeToLaunch: z.string().min(1),
      riskFactors: z.array(z.string()).optional()
    }).optional(),

    saleDetails: z.object({
      askingPrice: z.string().optional(),
      includedAssets: z.string().optional(),
      transitionTerms: z.string().optional(),
      licensingStructure: z.string().optional()
    }).optional()
  })
});