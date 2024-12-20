import ReactMarkdown from "react-markdown";

const markdownText = `
# Über Z-Car
## Über 

`
function MarkdownComponent() {
  return (
    <section>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </section>
  );
}

export default MarkdownComponent; 