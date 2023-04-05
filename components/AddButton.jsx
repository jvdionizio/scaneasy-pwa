import { FaPlus } from "react-icons/fa";

export default function AddButton() {
  return(
    <div
      className="
        p-[1px]
        flex
        justify-center
        self-start
        ring-2
        h-fit
        rounded-full
        ring-blue-700
        text-blue-700
      "
    >
      <FaPlus />
    </div>
  )
}