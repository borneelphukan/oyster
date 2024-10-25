import { CheckIcon } from "@heroicons/react/20/solid";

type Props = {
  label: string;
  description: string;
  price: string;
  priceSuffix: string;
  points: string[];
  href: string;
  popular?: boolean;
  isSelected: boolean;
  onClick: () => void;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const PriceCard = (props: Props) => {
  const {
    label,
    description,
    price,
    priceSuffix,
    points,
    href,
    popular = false,
    isSelected,
    onClick,
  } = props;
  return (
    <div
      onClick={onClick}
      className={classNames(
        isSelected
          ? "bg-white/5 ring-2 ring-indigo-500"
          : "ring-1 ring-white/10",
        "rounded-3xl p-8 xl:p-10 cursor-pointer transform transition-transform duration-200 hover:scale-105"
      )}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      <div className="flex items-center justify-between gap-x-4">
        <h2 className="text-lg font-semibold leading-8 text-white">{label}</h2>
        <div className="flex space-x-2">
          {popular && (
            <span className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
              Most Popular
            </span>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-300">{description}</p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-semibold tracking-tight text-white">
          {price}
        </span>
        <span className="text-sm font-semibold leading-6 text-gray-300">
          {priceSuffix}
        </span>
      </p>
      <a
        href={href}
        className={classNames(
          isSelected
            ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
            : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
          "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        )}
      >
        Buy plan
      </a>
      <ul
        role="list"
        className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
      >
        {points.map((point) => (
          <li key={point} className="flex gap-x-3">
            <CheckIcon
              aria-hidden="true"
              className="h-6 w-5 flex-none text-white"
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
