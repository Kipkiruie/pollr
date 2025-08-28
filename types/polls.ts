// types/poll.ts
export type PollOption = { id: string; text: string; votes: number };
export type Poll = { id: string; title: string; options: PollOption[]; createdAt: string };