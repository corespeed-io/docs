import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";
import { docs } from "@/.source/server";
import { CoreSpeedSymbol } from "@/components/icons/corespeed";


const iconsMap = {
  ...icons,
  CoreSpeedSymbol,
}

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      return;
    }
    if (icon in iconsMap) return createElement(iconsMap[icon as keyof typeof icons]);
  },
});
