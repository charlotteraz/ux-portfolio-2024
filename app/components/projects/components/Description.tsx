import { FC } from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
  text: string;
}

const Description: FC<ImageComponentProps> = ({ src, alt, text }) => {
  return (
    <div className="h-9 px-5 bg-[#f4f4f4] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
      <div className="text-[#626262] text-sm sm:text-[14px] font-normal font-['Sofia Pro']">
        {text}
      </div>
      <img className="w-7 h-7" src={src} alt={alt} />
    </div>
  );
};

export default Description;
