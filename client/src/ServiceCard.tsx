interface ServiceCardProps {

  title: string;
  description: string;
  href: string;

}

export function ServiceCard({ title, description, href }: ServiceCardProps) {

  return (

    <a href={href} className="group flex items-center justify-between gap-6 rounded-xl bg-[#161616] px-6 py-5 text-left" >

      <div>

        <h3 className="font-body text-lg font-medium tracking-tight text-[#fafafa]">{title}</h3>

        <p className="mt-1 font-body text-sm text-[#737373]">{description}</p>

      </div>

      <svg className="size-5 shrink-0 text-[#737373] transition-transform duration-200 ease-out group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" >

        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />

      </svg>

    </a>

  );

}
