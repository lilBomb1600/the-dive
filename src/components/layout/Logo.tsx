import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`relative block h-10 w-14 shrink-0 ${className ?? ""}`}>
      <Image src="/images/logo/logo.png" alt="The Dive" fill sizes="56px" className="object-contain" priority />
    </span>
  );
}
