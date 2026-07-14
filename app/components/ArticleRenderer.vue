<script setup lang="ts">
import BEER_IMAGE from "~/assets/frontpage/beer.jpg";
import HERO_IMAGE from "~/assets/frontpage/hero.jpg";
import ISLAND_IMAGE from "~/assets/frontpage/island.jpg";
import XKCD_IMAGE from "~/assets/frontpage/xkcd.png";
import TABLE_TENNIS_IMAGE from "~/assets/frontpage/table-tennis.png";

const HERO_TEXT = `
Gongs of the _Gion Shoja_ bells echo the impermanence of all things. The color of the sala flowers reveals the truth that the prosperous must decline. But he is the exception. In this exclusive issue, we explore the life of billionaire playboy — and owner of **The Daily Pingle** — Aryan Pingle.

While others cower behind platitudes of fake humility, 24 year old Pingle is refreshing in his bold proclamation of being 'Web Developer Extraordinaire', with the founding of this paper as his claim to fame. Despite the recent controversy surrounding his alleged fetishization of white-washed North-East Asian women two years older than him, he's more popular than ever — and his charismatic personality has won the hearts of billions around the world.

It is challenging to pinpoint his forte — he is a talented web developer, but an equally skilled programming polyglot. He's not an athlete, but claims to be a top-class runner. He has a boyish charm paired with the face of a heartthrob, yet he is single. But one thing is for certain — he was NOT looking over the shoulder of the editor while this issue of **The Daily Pingle** was being drafted.

When asked about his thoughts on the recent geopolitical crises, he had this to say: "Hey cutie, you look Asian. Are you 26 by any chance?".
`;

const ZOMATO_TEXT = `
Comparison with Bonaparte is inevitable, as Aryan Pingle's work experience is of modest size yet quite remarkable. He transformed Zomato's latest venture, [Nugget](https://nugget.com), into a technological marvel. He has made a name for himself as a full-stack developer; touching everything from the front-end to the back-end (not an innuendo). From revamping the core user experience on the client-side to working on the overall software infrastructure at Zomato, there seems to be nothing he can't do.

And then he did it for a second time. Sources say senior executives brought him aboard Deepinder Goyal's latest venture (this time, in the art world) to leverage his enormous talent. Despite facing several challenges at [Quiet Art Movement](https://quietart.com), he built their software infrastructure from the ground up. He wasn't a part of the tech team — he WAS the tech team.

And he's now going for a threepeat — Pingle is back at Zomato, this time in the legendary Web Platform team, being a "cross-functional innovator" in AI-enhanced products. He is "leveraging the power of automation" to deliver "key actionable insights". And other such phrases that compel you to [make toast in your bathtub](https://www.youtube.com/watch?v=w3nFWbRSYn8).
`;

const CONTACT_TEXT = `
But you can get in touch with the newspaper representatives on Instagram by sending us cool reels: [@aryan.pingle](https://www.instagram.com/aryan.pingle/). Hot, tall brunettes can reach out to our editor-in-chief on GitHub: [github/aryanpingle](https://github.com/aryanpingle/). Middle-aged, balding men can feel free to e-mail us at [realaryanpingle@gmail.com](mailto://realaryanpingle@gmail.com). If you're a recruiter, we assure you that we here at _The Daily Pingle_ don't mean any of the ridiculous stuff we've written. And you may connect with us on LinkedIn: [linkedin/aryan-pingle](https://www.linkedin.com/in/aryan-pingle/).
`;

const WEBSITE_TEXT = `
A bold claim by our editor-in-chief. But is there any truth to this statement? A closer look at the state of the web reveals that most websites prefer to have generic user interfaces that emphasize comfort over uniqueness. Think of the thousand [shadcn-inspired](https://ui.shadcn.com/) black and white _clean_ pages you have seen. A more appropriate adjective would be _sterilized_. Think of the brand logos that have been neutered in the recent past in the name of _minimalism_.

But what is art, if not an expression to comfort the disturbed and disturb the comfortable? There's no sex appeal to something that's mass-produced — this holds as true for websites as it does for everything in nature. By definition, it's not sexy.

We here at _The Daily Pingle_... we're bringing sexy back.
`;

const BLOG_TEXT = `
That one scene from _The Social Network_ where Mark is downing a beer and writing a blog with _In Motion_ playing in the background — it has left a strong impression on neurodivergent young adults who fancy themselves the next Zuckerberg. But not the lame, real-life billionaire; just the cool in-movie counterpart.

If you were to replace the beer with Soju, you'd find an accurate depiction of how it felt to write these blogs.
`;

const PROJECT_TEXT = `
For all of his wit and bravado, Pingle refrained from joking when it came to his projects. In a rare moment of vulnerability, he admitted his projects have been his pride and joy for as long as he's known to program. His side-quests are in his words, "The story of how I learnt to walk. Not in the physical sense... but in an adolescence to adulthood sort of way...".

The way he recounted these, you'd think it was more than a hobby for him. Perhaps journeys he fondly remembers embarking on.
`;

defineProps<{ articleId: ArticleId }>();
</script>

<template>
  <Article
    v-if="$props.articleId === 'drinker'"
    title="Greatest Drinker Ever?"
    :image-src="BEER_IMAGE"
  ></Article>

  <Article
    v-if="$props.articleId === 'hero'"
    title="Inside the mind of a genius"
    :imageSrc="HERO_IMAGE"
    :text="HERO_TEXT"
  ></Article>

  <Article
    v-if="$props.articleId === 'eternal'"
    title="Zomato Boy Delivers"
    byline="Aoi Todo / Gurgaon / May 24, 2026"
    :text="ZOMATO_TEXT"
  ></Article>

  <Article
    v-if="$props.articleId === 'island'"
    :image-src="ISLAND_IMAGE"
  ></Article>

  <Article v-if="$props.articleId === 'xkcd'" :image-src="XKCD_IMAGE"></Article>

  <Article
    v-if="$props.articleId === 'contact'"
    title="You're out of touch"
    :text="CONTACT_TEXT"
  ></Article>

  <Article
    v-if="$props.articleId === 'website'"
    title='"Websites aren&apos;t sexy anymore"'
    byline="Jogoat / Shibuya / March 14, 2026"
    :text="WEBSITE_TEXT"
  ></Article>

  <Article
    v-if="$props.articleId === 'blogs'"
    title="From The Editor's Desk"
    :text="BLOG_TEXT"
    link="/blogs"
    link-text="View Blogs"
  ></Article>

  <Article
    v-if="$props.articleId === 'projects'"
    title="Recreational use"
    :text="PROJECT_TEXT"
    link="/projects"
    link-text="View Projects"
  ></Article>

  <Article
    v-if="$props.articleId === 'table-tennis'"
    :image-src="TABLE_TENNIS_IMAGE"
  ></Article>
</template>
