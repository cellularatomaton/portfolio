// const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");
const tailwindConfig = require("./tailwind.config.js");

module.exports = function(eleventyConfig) {

  eleventyConfig.addGlobalData("tailwindColors", tailwindConfig.exportedColors);

  const companiesData = require("./src/_data/companies.json");
  eleventyConfig.addCollection("companies", function () {
    return companiesData;
  });

  const portfolio = require("./src/_data/portfolio.json");
  eleventyConfig.addCollection("projects", function(collectionApi) {
    const md = new markdownIt();

    // Extend markdown-it to rewrite paths
    md.core.ruler.push("rewrite_image_and_link_paths", function(state) {
      const projectSlug = state.env.projectSlug || ""; // Get project slug from environment

      state.tokens.forEach(token => {
        if (token.type === "inline" && token.children) {
          token.children.forEach(child => {
            // Rewrite image paths (![]())
            if (child.type === "image") {
              child.attrSet("src", `/projects/${projectSlug}/${child.attrGet("src")}`);
            }

            // Rewrite link paths ([]())
            if (child.type === "link_open") {
              const href = child.attrGet("href");
              if (href && !href.startsWith("http") && !href.startsWith("/")) {
                child.attrSet("href", `/projects/${projectSlug}/${href}`);
              }
            }
          });
        }
      });
    });

    return portfolio.map(project => {
      const markdownPath = path.join(__dirname, `src/projects/${project['project-slug']}/details.md`);
      if (fs.existsSync(markdownPath)) {
        const env = { projectSlug: project['project-slug'] };
        project.details = md.render(fs.readFileSync(markdownPath, "utf-8"), env);
      } else {
        const projectHasDetailsString = project.details && project.details !== "";
        if(!projectHasDetailsString){
          project.details = "<p>Details not available.</p>";
        }
      }
      return project;
    });
  });
  
  // Copy project images dynamically
  portfolio.forEach(project => {
    eleventyConfig.addPassthroughCopy({
      [`src/projects/${project['project-slug']}/img`]: `projects/${project['project-slug']}/img`,
      [`src/projects/${project['project-slug']}/docs`]: `projects/${project['project-slug']}/docs`
    });
  });

  eleventyConfig.addCollection("skillCounts", function (collectionApi) {
    const skillCounts = {};

    portfolio.forEach(project => {
      if (project.skills) {
        project.skills.forEach(skill => {
          skillCounts[skill] = (skillCounts[skill] || 0) + 1;
        });
      }
    });
    
    return Object.entries(skillCounts)
      .map(([skill, count]) => ({ skill, count }))
      .sort((a, b) => b.count - a.count);
  });

  eleventyConfig.addCollection("toolCounts", function (collectionApi) {
    const toolCounts = {};

    portfolio.forEach(project => {
      
      if (project.tools) {
        project.tools.forEach(tool => {
          toolCounts[tool] = (toolCounts[tool] || 0) + 1;
        });
      }
    });
    return Object.entries(toolCounts)
      .map(([tool, count]) => ({ tool, count }))
      .sort((a, b) => b.count - a.count);
  });

  eleventyConfig.addCollection("languageCounts", function (collectionApi) {
    const languageCounts = {};

    portfolio.forEach(project => {
      if (project.languages) {
        project.languages.forEach(language => {
          languageCounts[language] = (languageCounts[language] || 0) + 1;
        });
      }
    });
    
    return Object.entries(languageCounts)
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count);
  });

  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.setServerOptions({
    watch: ['./public/css/styles.css']
  });

  eleventyConfig.addFilter("jsonify", function(obj) {
    return JSON.stringify(obj);
  });

  eleventyConfig.addFilter("filterByCompany", (projects, companySlug) => {
    return projects.filter(project => project['company-slug'] === companySlug);
  });

  eleventyConfig.addFilter("findCompany", (slug, companies) => {
    return companies.find(company => company.slug === slug);
  });

  

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}