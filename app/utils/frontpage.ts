export type ArticleId = "hero" | "drinker" | "eternal" | "island" | "xkcd";

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
    "1": ["hero", "island", "eternal", "drinker", "xkcd"],
  },
  // Tablet
  md: {
    "1": ["island", "drinker", "xkcd"],
    "2": ["hero", "eternal"],
  },
  // Desktop
  lg: {
    "1": ["island", "drinker"],
    "2": ["hero", "xkcd"],
    "3": ["eternal"],
  },
};
