export type ArticleStatus = "Draft" | "Published" | "Pending" | "Archived" | "Deleted";

// Article.ts
export interface Article {
  title: string;
  status: ArticleStatus;
  date: string;
  views: number;
}