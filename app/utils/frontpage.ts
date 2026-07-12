export type ArticleId =
  | "hero"
  | "drinker"
  | "eternal"
  | "island"
  | "xkcd"
  | "contact"
  | "website"
  | "blogs"
  | "projects"
  | "table-tennis";

export type ColumnwiseArticles = {
  1?: ArticleId[];
  2?: ArticleId[];
  3?: ArticleId[];
};

export type Breakpoints = {
  sm: ColumnwiseArticles;
  md: ColumnwiseArticles;
  lg: ColumnwiseArticles;
};

export const ARTICLES: Breakpoints = {
  // Mobile
  sm: {
    "1": [
      "hero",
      "island",
      "blogs",
      "drinker",
      "eternal",
      "contact",
      "projects",
      "table-tennis",
      "website",
      "xkcd",
    ],
  },
  // Tablet
  md: {
    "1": ["island", "blogs", "drinker", "contact", "xkcd"],
    "2": ["hero", "eternal", "website", "table-tennis"],
  },
  // Desktop
  lg: {
    "1": ["island", "eternal", "table-tennis", "projects"],
    "2": ["hero", "website", "contact"],
    "3": ["blogs", "drinker", "xkcd"],
  },
};
