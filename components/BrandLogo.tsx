import Image from 'next/image';

export default function BrandLogo({ priority = false, className = '' }: { priority?: boolean; className?: string }) {
  return <Image src="/images/brand/bein-meditech.png" alt="beIN Meditech" width={480} height={287} priority={priority} sizes="140px" className={`brand-logo ${className}`} />;
}
