import { FC } from "react";
import Description from "./Description";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface DescriptionProps {
  src: string;
  alt: string;
  text: string;
}

interface ProjectProps {
  title: string;
  subtitle: string;
  flexDirection: string;
  img: string;
  soon?: string;
  projectUrl: Url;
  descriptions: DescriptionProps[];
}

const Project: FC<ProjectProps> = ({
  title,
  subtitle,
  descriptions,
  flexDirection,
  img,
  soon,
  projectUrl,
}) => {
  return (
    <div
      className={`px-8 py-4 md:px-16 md:py-8 lg:px-20 lg:py-12 flex ${flexDirection} justify-center items-center md:items-center justify-around md:items-start gap-4 md:gap-16 lg:gap-24`}
    >
      <div className="flex flex-col gap-4 justify-start pt-9 items-center">
        {projectUrl ? (
          <Link href={projectUrl}>
            <div className="text-[32px] lg:text-[48px] md:text-[40px] font-bold hover:text-cyan-800 transition-colors duration-300">
              {title}
            </div>
          </Link>
        ) : (
          <div className="text-[32px] lg:text-[48px] md:text-[40px] font-bold">
            {title}
          </div>
        )}
        <div className="text-[#757575] text-xl font-bold font-['Sofia Pro'] leading-[42px]">
          {soon}
        </div>
        <div className="font-extralight text-center">{subtitle}</div>
        <div className="flex flex-wrap justify-center gap-3">
          {descriptions.map((desc, index) => (
            <Description key={index} {...desc} />
          ))}
        </div>
      </div>
      {projectUrl ? (
        <Link href={projectUrl}>
          <img
            className="w-full max-w-fit md:max-w-[656px] lg:max-w-[767px] transition-transform duration-300 ease-in-out hover:scale-105"
            src={img}
          />
        </Link>
      ) : (
        <img
          className="w-full max-w-fit md:max-w-[656px] lg:max-w-[767px]"
          src={img}
        />
      )}
    </div>
  );
};

export default Project;
