export function loadImageGroup(els: { id: string; className: string }[]) {
  const elements: HTMLImageElement[] = [];
  const animationPlayed = false;
  function allElementsLoaded() {
    if (!animationPlayed && elements.every((img) => img.complete)) {
      elements.forEach((img, i) => img.classList.add(els[i].className));
    }
  }
  els.forEach(({ id }) => {
    const el = document.getElementById(id) as HTMLImageElement;
    if (!el) return;
    el.onload = allElementsLoaded;
    elements.push(el);
  });
  allElementsLoaded();
}
