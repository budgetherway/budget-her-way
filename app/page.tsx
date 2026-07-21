import { getAllPosts } from '@/lib/posts';
import HomeClient from './HomeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Budget Her Way | Women's Personal Finance Blog",
  description: "Practical budgeting, saving, investing, and debt payoff tips written for real women building financial freedom on their own terms.",
};

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 6);
  return <HomeClient recentPosts={recentPosts} />;
}
