interface LogoProps {

  className?: string;

}

export function Logo({ className }: LogoProps) {

  return (

    <svg className={className} viewBox="352 210 376 660" fill="currentColor" aria-hidden="true">

      <path d="M632 270 L632 740 L372 740 C372 560 472 400 632 270 Z" />
      <rect x="352" y="785" width="280" height="44" rx="22" fill="#737373" />
      <rect className="motion-safe:animate-blink" x="672" y="210" width="56" height="660" rx="28" />

    </svg>

  );

}
