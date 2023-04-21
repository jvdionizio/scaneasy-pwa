import clsx from "clsx";
import { Collapse } from "react-collapse";
import Emoji from "react-emoji-render";
import { FaChevronUp } from "react-icons/fa";
import Text from "./styles/Text";

export default function PrivacyTopics({
  title,
  text,
  open,
  toggle,
}) {
  return(
    <div
      className="
        w-full
        flex
        flex-col
        gap-2
      "
    >
      <div
        className="
          w-full
          flex
          justify-between
        "
        onClick={toggle}
      >
        <Text
          size="lg"
          decoration="semibold"
          asChild
        >
          <Emoji text={title} />
        </Text>
        <FaChevronUp
          className={
            clsx(
              'w-5',
              'h-5',
              'ml-2',
              'transform',
              'transition-transform',
              'duration-300',
              {
                'rotate-180': open
              }
            )
          }
        />
      </div>
      <Collapse
        isOpened={open}
      >
        <Text>
          {text}
        </Text>
      </Collapse>
    </div>
  )
}