import { IconUpload } from "@tabler/icons-react";

const UploadSaveFile = (props: { className?: string }) => {
  const createFileUploadInput = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
    // @ts-ignore
    fileInput.onchange = handleChange;
    fileInput.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (!e.target.files) {
      console.error("No file found", e.target);
      return;
    }
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      if (!e.target?.result) return;
      if (typeof e.target.result === "string") {
        const parsedJsonFile = JSON.parse(e.target.result);
        const backToLocalStorageObject = Object.fromEntries(parsedJsonFile);
        Object.keys(backToLocalStorageObject).forEach((key) => {
          localStorage.setItem(key, backToLocalStorageObject[key]);
        });
        window.location.reload();
        return;
      }

      console.error("Should never get here", e.target.result);
    };
  };

  return (
    <div className={props.className}>
      <button
        className="rounded-full bg-elden-ring-green-100 dark:bg-elden-ring-green-600 p-3 items-center"
        title="Upload your progress *BETA*"
        onClick={createFileUploadInput}
      >
        <IconUpload size={16} stroke={2} />
      </button>
    </div>
  );
};

export default UploadSaveFile;
