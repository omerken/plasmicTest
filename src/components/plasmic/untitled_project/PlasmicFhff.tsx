// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: akmHL7cLduyNG7qpZ1XTQy
// Component: AloX4rELCm
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_untitled_project.module.css"; // plasmic-import: akmHL7cLduyNG7qpZ1XTQy/projectcss
import sty from "./PlasmicFhff.module.css"; // plasmic-import: AloX4rELCm/css

export type PlasmicFhff__VariantMembers = {};

export type PlasmicFhff__VariantsArgs = {};
type VariantPropType = keyof PlasmicFhff__VariantsArgs;
export const PlasmicFhff__VariantProps = new Array<VariantPropType>();

export type PlasmicFhff__ArgsType = {};
type ArgPropType = keyof PlasmicFhff__ArgsType;
export const PlasmicFhff__ArgProps = new Array<ArgPropType>();

export type PlasmicFhff__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultFhffProps {
  className?: string;
}

function PlasmicFhff__RenderFunc(props: {
  variants: PlasmicFhff__VariantsArgs;
  args: PlasmicFhff__ArgsType;
  overrides: PlasmicFhff__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Text\n"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFhff__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFhff__VariantsArgs;
    args?: PlasmicFhff__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFhff__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFhff__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFhff__ArgProps,
      internalVariantPropNames: PlasmicFhff__VariantProps
    });

    return PlasmicFhff__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFhff";
  } else {
    func.displayName = `PlasmicFhff.${nodeName}`;
  }
  return func;
}

export const PlasmicFhff = Object.assign(
  // Top-level PlasmicFhff renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicFhff
    internalVariantProps: PlasmicFhff__VariantProps,
    internalArgProps: PlasmicFhff__ArgProps
  }
);

export default PlasmicFhff;
/* prettier-ignore-end */
