import Image from "next/image";
import toast from "react-hot-toast";

export default function EditableImage({ link, setLink }) {
  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);

      const uploadPromise = new Promise(async (resolve, reject) => {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });
        if (response.ok) {
          const link = await response.json();
          setLink(link);
          resolve();
        } else {
          reject();
        }
      });

      await toast.promise(uploadPromise, {
        loading: "Uploading...",
        success: "Upload Success!",
        error: "Uploading Failed!",
      });
    }
  }

  return (
    <>
      {link && (
        <Image
          className="w-full h-full mb-2 rounded-lg"
          src={link}
          alt={"avatar"}
          width={250}
          height={250}
        />
      )}
      {!link && (
        <div className="p-4 mb-1 text-center text-gray-500 bg-gray-200 rounded-lg">
            No Image!
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block p-2 text-center text-white bg-gray-700 border border-gray-300 rounded-lg cursor-pointer">
          Edit
        </span>
      </label>
    </>
  );
}
