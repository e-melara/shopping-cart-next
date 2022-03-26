import { ReactElement } from "react";

export interface MenuItem {
  title: string;
  props?: any;
  icon: ReactElement
}

export interface Menu {
  user: MenuItem[],
  admin: MenuItem[]
}
