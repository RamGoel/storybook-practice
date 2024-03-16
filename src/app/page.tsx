import { Button } from "@/stories/components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      Hello

      <div className="border-2">
      <Button label="Hello World" size="medium" type='primary'/>
      </div>
    </main>
  );
}
