export type BankAccountType = 'Savings' | 'Current';
export type BankAccountStatus = 'Active' | 'Inactive';

export interface BankAccount {
  id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  accountType: BankAccountType;
  balance: number;
  currency: string; // e.g. LKR
  branch: string; // e.g. Kandy City Branch
  ledgerBalance: number;
  lastStatementDate: string; // e.g. 20 May 2025
  addedOn: string; // e.g. 15 Jan 2024
  addedBy: string; // e.g. Pastor John
  status: BankAccountStatus;
  logoKey: string; // e.g. hnb, commercial, peoples, boc, ntb
}
