// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Description
  ${data.description}
`;
}

module.exports = generateMarkdown;
