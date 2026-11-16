/* MathJax is included locally. No CDN, analytics, or advertising code. */
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)'], ['$', '$']],
    displayMath: [['\\[', '\\]'], ['$$', '$$']],
    processEscapes: true,
    tags: 'ams',
    macros: {
      R: '\\mathbb{R}',
      N: '\\mathbb{N}',
      Z: '\\mathbb{Z}',
      C: '\\mathbb{C}',
      eps: '\\varepsilon',
      dd: '\\,\\mathrm{d}',
      Ric: '\\operatorname{Ric}',
      grad: '\\operatorname{grad}',
      vol: '\\operatorname{vol}'
    }
  },
  svg: { fontCache: 'global' },
  options: { skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] }
};
