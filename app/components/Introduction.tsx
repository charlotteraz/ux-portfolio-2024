/* eslint-disable react/no-unescaped-entities */
export default function Introduction() {
    return (
      <div className="w-screen h-[calc(100vh-64px)] px-8 md:px-20 lg:px-36 flex flex-col justify-center items-start">
        <div className="text-[4rem] font-bold">Hey, I'm Charlotte!</div>
        <div>
          <span className="text-lg font-extralight">I'm a </span>
          <span className="text-lg font-extralight underline">UX Designer</span>
          <span className="text-lg font-extralight">
            , and I create user-centered digital experiences that are intuitive,
            accessible, and beautifully simple.
          </span>
          <div className="text-sm font-thin">Explore my work below!</div>
        </div>
      </div>
    );
}