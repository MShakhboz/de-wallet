import { ReactNode } from "react";

export type TabProps =
    | {
          title: string;
          content: ReactNode;
          id: number;
      }
    | undefined;
