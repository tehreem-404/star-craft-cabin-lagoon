export type Inquiry = {
  id: string;
  name: string;
  email: string;
  arrival: string;
  departure: string;
  room: string;
  guests: number;
  message: string;
  createdAt: string;
};

const KEY = "solara-inquiries";

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadInquiries(): Inquiry[] {
  if (!canUseStorage()) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as Inquiry[]) : [];
  } catch {
    return [];
  }
}

export function saveInquiry(inquiry: Inquiry) {
  if (!canUseStorage()) return;
  const next = [inquiry, ...loadInquiries()].slice(0, 12);
  window.localStorage.setItem(KEY, JSON.stringify(next));
}
