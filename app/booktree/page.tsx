export default function BookTree() {
  return (
    <div className="w-screen h-[calc(100vh-64px)] flex flex-col justify-center items-center justify-end">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="text-[42px] font-bold">BookTree</div>
        <div className="text-base text-slate-600">An End-to-end Mobile App</div>
      </div>
      <img className="w-1/2" src="/assets/images/booktree-cover.png" />
    </div>
  );
}
