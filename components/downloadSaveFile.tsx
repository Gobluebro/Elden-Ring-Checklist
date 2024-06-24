import { IconDownload } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const DownloadSaveFile = (props: { className?: string }) => {
  const [json, setJson] = useState("");
  const [fileName, setFileName] = useState("Elden_Ring_Checklist.json");
  const getCurrentLocalStorage = () => {
    setJson(JSON.stringify(Object.entries(window.localStorage)));
  };

  useEffect(() => {
    setFileName(`Elden_Ring_Checklist-${new Date().toLocaleString()}.json`);
  }, [json]);

  return (
    <a
      className={props.className}
      onClick={getCurrentLocalStorage}
      href={`data:text/json;charset=utf-8,${encodeURIComponent(json)}`}
      download={fileName}
    >
      <button
        className="rounded-full bg-elden-ring-green-100 dark:bg-elden-ring-green-600 p-3 items-center"
        title="Download your progress *BETA*"
      >
        <IconDownload size={16} stroke={2} />
      </button>
    </a>
  );
};

export default DownloadSaveFile;
