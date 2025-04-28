// Load bài viết từ posts.json
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const list = document.getElementById('post-list');
    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post-card';
      div.innerHTML = `
        <h2><a href="${post.url}">${post.title}</a></h2>
        <p><small>${post.date}</small></p>
        <p>${post.description}</p>
      `;
      list.appendChild(div);
    });
  })
  .catch(error => console.error('Lỗi khi load bài viết:', error));

// Dark mode toggle
const toggle = document.getElementById('toggle-theme');
  toggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  });
