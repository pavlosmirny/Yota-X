import { IconType } from "react-icons";

export interface Technology {
  icon: IconType;
  name: string;
  color: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  category?: string;
  footer?: string;
  size?: "normal" | "large";
}
