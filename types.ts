import { LucideIcon } from 'lucide-react';

export interface FocusArea {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface MembershipBenefit {
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}