// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type SegmentValue = "override";
export const SegmentContext = React.createContext<SegmentValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useSegment() {
  return React.useContext(SegmentContext);
}

export default SegmentContext;
/* prettier-ignore-end */
