'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var search = document.querySelector('[data-search]');
  if (search) {
    var input = search.querySelector('input');
    var results = search.querySelector('[data-search-results]');
    var status = search.querySelector('[data-search-status]');
    var items = Array.from(results.querySelectorAll('li'));
    if (items.length) search.hidden = false;
    input.addEventListener('input', function () {
      var query = input.value.trim().toLocaleLowerCase();
      var count = 0;
      items.forEach(function (item) {
        var visible = query.length > 0 && item.textContent.toLocaleLowerCase().includes(query);
        item.hidden = !visible;
        if (visible) count++;
      });
      results.hidden = !query || !count;
      status.hidden = !query;
      status.textContent = count ? '找到 ' + count + ' 篇文章' : '没有找到匹配的标题';
    });
  }

  var body = document.querySelector('[data-article-body]');
  var tocSection = document.querySelector('[data-toc-section]');
  if (body && tocSection) {
    var headings = Array.from(body.querySelectorAll('h2, h3'));
    if (headings.length > 1) {
      var toc = tocSection.querySelector('[data-toc]');
      headings.forEach(function (heading, index) {
        if (!heading.id) {
          var candidate = 'section-' + (index + 1);
          while (document.getElementById(candidate)) candidate += '-a';
          heading.id = candidate;
        }
        var item = document.createElement('li');
        if (heading.tagName === 'H3') item.className = 'toc-subheading';
        var link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        item.appendChild(link);
        toc.appendChild(item);
      });
      tocSection.hidden = false;
    }
  }
});
