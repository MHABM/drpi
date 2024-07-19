'use client';

import Chat from "./ui/chat";
import Header from "./ui/header";

export default function Home(){
  return(
    <main className="max-w-2xl">
      <Header />
      <Chat />
    </main>
  )
}