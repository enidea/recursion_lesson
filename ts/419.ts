type ParenthesisStart = '(' | '{' | '[';
const parenthesisStartList = ['(', '{', '['] satisfies ParenthesisStart[];
type ParenthesisEnd = ')' | '}' | ']';
const parenthesisEndList = [')', '}', ']'] satisfies ParenthesisEnd[];
const getParenthesisStart = (start: ParenthesisEnd) => {
  const map: Record<ParenthesisEnd, ParenthesisStart> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  return map[start];
};

function isParenthesesValid(parentheses: string): boolean {
  const stack: ParenthesisStart[] = [];

  for (const parenthesis of parentheses) {
    if (parenthesisStartList.includes(parenthesis as ParenthesisStart)) {
      stack.push(parenthesis as ParenthesisStart);
    }

    if (
      stack.length > 0 &&
      parenthesisEndList.includes(parenthesis as ParenthesisEnd) &&
      stack[stack.length - 1] ===
        getParenthesisStart(parenthesis as ParenthesisEnd)
    ) {
      stack.pop();

      continue;
    }

    if (parenthesisEndList.includes(parenthesis as ParenthesisEnd)) {
      return false;
    }
  }

  return stack.length === 0;
}
