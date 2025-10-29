
interface Props {
  smallTitle?: string ;
  bigTitle: string | TrustedHTML;
  lineGreen?: boolean; 
  className? :string
}

export default function HeroHeadingPages({ smallTitle, bigTitle , lineGreen=false , className}: Props) {
  return (
    <div className={`${className ? className : "pb-[20px]"} col-span-1 flex md:pt-[100px] pt-[80px]  flex-col bg-gray-200  custom-row-gap  md:mb-0 md:pr-10 text-center md:text-left`}>
        <div className="flex flex-col  gap-[20px]">
          <h1 className="md:text-[19px] text-center text-[18px]  font-[600] tracking-[-0.5px] text-title ">
            {smallTitle}
          </h1>
          <div className="xl:px-[250px] md:px-[0px] px-[10px]">
            <h2 className="max-big-title title text-center font-semibold text-title" dangerouslySetInnerHTML={{__html : bigTitle}} />
          </div>
         {
          lineGreen && 
          <div className="flex py-[10px] justify-center">
            <div className="lg:w-[8%] md:w-[17%] w-[8%] h-[5px] bg-primary"></div>
          </div>
          }
        </div>
      </div>
  );
}
