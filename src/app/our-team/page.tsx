import type { Metadata } from "next";
import OurTeamClient from "./OurTeamClient";

export const metadata: Metadata = {
  title: "Our Team | Prime Care Group",
  description:
    "Meet the dedicated team of nurses, carers and support staff who make Prime Care Group the caring, compassionate organisation it is.",
};

export default function OurTeamPage() {
  return <OurTeamClient />;
}
