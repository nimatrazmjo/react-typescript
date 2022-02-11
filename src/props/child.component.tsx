import React from "react";
import { ChildProps } from "../interfaces/child-props.interface";

export const Child = ({ name }: ChildProps) => (
    <span>{name}</span>
)

// doest work with
// Child.displayName

export const ChildAsFC: React.FC<ChildProps> = ({ name }) => (
    <span>{name}</span>
)

// works
// ChildAsFC.displayName