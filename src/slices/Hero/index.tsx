
//Local Imports
import { BackgroundLines, Bounded, ButtonLink } from "@/Components";
import { ContainerScroll } from "@/Components/ui/container-scroll-animation";
import  Image from "next/image";

//Global imports
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <BackgroundLines className="relative items-center justify-center flex flex-col w-full">
        {isFilled.richText(slice.primary.heading) && (
          <h1 className="text-balance text-5xl text-center font-meduim md:text-8xl">
            <PrismicText field={slice.primary.heading} />
          </h1>
        )}

        {isFilled.richText(slice.primary.body) && (
          <p className="text-balance mx-auto mt-6 max-w-md text-slate-300">
            <PrismicText field={slice.primary.body} />
          </p>
        )}

        {isFilled.link(slice.primary.button_link) && (
          <ButtonLink className="mt-8" field={slice.primary.button_link}>
            {slice.primary.button_label}
          </ButtonLink>
        )}
      </BackgroundLines>
      <ContainerScroll>
        {isFilled.image(slice.primary.image) && (
          <PrismicNextImage className="object-cover h-full width-full rounded-md" field={slice.primary.image} />
        )}
      </ContainerScroll>
    </Bounded>
  );
};

export default Hero;
