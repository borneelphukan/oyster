import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import PriceCard from "../component/card/PriceCard";

type Frequency = "monthly" | "annually";

type FrequencyOption = {
  value: Frequency;
  label: string;
  priceSuffix: string;
};

type PricingTier = {
  name: string;
  id: string;
  href: string;
  price: Record<Frequency, string>;
  description: string;
  features: string[];
  mostPopular: boolean;
};

type Pricing = {
  frequencies: FrequencyOption[];
  tiers: PricingTier[];
};

const pricing: Pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "Mini Pack",
      id: "tier-mini",
      href: "#",
      price: { monthly: "₹75", annually: "₹900" },
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      mostPopular: false,
    },
    {
      name: "Regular Pack",
      id: "tier-regular",
      href: "#",
      price: { monthly: "₹120", annually: "₹1440" },
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      mostPopular: true,
    },
    {
      name: "Professional Pack",
      id: "tier-professional",
      href: "#",
      price: { monthly: "₹240", annually: "₹2880" },
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom reporting tools",
      ],
      mostPopular: false,
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [frequency, setFrequency] = useState<FrequencyOption>(
    pricing.frequencies[0]
  );

  const [selectedTier, setSelectedTier] = useState<PricingTier>(
    pricing.tiers.find((tier) => tier.mostPopular) || pricing.tiers[0]
  );

  return (
    <div className="sm:pt-32 pt-16">
      <main>
        {/* Pricing section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base font-semibold leading-7 dark:text-indigo-400 text-indigo-950">
              Pricing
            </h1>
            <p className="mt-2 text-balance text-5xl font-semibold tracking-tight dark:text-white sm:text-6xl">
              Price tailored as per your needs
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-200 dark:text-gray-400 sm:text-xl/8">
            Choose an affordable plan that’s packed with the best tools for
            better data analysis and more diverse sources
          </p>
          <div className="mt-16 flex justify-center">
            <fieldset aria-label="Payment frequency">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-2 gap-x-1 rounded-full bg-gray-400 p-1 text-center text-xs font-semibold leading-5 dark:text-white"
              >
                {pricing.frequencies.map((option) => (
                  <Radio
                    key={option.value}
                    value={option}
                    className={({ checked }) =>
                      classNames(
                        checked ? "bg-cyan-500 text-white" : "",
                        "cursor-pointer rounded-full px-2.5 py-1"
                      )
                    }
                  >
                    {option.label}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-10">
            {pricing.tiers.map((tier) => (
              <PriceCard
                key={tier.id}
                label={tier.name}
                description={tier.description}
                price={tier.price[frequency.value]}
                priceSuffix={frequency.priceSuffix}
                points={tier.features}
                href={tier.href}
                popular={tier.mostPopular}
                isSelected={selectedTier.id === tier.id}
                onClick={() => setSelectedTier(tier)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
