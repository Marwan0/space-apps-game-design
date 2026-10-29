// One-minute spec template and the AI prompt. Shared by index.html (slides 24 and 28) and prompt.html.
const AI_KIT = (() => {
  const BLANK = [
    "ONE-MINUTE GAME SPEC",
    "1. Goal (one sentence):",
    "2. Three variables (name, start value, change per turn):",
    "   - ",
    "   - ",
    "   - ",
    "3. Two decisions (what each one adds and costs, in numbers):",
    "   - ",
    "   - ",
    "4. Rule table (IF ... THEN ...):",
    "   - ",
    "5. End state (win and lose):",
  ].join("\n");
  // The prompt that turns a spec into a first playable draft (slides "Prototype with AI" and the template)
  const AI_PROMPT = [
    "You are helping a team of first-time game makers at NASA Space Apps build a prototype.",
    "Build ONE self-contained HTML file (HTML, CSS and JavaScript, no libraries, no internet) that runs by double-clicking it.",
    "Use exactly the goal, variables, decisions and rules in my spec below. Do not invent science or numbers: if something is missing, ask me before you write code.",
    "Show each variable as a big meter: green when safe, yellow as a warning, red when critical.",
    "Give the player one button per decision. Each click is one turn: apply the decision, then the rules. After each click, show what changed in numbers (for example \"oxygen -20\").",
    "Show a clear win or lose screen and a Restart button.",
    "Before the code, check my numbers: if one button always wins, or a decision never matters, tell me which numbers to change.",
    "Keep the code short, with a comment above each rule.",
    "After the code, list the rules you built in plain English so we can check them against the spec.",
    "",
    "MY SPEC:",
  ].join("\n");
  return { BLANK, AI_PROMPT };
})();
