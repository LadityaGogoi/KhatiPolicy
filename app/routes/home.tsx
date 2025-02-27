import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Khati Web Page" },
    { name: "description", content: "Queries for Playstore!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
