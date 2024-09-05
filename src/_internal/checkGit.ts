import { exec } from "node:child_process";

export function checkGit() {
  exec("git --version", (error) => {
    if (error) {
      throw new Error("Please install git before running this script");
    }
  });
}
