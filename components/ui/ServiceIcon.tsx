import Image from "next/image";

interface ServiceIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function ServiceIcon({
  name,
  size = 32,
  className = "",
}: ServiceIconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
    />
  );
}
