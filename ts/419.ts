type ParenthesisStart = '(' | '{' | '[';
type ParenthesisEnd = ')' | '}' | ']';
type Parenthesis = ParenthesisStart | ParenthesisEnd;
const getParenthesisStart = (start: ParenthesisEnd) => {
  const map: Record<ParenthesisEnd, ParenthesisStart> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  return map[start];
};

function isParenthesesValid(parentheses: string): boolean {
  const stack: Parenthesis[] = [];

  for (const parenthesis of parentheses) {
    if (
      stack.length > 0 &&
      stack[stack.length - 1] ===
        getParenthesisStart(parenthesis as ParenthesisEnd)
    ) {
      stack.pop();

      continue;
    }

    stack.push(parenthesis as Parenthesis);
  }

  return stack.length === 0;
}
