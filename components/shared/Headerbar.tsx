import Image from "next/image";

export default function Headerbar() {
  return (
    <header className="bg-red-500">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="logo flex items-center">
          <Image
            width={34}
            height={34}
            src="/assets/quill.png"
            alt="quill-logo"
            className="mr-4"
          />
          <span>quill</span>
        </div>
        <nav>controls</nav>
      </div>
    </header>
  );
}
