import type { Metadata } from "next";
import React from "react";
import '@/src/app/styles/index.scss'
import PageContainer from "@/src/shared/ui/page-container/PageContainer";
import FloatingBall from "@/src/shared/ui/floating-ball/FloatingBall";
import Footer from "@/src/widgets/footer/ui/Footer";
import Header from "@/src/widgets/header/ui/Header";


export const metadata: Metadata = {
  title: "Celestia Bridge Node Health Checker",
  description: "Welcome to DTEAM's Celestia Bridge Health Checker, the ultimate tool for ensuring the reliability and security of your Celestia bridge node. Designed with the community in mind, this checker allows you to easily verify the health of your bridge nodes. Simply enter your IP, port, and authentication token to get started.\n",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body style={{overflowX: "hidden"}}>
      <PageContainer>
        <Header />
        {children}
        <FloatingBall left="10%" top="20%" size="30vw" animationDuration={3} imageUrl={"/images/celestia.png"}/>
        <FloatingBall left="70%" top="50%" size="50vw" animationDuration={5} imageUrl={"/images/celestia.png"}/>
      </PageContainer>
      <Footer/>
    </body>
    </html>
  );
}
