<script setup lang="ts">
const slug = useRoute().params.slug;

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection("content").path(`/blogs/${slug}`).first(),
);
</script>

<template>
  <ContentRenderer class="article_body2" v-if="post" :value="post" />
  <!-- TODO: Add info block about me here -->
</template>

<style>
/* TODO: VERY BAD CODE, pls refactor */

.article_body2 {
  max-width: 60ch;
  margin: auto;
  /* Increase font size for articles specifically */
  font-size: 1.1rem;
  line-height: 1.5;
}

.article_body2 > p {
  /* text-align: justify; */
  margin: 1.3rem 0;
}

.article_body2 > p:first-of-type:first-letter {
  float: left;
  margin-right: 0.25rem;
  font-weight: bold;
  font-size: 2lh;
  line-height: 1;
}

.device-md .article_body2 > p:first-of-type:first-letter,
.device-lg .article_body2 > p:first-of-type:first-letter {
  font-size: 3lh;
}

/* .article_body2 > p:not(:first-of-type) {
  text-indent: 2rem;
}

.device-md .article_body2 > p:not(:first-of-type),
.device-lg .article_body2 > p:not(:first-of-type) {
  text-indent: 3rem;
} */

.article_body2 > p a {
  font-weight: 900;
  color: currentColor;
  text-decoration: underline;
  background-color: hsl(39, 100%, 50%, 33%);
  padding: 0 0.2em;
}

.article_body2 hr {
  margin: 2em 0;
  border: none;
  border-top: 1px solid hsl(35, 50%, 13%);
}

/* Blockquote */

.article_body2 > blockquote {
  font-size: 1.2em;
  margin: 2em 2.5em;
  font-weight: 900;
  position: relative;
  text-align: center;
  text-wrap: balance;
}

.article_body2 > blockquote::before,
.article_body2 > blockquote::after {
  font-family: 'Playfair Display';
  font-size: 2em;
  opacity: 0.5;
}

.article_body2 > blockquote::before {
  content: "“";
  position: absolute;
  color: inherit;
  right: calc(100% + 0.5em);
  top: 0;
}
.article_body2 > blockquote::after {
  content: "”";
  position: absolute;
  color: inherit;
  left: calc(100% + 0.5em);
  bottom: 0;
}
</style>
