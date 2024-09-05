#!/usr/bin/env node

import { execSync } from "node:child_process";
import { copyToClipboard } from "./_internal/copyToClipboard";
import { checkGit } from "./_internal/checkGit";
import { createPrompt } from "./_internal/createPrompt";

function run() {
  try {
    checkGit();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }

  const stagedChanges = execSync("git diff --cached");
  const commitMessage = execSync("git log -30 --pretty=format:%s");
  const prompt = createPrompt(
    stagedChanges.toString(),
    commitMessage.toString()
  );

  copyToClipboard(prompt);
  console.log("Prompt copied to clipboard 📋");
}

run();
