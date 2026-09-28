import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import sharp from "sharp";

const imageDirectories = [
  "src/images/eboard",
  "src/images/projectmanagers",
];

const supportedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
]);

async function findImages(directory) {
  const entries = await readdir(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      const nestedFiles = await findImages(filePath);
      files.push(...nestedFiles);
    } else {
      const extension = extname(entry.name).toLowerCase();

      if (supportedExtensions.has(extension)) {
        files.push(filePath);
      }
    }
  }

  return files;
}

async function optimizeImage(file) {
  const extension = extname(file).toLowerCase();

  // Load the source into memory first so Windows does not keep
  // the original file locked while it is being overwritten.
  const originalImage = await readFile(file);
  const originalSize = originalImage.length;

  let pipeline = sharp(originalImage)
    .rotate()
    .resize({
      width: 600,
      height: 600,
      fit: "inside",
      withoutEnlargement: true,
    });

  if (extension === ".jpg" || extension === ".jpeg") {
    pipeline = pipeline.jpeg({
      quality: 82,
      progressive: true,
    });
  } else if (extension === ".png") {
    pipeline = pipeline.png({
      compressionLevel: 9,
    });
  }

  const optimizedImage = await pipeline.toBuffer();

  if (optimizedImage.length >= originalSize) {
    console.log(`${file}: already optimized`);
    return;
  }

  await writeFile(file, optimizedImage);

  const savedBytes = originalSize - optimizedImage.length;
  const savedPercent = Math.round(
    (savedBytes / originalSize) * 100
  );

  const originalKB = Math.round(originalSize / 1024);
  const optimizedKB = Math.round(optimizedImage.length / 1024);

  console.log(
    `${file}: ${originalKB} KB → ${optimizedKB} KB (${savedPercent}% smaller)`
  );
}

async function main() {
  let totalImages = 0;

  for (const directory of imageDirectories) {
    let images;

    try {
      images = await findImages(directory);
    } catch (error) {
      if (error.code === "ENOENT") {
        console.warn(`${directory}: directory not found, skipping`);
        continue;
      }

      throw error;
    }

    for (const image of images) {
      try {
        await optimizeImage(image);
        totalImages += 1;
      } catch (error) {
        console.error(`${image}: optimization failed`);
        console.error(error.message);
      }
    }
  }

  console.log(`Finished processing ${totalImages} images.`);
}

main().catch((error) => {
  console.error("Image optimization failed:");
  console.error(error);
  process.exitCode = 1;
});