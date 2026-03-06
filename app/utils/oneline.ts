export const ONELINE_CONTAINER_CLASS_NAME = "oneline-text-container";
export const ONELINE_TEXT_CLASS_NAME = "oneline-text-content";

export function adjustOnelineComponents(elements: HTMLElement[]) {
  elements.forEach((containerElement) => {
    const textElement = containerElement.querySelector<HTMLElement>(
      `.${ONELINE_TEXT_CLASS_NAME}`,
    );

    if (!textElement) return;
    resizeToFitOneLine(textElement, containerElement);
  });
}

export function adjustOnelineComponentForRO(entry: ResizeObserverEntry) {
  const containerElement = entry.target;
  if (!(containerElement instanceof HTMLElement)) return;

  const textElement = containerElement.children[0];
  if (!(textElement instanceof HTMLElement)) return;

  resizeToFitOneLine(textElement, containerElement);
}

export function adjustAllOnelineComponents() {
  const elements = [
    ...document.querySelectorAll<HTMLElement>(
      `.${ONELINE_CONTAINER_CLASS_NAME}`,
    ),
  ];
  adjustOnelineComponents(elements);
}
