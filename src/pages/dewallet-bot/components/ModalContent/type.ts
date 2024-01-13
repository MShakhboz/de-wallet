import { ReactNode } from "react";

export type TabProps =
    | {
          title: string;
          content: ReactNode;
          id: string;
      }
    | undefined;

export type StyleProp = {
    tabId: string | undefined;
};
