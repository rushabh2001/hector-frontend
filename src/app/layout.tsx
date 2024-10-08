"use client";
import "../../styles/index.css";
import { useEffect } from "react";
import ScrollToTop from "../../components/hooks/scroll-to-top";
import { animationCreate } from "../../components/utils/utils";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../lib/ReactQuery";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
  // require("../../js/script.js");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Hector Amazon Reports | Unlease the Power of Advertising with Hector AI</title>
        <link
          rel="icon"
          href="../../assets/img/hector/favicon.ico"
          type="image/png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700|Rubik:400,500,700"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>
      </head> 
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
          <ScrollToTop />
        </QueryClientProvider>
      </body>
    </html>
  );
}
