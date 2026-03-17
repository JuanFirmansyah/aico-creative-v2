import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Social() {
  return (
    <div className="fixed right-10 bottom-10 flex-col gap-4 z-50 hidden lg:flex">
      <a
        href="https://www.instagram.com/aicocreative.id/"
        target="_blank"
        className="text-white hover:text-yellow-400"
      >
        <FaInstagram size={28} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=6285256092725"
        target="_blank"
        className="text-white hover:text-yellow-400"
      >
        <FaWhatsapp size={28} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCsNHJ8uRVyTQ6TdxVGKY8FQ"
        target="_blank"
        className="text-white hover:text-yellow-400"
      >
        <FaYoutube size={28} />
      </a>
    </div>
  );
}