export interface ProjectType {
  id: number;
  category: string;
  sub_category: string;
  title: string;
  description: string | JSX.Element;
  pinned: boolean;
  tech_stack: string[];
  demo: string;
  git: string;
  youtube?: string;
  status: string;
  start_at: string;
  end_at: string;
  images: string[] | [];
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

type other_linksType = {
  id: number;
  title: string;
  link: string;
};

export interface PublicationTypes {
  id: number;
  title: JSX.Element | string;
  abstract: JSX.Element | string;
  conference: JSX.Element | string;
  status: string;
  start_at: string;
  end_at: string;
  publication_date: string;
  paper_link: string;
  other_links: other_linksType[] | [];
  pinned?: boolean;
}

export interface PostSectionTypes {
  id: number;
  title: string | JSX.Element;
  description: string | JSX.Element;
  list?: string[] | JSX.Element[];
  images?: string[];
}
export interface PostTypes {
  id: number;
  date: string;
  category: string;
  display: boolean;
  title: string;
  thumbnail: string;
  sub_title: string;
  sections: PostSectionTypes[] | [];
}
