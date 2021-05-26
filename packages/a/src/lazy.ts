// @ts-ignore
import { format } from "prettier/standalone";
import ts from "prettier/parser-typescript";
export default (code: string) => {
  return format(code, {
    parser: "typescript",
    plugins: [ts],
  });
};
