export type ArticleId =
  | "hero"
  | "drinker"
  | "eternal"
  | "island"
  | "xkcd"
  | "contact"
  | "website"
  | "education";

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
    "1": ["hero", "island", "contact", "eternal", "drinker", "website", "xkcd"],
  },
  // Tablet
  md: {
    "1": ["island", "contact", "drinker", "xkcd", "education"],
    "2": ["hero", "eternal", "website"],
  },
  // Desktop
  lg: {
    "1": ["island", "drinker"],
    "2": ["hero", "website"],
    "3": ["contact", "eternal", "xkcd"],
  },
};
