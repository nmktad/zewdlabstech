import Image from 'next/image';
import Link from 'next/link';

export default function WorkCard({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  return (
    <Link href={`works/${slug}`}>
      <div className="group relative grid min-h-[35rem] cursor-pointer flex-col items-end justify-center overflow-hidden rounded-3xl bg-white transition-transform duration-500 hover:scale-105">
        <div
          className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-[url('/antenehfilms.webp')] bg-center bg-cover bg-transparent`}
        >
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-bg-black-10" />
        </div>
        <div className="absolute top-0 right-0 m-4 flex h-10 w-10 items-center justify-center rounded-full bg-card-background ring-gray-200 duration-700 ease-in-out hover:transition group-hover:ring-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 18.256 18.256"
            className="transition duration-300"
          >
            <title>arrow</title>
            <g transform="translate(5.363 5.325)">
              <path
                id="Path_10"
                d="M14.581,7.05,7.05,14.581"
                transform="translate(-7.05 -7.012)"
                fill="none"
                stroke="#0D1117"
                className="stroke-background"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                id="Path_11"
                data-name="Path 11"
                d="M10,7l5.287.037.038,5.287"
                transform="translate(-7.756 -7)"
                fill="none"
                className="stroke-background"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </g>
            <path
              id="Path_12"
              data-name="Path 12"
              d="M0,0H18.256V18.256H0Z"
              fill="none"
            />
          </svg>
        </div>
        <div className="relative p-6 text-center md:px-12">
          <h2 className="mb-6 font-medium text-3xl text-foreground">{title}</h2>
          <h5 className="mb-4 font-semibold text-foreground/80 text-xl">
            Lewis Daniel
          </h5>
          <Image
            alt="Lewis Daniel"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-32 w-32 rounded-full border border-white"
            width={100}
            height={100}
          />
        </div>
        <Noise />
      </div>
    </Link>
  );
}

export function Noise() {
  return (
    <div
      className="absolute inset-0 h-full w-full scale-[1.2] transform opacity-15 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: 'url(/noise.webp)',
        backgroundSize: '30%',
      }}
    />
  );
}
