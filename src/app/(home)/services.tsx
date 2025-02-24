import { useId } from 'react';

const grid = [
  {
    title: 'Software Development',
    description:
      'Building high-quality software solutions, including web apps, mobile apps, and scalable backend systems.',
  },
  {
    title: 'Design & Branding',
    description:
      'Crafting visually appealing and user-centric designs, from logos and branding to UI/UX for digital products.',
  },
  {
    title: 'Marketing & Growth',
    description:
      'Helping businesses expand their reach with SEO, paid advertising, content marketing, and social media strategies.',
  },
  {
    title: 'Emerging Technologies',
    description:
      'Exploring the latest tech trends like AI, blockchain, AR/VR, and IoT to drive innovation and digital transformation.',
  },
  {
    title: 'IT & Consulting',
    description:
      'Providing expert guidance on IT infrastructure, digital transformation, and technology adoption strategies.',
  },
  {
    title: 'Support & Maintenance',
    description:
      'Ensuring your digital products run smoothly with ongoing maintenance, updates, and technical support.',
  },
  {
    title: 'Data & Analytics',
    description:
      'Turning raw data into actionable insights through business intelligence, data visualization, and performance tracking.',
  },
  {
    title: 'Collaboration Tools',
    description:
      'Enhancing teamwork with tools for project management, communication, and real-time collaboration.',
  },
];

export function Services() {
  return (
    <div className="pt-10 md:pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4">
        {grid.map((service) => (
          <div
            key={service.title}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-100 to-white p-6 dark:from-neutral-900 dark:to-neutral-950"
          >
            <Grid size={20} />
            <p className="relative z-20 font-bold text-base text-neutral-800 dark:text-white">
              {service.title}
            </p>
            <p className="relative z-20 mt-4 font-normal text-base text-neutral-600 dark:text-neutral-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="-ml-20 -mt-2 pointer-events-none absolute top-0 left-1/2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/30 to-zinc-300/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/10 stroke-black/10 mix-blend-overlay dark:fill-white/10 dark:stroke-white/10"
        />
      </div>
    </div>
  );
};

// biome-ignore lint/suspicious/noExplicitAny: not used
export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          <title>squares</title>
          {squares.map((item: number[], idx: number) => {
            const [x, y] = item;
            return (
              <rect
                strokeWidth="0"
                key={`${x}-${y}-${idx}`}
                width={width + 1}
                height={height + 1}
                x={x * width}
                y={y * height}
              />
            );
          })}
        </svg>
      )}
    </svg>
  );
}
