export function formatSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) {
    return "0 Bytes";
  }

  if (bytes < 1024) {
    return `${bytes === 1 ? "1 Byte" : `${bytes} Bytes`}`;
  }

  const units = ["KB", "MB", "GB", "TB", "PB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }

  const rounded = size >= 10 || Number.isInteger(size) ? size.toFixed(0) : size.toFixed(1);

  return `${rounded} ${units[unitIndex]}`;
}
