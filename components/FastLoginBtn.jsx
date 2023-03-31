import clsx from "clsx";
import PropTypes from 'prop-types';
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

export default function FastLoginBtn({type}) {
  return (
    <button
      className="
        w-full
        flex
        justify-between
        items-center
        py-2
        px-6
        gap-3
        rounded-full
        shadow-lg
        bg-[#f0f0f0]
        hover:bg-[#e0e0e0]
        active:bg-[#d0d0d0]
        transition-colors
        duration-200
        ease-in-out
      "
    >
      {
        type === "google" ? (
          <FaGoogle className="text-red-500 text-2xl" />
        ) : (
          <FaFacebookF className="text-blue-700 text-2xl" />
        )
      }
      <span className={clsx(
        {
          "text-red-500" : type === "google",
          "text-blue-700" : type === "facebook",
        },
        "text-sm",
        "font-semibold"
      )}>{
        type === "google" ? "Continuar com o Google" : "Continuar com o Facebook"
      }</span>
    </button>
  );
}

FastLoginBtn.propTypes = {
  type: PropTypes.string.isRequired,
};