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
  status: string;
  start_at: string;
  end_at: string;
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
