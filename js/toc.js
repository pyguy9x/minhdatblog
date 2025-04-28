document.addEventListener('DOMContentLoaded', function () {
  const toc = document.createElement('div');
  toc.id = 'toc';
  toc.innerHTML = '<h3>Mục lục</h3>';
  
  const headings = document.querySelectorAll('h2, h3');
  headings.forEach(h => {
    const link = document.createElement('a');
    const id = h.textContent.trim().toLowerCase().replace(/\s+/g, '-');
    h.id = id;
    link.href = '#' + id;
    link.textContent = h.textContent;
    link.style.display = 'block';
    link.style.marginLeft = h.tagName === 'H3' ? '1rem' : '0';
    toc.appendChild(link);
  });
  
  document.body.insertBefore(toc, document.body.firstChild);
});
