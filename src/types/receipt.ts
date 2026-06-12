export type ReceiptCategory = 'Tithes' | 'Offerings' | 'Donations' | 'Thanksgiving' | 'Other Income' | 'Event';
export type PaymentMethod = 'Cash' | 'Bank Transfer';
export type ReceiptStatus = 'Emailed' | 'Printed';

export interface Member {
  name: string;
  email: string;
  phone?: string;
}

export interface Receipt {
  id: string; // e.g. RCP-2025-1082
  date: string; // e.g. 24 May 2025
  member: Member;
  category: ReceiptCategory;
  amount: number;
  paymentMethod: PaymentMethod;
  status: ReceiptStatus;
  description: string; // e.g. Tithes - May 2025
  receivedBy: string; // e.g. Pastor John
}
