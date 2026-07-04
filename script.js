// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Boot log typing effect
// const lines = [
//   "[ OK ] mounting ~/projects",
//   "[ OK ] user: MalTheLegend104",
//   "[ OK ] languages: C, C++, x86_64 asm",
//   "[ OK ] Current focus: Filesystem development",
//   "> whoami",
//   "Computer Science Student / Low Level Programmer"
// ];
const lines = [
  "Initializing...",
  "[ OK ] Projects loaded",
  "[ OK ] About loaded",
  "[ OK ] Contact loaded",
  "System ready.",
  "",
  "$ "
];

const target = document.getElementById("boot-log");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderStatic() {
  target.textContent = lines.join("\n");
}

const CURSOR = "█";

function render(text) {
  target.textContent = text + CURSOR;
}

function typeLines() {
  let lineIndex = 0;
  let charIndex = 0;
  let output = "";

  function step() {
  if (lineIndex >= lines.length) {
    render(output);
    return;
  }

  const currentLine = lines[lineIndex];

  if (charIndex < currentLine.length) {
    output += currentLine[charIndex++];
    render(output);
    setTimeout(step, 14);
  } else {
    lineIndex++;
    charIndex = 0;

    if (lineIndex < lines.length) {
      output += "\n";
    }

    target.textContent = output + "█";
    setTimeout(step, 220);
  }
}

  step();
}

if (prefersReducedMotion) {
  renderStatic();
} else {
  typeLines();
}