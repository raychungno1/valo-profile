export function processImageFolder(images: Record<string, any>[]) {
  const processed: Record<string, ImageMetadata> = {};
  images.forEach((img) => {
    const fileName = img.default.src.replace(/^.*[\\\/]/, "").split(".")[0];
    console.log(fileName);
    processed[fileName] = img.default;
  });
  return processed;
}

export async function importImage(url: string) {
  const img: ImageMetadata = await import(url);
  return img;
  // return { default: img };
}
