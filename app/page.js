import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Lemonade Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
