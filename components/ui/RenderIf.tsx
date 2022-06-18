import { FC } from "react";

interface Props {
  isTrue: boolean;
  children: React.ReactNode;
}

export const RenderIf: FC<Props> = ({ isTrue, children }) => {
  return isTrue ? <>{children}</> : null;
};
