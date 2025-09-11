import { TimelineComponent } from "@/components/timeline";

export default function Journey() {
  return (
    <div className="space-y-12 flex flex-col md:flex-row items-baseline">
      <h2 className="text-5xl font-normal">Minha Jornada</h2>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        <TimelineComponent />
      </div>
    </div>
  );
}
