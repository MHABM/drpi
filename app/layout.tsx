import type { Metadata } from "next";
import "./globals.css";
import {iranyekan} from '@/app/fonts'

export const metadata: Metadata = {
  title: "دکترپی، دستیار پزشکی شما",
  description: "سلام! من دستیار سلامتی شما هستم. ساخته شده ام تا به پرسش های پزشکی و دندانپزشکی پاسخ بدم هر سوالی در این خصوص داری از من بپرس",
};

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${iranyekan.className} flex justify-center`}>{children}</body>
    </html>
  );
}
