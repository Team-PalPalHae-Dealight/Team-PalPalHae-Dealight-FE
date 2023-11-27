export async function convertUrlToFile(url: string) {
  const filename = url.split('/').pop()!;

  const response = await fetch(url);
  const blob = await response.blob();

  const convertedFile = new File(
    [blob],
    filename.includes('.png') ? filename : filename + '.png',
    { type: blob.type }
  );

  return convertedFile;
}
