// src/components/ui/LinkButton.tsx
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";

interface LinkButtonProps {
  href: string;
  text?: string;
  arrowButton?: boolean;
}

export default function ConsultButton({arrowButton = false, href, text = "Consultez les plans" }: LinkButtonProps) {
  return (
    <div>
      <Link href={href} className="inline-block text-white">
        <AnimatedButton
          text={text}
          hoverText={text}
          bgColor="bg-primary"
          textColor="text-white"
          hoverBgColor="bg-title"
          className="py-[12px] px-[40px]  font-[600] rounded-lg"
          arrowButton={arrowButton}
        />
      </Link>
    </div>
  );
}
