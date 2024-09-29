import Link from "next/link"

export default function Navbar() {
  return (
    <div className="w-screen h-[64px] px-8 py-1 md:px-12 md:py-2 lg:px-16 bg-white justify-between items-center inline-flex">
      <Link href="/"><div className="text-lg font-bold uppercase">Charlotte Raz</div></Link>
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
