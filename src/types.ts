export interface Achievement {
  id: string;
  title: string;
  studentName: string;
  grade: string;
  description: string;
  date: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface NavItem {
  name: string;
  path: string;
  icon?: string;
}
