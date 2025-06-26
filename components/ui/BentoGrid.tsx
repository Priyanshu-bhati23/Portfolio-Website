
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  titleClassName,
  description,
  id,
  img,
  imgClassName,
  spareImg,
  spareImgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img? : string;
  imgClassName? : string;
  spareImg? : string;
  spareImgClassName? : string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1  relative rounded-3xl flex flex-col justify-between space-y-4  border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none ",
        className,
      )}
      style={{
    
        background: '#020024',
        backgroundColor: 'radial-gradient(circle,rgba(2, 0, 36, 1) 30%, rgba(9, 9, 121, 1) 64%, rgba(0, 212, 255, 1) 100%)'
      }}
    >
      <div className={`${id===6} && 'flex justify-center h-full'`}>

        <div className="w-full h-full absolute">
          {img &&(
            <img
            src={img}
            alt={img}
            className={cn(imgClassName,'object-cover,object-center')}
          />
          )}

        </div>
        <div className={`absoute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
          {spareImg &&(
            <img
             src={spareImg}
            alt={spareImg}
            className={cn(imgClassName,'object-cover,object-center w-full h-full')}
            />
          )}
      
        </div>

        {id===6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold "></div>
          </BackgroundGradientAnimation>
        )}


        <div className={cn(
          titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10'
        )}>

          <div>
            {description}
          </div>

        </div>

      </div>
      
      <div className="transition duration-200 group-hover/bento:translate-x-2">
       
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
