<script setup lang="ts">
import BEER_IMAGE from "~/assets/beer.png";
import HERO_IMAGE from "~/assets/hero.png";
import ISLAND_IMAGE from "~/assets/frontpage/island.png";
import XKCD_IMAGE from "~/assets/frontpage/xkcd.png";

const HERO_TEXT = `
Gongs of the _Gion Shoja_ bells echo the impermanence of all things. The color of the sala flowers reveals the truth that the prosperous must decline. But he is the exception — in this exclusive issue of The Daily Pingle, we explore the psyche of our editor-in-chief, 24 year old Aryan Pingle.

While others coward behind platitudes of fake humility, he boldly proclaims himself to be a 'Web Developer Extraordinaire'. But don't be fooled by the sheer magnificence of his aptitude in making stunning websites, for his peers deem him a master of adaptability; he makes container management scripts as skillfully as he prototypes in Figma. A "Jack of all trades" in the truest sense. This charismatic prodigy is the single greatest asset to the fields of Compiler Construction, Meta-programming, and Engineering in general. With the sole exception of Terry Davis, of course.`;

const ZOMATO_TEXT = `
After a legendary 1 year run at _Zomato_, senior executives at _Eternal_ have decided to leverage Pingle's talents to the fullest at _Temple_ — a health-oriented smart-wearable company. During his tenure at Zomato, he made a name for himself as a full-stack developer, contributing to the user interface as well as to the overall code infrastructure. It's no surprise that these qualities are sought after by an early stage startup infamous for an extremely rapid pace. Sources close to him claim, "If he was content with all we could offer him, then he would have ceased to be my best friend" and "Maybe the real engineering was the friends we made along the way".
`;

const CONTACT_TEXT = `
But you can get in touch with the newspaper representatives on Instagram by sending us cool reels: [@aryan.pingle](https://www.instagram.com/aryan.pingle/). Nerds can reach out to us on GitHub: [github/aryanpingle](https://github.com/aryanpingle/). If you're a dinosaur, you can e-mail us at [realaryanpingle@gmail.com](mailto://realaryanpingle@gmail.com). If you're a recruiter, we assure you that we here at _The Daily Pingle_ don't mean any of the ridiculous stuff we've written. And you may connect with us on LinkedIn: [linkedin/aryan-pingle](https://www.linkedin.com/in/aryan-pingle/).
`;

const WEBSITE_TEXT = `
The digital experience of this prestigious newspaper was made with [Nuxt](https://nuxt.com/), which uses the [VueJS](https://vuejs.org/) framework. I had a blast making it, which was largely due to how fun it is to use this framework. I'll keep trying to optimize the shit outta this site, which might mean ditching frameworks entirely. But I won't forget you, Vue.

Absolutely no AI was used for any part of this newspaper — it simply cannot measure up to my extremely high standards.`;

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
    title="Zomato ordered to donate to Temple"
    byline="Aoi Todo / Gurgaon / March 1, 2026"
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
    title="Vue from the top"
    byline="Aryan Pingle / Shibuya / March 14, 2001"
    :text="WEBSITE_TEXT"
  ></Article>
</template>

<style scoped></style>
