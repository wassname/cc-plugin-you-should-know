# cc-plugin-you-should-know

Claude Code's `cc-plugin-you-should-know` plugin, extracted from version 2.1.292 for research and to reproduce its observer behavior in Pi.

**Start with the [main observer prompt](claude-code-2.1.292/observer-prompt.md).** The [formatted implementation](claude-code-2.1.292/plugin.js) and its [original bundled code](claude-code-2.1.292/plugin.raw.js) are also included.

## Extraction

Extracted using tweakcc's [`extractClaudeJsModulesFromNativeInstallation()`](https://github.com/Piebald-AI/tweakcc/blob/a37dd148fae93d89ec7cec3e3bddf5f46395cef0/src/nativeInstallation.ts#L1210). It reads the JavaScript modules embedded in the native Claude Code binary. This repository retains the observer plugin and its discovery tip, rather than the whole application.

## How it works

- Periodically sends the current conversation, including tool results, to a separate request using the same model as the main session, not necessarily Haiku.
- Uses the observer prompt to look for one consequential thing the user may have missed: a tradeoff, an unexplained decision, or a questionable result. It should usually reply `learn: none`.
- Has no tools and does not interrupt or change the main agent's work.
- Shows a short note above the input, with an explanation available if the user wants it.
- Remembers suggested and understood topics to avoid repeats, and reduces checks when suggestions are ignored.

In this version, checks are eligible every six main-agent steps, subject to other conditions. Notes remain outside the main conversation unless the user chooses to discuss them there.

## Why this is here

Wassname finds this notable because many users say it works very well. The aim is to try the same prompt and a similar setup in Pi, rather than build a different session summarizer.

<!-- README prepared by PI/OpenAI at wassname's request. Extracted code and prompt retain their original attribution. -->
