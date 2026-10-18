// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.292
import { Pi } from "/$bunfs/root/chunk-0pgvw5hh.js";
import { Moo, Vv, HYt } from "/$bunfs/root/chunk-tg7868sc.js";
import { Ln } from "/$bunfs/root/chunk-68hq5pbs.js";
var bue = "cc-plugin-you-should-know";
var L2n = {
  id: "you-should-know-plugin",
  providerAgnostic: !0,
  advertisedCommand: "plugin",
  cooldownSessions: 10,
  maxLifetimeShows: 3,
  content: async (
    o,
  ) => `Want a side agent watching your back while Claude works? Turn on You should know:
${Ln("suggestion", o.theme)(`/plugin enable ${bue}@${Pi}`)}`,
  isRelevant: async () =>
    Moo(bue) &&
    Vv(bue)?.defaultEnabled === !1 &&
    HYt(`${bue}@${Pi}`) === void 0,
};
export { bue, L2n };
