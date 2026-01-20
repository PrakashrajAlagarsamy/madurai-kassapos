import { Store } from "@/types/store";
import Image from "next/image";

const SingleStore = ({ store }: { store: Store }) => {
  const { image, content } = store;
  return (
    <div className="bg-white p-2 pt-3 rounded-lg shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <Image width={60} height={50} className="w-60 h-60 object-cover rounded-lg" src={image} alt={content} />
    </div>
  );
};

export default SingleStore;
