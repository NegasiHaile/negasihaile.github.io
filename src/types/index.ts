import { ReactNode } from "react";

export interface ProjectType {
  id: number;
  category: string;
  sub_category: string;
  title: string;
  description: string;
  pinned: boolean;
  startAt: string;
  endAt: string;
  tech_stack: string[];
  demo: string;
  git: string;
}

export interface SocialAccountsTypes {
  id: number;
  title: string;
  link: string;
  icon: React.JSX.Element;
}

export interface IconProps {
  className?: string;
}
