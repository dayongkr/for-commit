# for-commit

`for-commit` is a CLI tool that creates a prompt for generating a commit message using ChatGPT, Claude, or any other LLM or GPT tool.

To use it, simply run the command npx for-commit in a project directory managed by `git`. Once the command is executed, the tool generates a prompt based on the changes in your staged files, which you can then paste into ChatGPT, Claude, or any other LLM or GPT tool to generate a meaningful commit message.

> Note: Since `for-commit` relies on the `git` command, you need to have `git` installed on your machine.

## Example

```bash
npx for-commit # or pnpx for-commit
```

After running the command, you'll receive the following confirmation:

```bash
Prompt copied to clipboard 📋
```

At this point, you can paste the prompt into an AI tool to generate a well-structured commit message.
