import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white pt-2 sm:pt-4 lg:pt-8">
      <footer className="mx-auto max-w-screen-2xl px-2 md:px-4">
        <div className="py-2 text-center text-sm text-gray-400">
          このアプリを利用することで開かれるリンクやページの内容については、当アプリの運営者が保証するものではありません。
        </div>
        <div className="py-2 text-center text-sm text-gray-400">
          リンク先の内容に関する責任は一切負いかねますので、ご了承ください。
        </div>
        <div className="py-2 text-center text-sm text-gray-400">
          © 2024 - Present mari2t All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
