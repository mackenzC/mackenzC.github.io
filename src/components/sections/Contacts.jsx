export default function Contacts() {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <a
        className="group relative flex items-center justify-center p-2 transition-all duration-300 ease-in-out"
        href="https://drive.google.com/file/d/1F_XBJKWcnZsDi5zRrrNWkbPcX-ykPQ6Z/view?usp=sharing"
        target="_blank"
      >
        <img
          className="text-white w-[50px] h-[50px] opacity-50 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-100"
          src="/assets/doc.svg"
          alt="Résumé"
        />
        <span className="pointer-events-none absolute -bottom-7 left-1/2 z-10 w-max -translate-x-1/2 rounded-full bg-slate-900/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Résumé
        </span>
      </a>
      <a
        className="group relative flex items-center justify-center p-2 transition-all duration-300 ease-in-out"
        href="mailto:mackenzchung@gmail.com"
        target="_blank"
      >
        <img
          className="w-[50px] h-[50px] opacity-50 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-100"
          src="/assets/email.svg"
          alt="Email"
        />
        <span className="pointer-events-none absolute -bottom-7 left-1/2 z-10 w-max -translate-x-1/2 rounded-full bg-slate-900/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          mackenzchung@gmail.com
        </span>
      </a>
      <a
        className="group relative flex items-center justify-center p-2 transition-all duration-300 ease-in-out"
        href="https://www.linkedin.com/in/mackenzC/"
        target="_blank"
      >
        <img
          className="w-[40px] h-[40px] opacity-50 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-100"
          src="/assets/linkedn.png"
          alt="LinkedIn"
        />
        <span className="pointer-events-none absolute -bottom-7 left-1/2 z-10 w-max -translate-x-1/2 rounded-full bg-slate-900/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          @mackenzC
        </span>
      </a>
      <a
        className="group relative flex items-center justify-center p-2 transition-all duration-300 ease-in-out"
        href="https://github.com/mackenzC"
        target="_blank"
      >
        <img
          className="w-[45px] h-[45px] opacity-50 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-100"
          src="/assets/github.png"
          alt="Github"
        />
        <span className="pointer-events-none absolute -bottom-7 left-1/2 z-10 w-max -translate-x-1/2 rounded-full bg-slate-900/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          @mackenzC
        </span>
      </a>
    </div>
  );
}
