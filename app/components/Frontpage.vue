<script setup lang="ts">
import throttle from "throttleit";
import ArticleRenderer from "./ArticleRenderer.vue";
import Divider from "./Divider.vue";

const columnwiseData = ref<ColumnwiseArticles>(ARTICLES["sm"]);

const columnCountClassName = computed(() => {
  const numCols = Object.keys(columnwiseData.value).length;
  return `columns-${numCols}`;
});

const recalculate = () => {
  if (window.innerWidth <= SMALL_DEVICE_BREAKPOINT)
    columnwiseData.value = ARTICLES["sm"];
  else if (window.innerWidth <= MEDIUM_DEVICE_BREAKPOINT)
    columnwiseData.value = ARTICLES["md"];
  else columnwiseData.value = ARTICLES["lg"];
};

const throttledRecalculate = throttle(recalculate, 100);

// Recalculate columns once + every time window is resized
onMounted(() => {
  recalculate();
  window.addEventListener("resize", throttledRecalculate);
});
// Remove event listeners
onUnmounted(() => {
  window.removeEventListener("resize", throttledRecalculate);
});
</script>

<template>
  <div style="display: flex" :class="columnCountClassName">
    <div v-if="columnwiseData['1']?.length" class="frontpage_column">
      <template v-for="(value, index) in columnwiseData['1']">
        <ArticleRenderer :article-id="value" />
        <Divider
          v-if="index !== columnwiseData['1'].length - 1"
          style="
            margin: 0.1rem 0;
            border-width: 0.075rem;
            border-style: dashed;
            opacity: 0.25;
          "
        />
      </template>
    </div>

    <div
      v-if="columnwiseData['2']?.length"
      class="frontpage_column-divider"
    ></div>

    <div v-if="columnwiseData['2']?.length" class="frontpage_column">
      <template v-for="(value, index) in columnwiseData['2']">
        <ArticleRenderer :article-id="value" />
        <Divider
          v-if="index !== columnwiseData['2'].length - 1"
          style="
            margin: 0.1rem 0;
            border-width: 0.075rem;
            border-style: dashed;
            opacity: 0.25;
          "
        />
      </template>
    </div>

    <div
      v-if="columnwiseData['3']?.length"
      class="frontpage_column-divider"
    ></div>

    <div v-if="columnwiseData['3']?.length" class="frontpage_column">
      <template v-for="(value, index) in columnwiseData['3']">
        <ArticleRenderer :article-id="value" />
        <Divider
          v-if="index !== columnwiseData['3'].length - 1"
          style="
            margin: 0.1rem 0;
            border-width: 0.075rem;
            border-style: dashed;
            opacity: 0.25;
          "
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.frontpage_column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.frontpage_column-divider {
  flex: 0;
  border-left: 0.15rem solid currentColor;
}

.frontpage_article-divider {
  width: 100%;
  border-top: 0.15rem dashed currentColor;
  opacity: 0.25;
}
</style>
