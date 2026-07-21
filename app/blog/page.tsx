import { getAllPosts } from '@/lib/posts';
import BlogClient from './BlogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Browse all articles on budgeting, saving, investing, debt payoff, side hustles, and building financial freedom as a woman.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  return <BlogClient allPosts={allPosts} />;
}
