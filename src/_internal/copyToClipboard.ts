import { spawn } from "node:child_process";

export function copyToClipboard(text: string): void {
  const pbcopy = spawn("pbcopy");
  pbcopy.stdin.write(text);
  pbcopy.stdin.end();
}
