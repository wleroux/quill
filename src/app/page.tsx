import Image from "next/image";
import NdcLogo from "@/../public/ndc-logo.svg";

export default function Home() {
  return (
    <div className="text-xl py-4 px-8 font-[family-name:var(--font-audiowide)]">
      <span className="inline-flex gap-2">
        <Image
          alt="NDC Logo"
          width={30}
          height={30}
          src={NdcLogo}
        />
        New Dawn Coalition!
      </span>
    </div>
  );
}
