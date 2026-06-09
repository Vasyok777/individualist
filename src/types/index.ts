export interface KnowledgeItem {
  num: string;
  segments: ResultSegment[];
}

export interface Material {
  text: string;
}

export interface AudienceItem {
  text: string;
}

export interface ResultSegment {
  text: string;
  bold?: boolean;
}

export interface ResultItem {
  segments: ResultSegment[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface PreviewCard {
  num: string;
  bold: string;
  text?: string;
}

export interface CaseCard {
  name: string;
  badgeLabel: string;
  badgeValue: string;
  image: string;
}
