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
}
