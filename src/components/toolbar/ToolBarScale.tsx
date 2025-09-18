"use client";

import { useDevices } from "@/store/useDevices";
import { Slider } from "@/components/ui/slider";
import { useTranslations } from "next-intl";

export default function ToolBarScale() {
  const t = useTranslations("ToolBarScale");
  const { scale, setScale } = useDevices();

  return (
    <section className="mb-3">
      <h3 className="mb-1 text-foreground">{t("zoom")}</h3>
      <div className="flex items-center justify-between space-x-4">
        <Slider
          value={[scale * 100]}
          min={30}
          max={100}
          step={1}
          onValueChange={(val) => setScale(val[0] / 100)}
          className="w-full text-foreground"
        />
        <span className="text-sm text-foreground w-10 text-right">
          {Math.round(scale * 100)}%
        </span>
      </div>
    </section>
  );
}
