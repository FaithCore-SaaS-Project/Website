export type BudgetType = 'Operating' | 'Capital' | 'Ministry';
export type BudgetStatus = 'In Progress' | 'Completed';

export interface Budget {
  id: string;
  name: string;
  description: string;
  type: BudgetType;
  startDate: string; // e.g. 01 Jan 2025
  endDate: string; // e.g. 31 Dec 2025
  totalBudget: number;
  spent: number;
  progress: number; // percentage, e.g. 65
  status: BudgetStatus;
  iconColorKey: string; // e.g. violet, emerald, orange, blue, purple, red, cyan, yellow
}
