import { Montserrat, Nunito_Sans, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const cedarvilleCursive = Cedarville_Cursive({
  variable: "--font-cedarville-cursive",
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Yugabdh Pashte | Software Engineer | Full-stack Developer",
  description: "Hello, my name is Yugabdh Pashte, and I am a full-stack developer. I can create highly customized websites and applications for you.",
  keywords: ['web developer', 'freelancer', 'full stack web developer', 'web developer portfolio', 'yugabdh', 'yugabdh pashte', 'yugabdh portfolio', 'yugabdh github'],

  openGraph: {
    title: 'Yugabdh Pashte | Software Engineer | Full-stack Developer',
    description: 'Hello, my name is Yugabdh Pashte, and I am a full-stack developer. I can create highly customized websites and applications for you. Take a peek over my portfolio.',
    url: 'https://yugabdh.com',
    siteName: 'Yugabdh Pashte | Software Engineer | Full-stack Developer',
    images: [
      {
        url: 'https://yugabdh.com/og.jpg',
        width: 1920,
        height: 1278,
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary',
    title: 'Yugabdh Pashte | Software Engineer | Full-stack Developer',
    description: 'Hello, my name is Yugabdh Pashte, and I am a full-stack developer. I can create highly customized websites and applications for you. Take a peek over my portfolio.',
    site: '@yugabdh',
    creator: '@yugabdh',
    images: ['https://yugabdh.com/og.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="yandex-verification" content="853897ebe2f08364" />
      </Head>
      <body
        className={`${montserrat.variable} ${nunitoSans.variable} ${cedarvilleCursive.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
