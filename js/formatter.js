// Format HTML
function formatHTML(html) {
    
}


// Format CSS
function formatCSS(css) {
  var formatted = css.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
  return formatted;
}
// Format JavaScript
function formatJS(js) {
  var formatted = js.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
  return formatted;
}
