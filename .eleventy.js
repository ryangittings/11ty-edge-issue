const { EleventyEdgePlugin } = require("@11ty/eleventy");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyEdgePlugin);

  eleventyConfig.addShortcode("hey", function (firstName, lastName) {
    return `Hey, ${firstName} ${lastName}`;
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    passthroughFileCopy: true,
  };
};
