import Image from "next/image"
import { Card } from "@repo/ui/card"
import { IsDarkTheme } from "@/components/core/is-dark-theme"
import styles from "./page.module.css"
import { IsLightTheme } from "@/components/core/is-light-theme"

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean
  conic?: boolean
  className?: string
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  )
}

const LINKS = [
  {
    title: "What Is Fuel",
    href: "https://fuel.network/about-fuel",
    description:
      "Learn about the Fuel Network, its purpose, and its mission.",
  },
  {
    title: "Documentation",
    href: "https://docs.fuel.network/docs/intro/what-is-fuel/",
    description: "Find in-depth information about the Fuel Network.",
  },
  {
    title: "Bridge",
    href: "https://app.fuel.network/bridge?from=eth&to=fuel",
    description: "Transfer assets between Ethereum and the Fuel Network.",
  },
  {
    title: "Explorer",
    href: "https://app.fuel.network/",
    description: "Search for transactions, addresses, and blocks.",
  },
]

export default function Page(): JSX.Element {
  return (
    <div
      className={
        "bg-white dark:bg-black flex flex-col items-center justify-between min-h-[90vh] py-10"
      }
    >
      <div className={styles.description}>
        <p className="p-3 bg-black/50 text-white rounded-sm">
          Fuel App Template
        </p>
        <div>
          <a
            href="https://fuel.network"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-500 dark:text-gray-400"
          >
            Powered By{" "}
            <IsLightTheme>
              <Image
                alt="Fuel Network"
                height={24}
                priority
                src="/images/fuel-dark.png"
                width={100}
              />
            </IsLightTheme>
            <IsDarkTheme>
              <Image
                alt="Fuel Network"
                height={24}
                priority
                src="/images/fuel-white.png"
                width={100}
              />
            </IsDarkTheme>
          </a>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logos}>
            <div className={styles.circles}>
              <Image
                alt=""
                height={614}
                src="circles.svg"
                width={614}
                style={{ pointerEvents: "none" }}
              />
            </div>
            <div className={"logoGradientContainer"}>
              <Gradient className={"logoGradient bg-gradient-to-r from-emerald-500 to-emerald-900"} small />
            </div>

            <div className={styles.logo}>
              <Image
                className="rounded-full"
                alt="Gassed"
                height={120}
                priority
                src="/images/gassed.png"
                width={120}
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>
          <Gradient className={"backgroundGradient bg-gradient-to-r from-emerald-500 to-emerald-900"} />
        </div>
      </div>

      <div className={styles.grid}>
        {LINKS.map(({ title, href, description }) => (
          <Card className={styles.card} href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </div>
  )
}
