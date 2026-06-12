export type CategoryType = 'Income' | 'Expense';
export type CategoryStatus = 'Active' | 'Inactive';

export interface Category {
  id: string;
  name: string;
  type: CategoryType;
  description: string;
  status: CategoryStatus;
  date: string; // e.g. 10 Feb 2025
  createdTime: string; // e.g. 09:30 AM
  createdBy: string; // e.g. Pastor John
  transactions: number;
  totalAmount: number;
  iconName: string; // Key for matching icon
}
