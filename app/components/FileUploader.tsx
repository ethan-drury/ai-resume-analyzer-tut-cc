import { formatSize } from "~/utils/formatSize";

type FileUploaderProps = {
  file?: File | null;
};

export default function FileUploader({ file }: FileUploaderProps) {
  const sizeLabel = file ? formatSize(file.size) : "No file selected";

  return (
    <div className="uploader-selected-file">
      <span>{file?.name ?? "Choose a file"}</span>
      <span>{sizeLabel}</span>
    </div>
  );
}
