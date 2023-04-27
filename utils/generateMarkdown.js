// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (responses.license === 'Apache License 2.0') {
    return image
  }
  if (responses.license === 'GNU General Public License v3.0') {
    return
  }
  if (responses.license === 'MIT License') {
    return
  }
  if (responses.license === 'BSD 2-Clause "Simplified" License') {
    return
  }
  if (responses.license === 'BSD 3-Clause "New" or "Revised" License') {
    return
  }
  if (responses.license === 'Boost Software License 1.0') {
    return
  }
  if (responses.license === 'Creative Commons Zero v1.0 Universal') {
    return
  }
  if (responses.license === 'Eclipse Public License 2.0') {
    return
  }
  if (responses.license === 'GNU Affero General Public License v3.0') {
    return
  }
  if (responses.license === 'GNU General Public License v2.0') {
    return
  }
  if (responses.license === 'GNU Lesser General Plubic LIcense v2.1') {
    return
  }
  if (responses.license === 'Mozilla Public License 2.0') {
    return
  }
  if (responses.license === 'The Unlicense') {
    return
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
