import Link from "next/link"

export default function Navbar() {
  return (
    <div className="w-screen h-[64px] px-9 py-[8px] bg-white justify-between items-center inline-flex">
      <div className="text-lg font-bold uppercase">Charlotte Raz</div>
      <div className="justify-start items-start gap-7 flex">
        <Link href="/" className="text-sm font-light uppercase">
          Home
        </Link>
        <Link href="" className="text-sm font-light uppercase">resume</Link>
        <Link href="/about" className="text-sm font-light uppercase">About</Link>
      </div>
    </div>
  );
}
