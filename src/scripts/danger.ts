import { reportDisabled } from '../reportDisabled';

const table = ({
  heading,
  headings,
  rows,
}: {
  heading: string;
  headings: string[];
  rows: string[][];
}) => `#### ${heading}

|${headings.join('|')}|
|${headings.map(() => '---').join('|')}|
${rows.map((row) => `|${row.join('|')}|`).join('\n')}
`;

export const dangerReport = async () => {
  const directives = await reportDisabled({});
  const heading = 'Lintervention Report';
  const headings = ['Count', 'Rule'];

  if (directives.length === 0) {
    return `#### ${heading}

✨ No ESLint rules ignored!`;
  }

  const rows = directives.map(({ count, rule }) => [count, rule]);

  return table({ heading, headings, rows });
};