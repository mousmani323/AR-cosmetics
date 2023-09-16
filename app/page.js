import Content from "@/components/Content";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Image className="rounded-3xl" width={900} height={400} src="/home.jpg" alt=""></Image>
      <Content />
    </main>
  )
}
