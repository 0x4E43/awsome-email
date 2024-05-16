import { IconType } from "react-icons";

export default function MenuItems(icon: IconType, text: string) {
  return (
    <>
      <div className="flex">
        <p>
          {text}
        </p>
      </div>
    </>
  );
}
