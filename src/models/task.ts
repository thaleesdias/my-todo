export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: Date;
  completed_at: Date;
}
