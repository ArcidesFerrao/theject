export interface ProjectContent {
  valueProposition?: {
    overview?: string;
    problem?: string;
    solution?: string;
    operationalStructure?: string;
    techStack?: string[];
  };

  monetization?: {
    revenueStreams?: string[];
    marginRange?: string;
    costStructure?: string;
    pricingNotes?: string;
  };

  activity?: {
    metrics?: Record<string, string | number>;
    hasScreenshots?: boolean;
  };

  blueprint?: {
    requiredSkills?: string[];
    startupCost?: string;
    timeToLaunch?: string;
    riskFactors?: string[];
  };

  saleDetails?: {
    askingPrice?: string;
    includedAssets?: string;
    transitionTerms?: string;
    licensingStructure?: string;
  };
}