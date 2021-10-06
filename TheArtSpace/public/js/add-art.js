function showHideForm() {
  var postForm = document.getElementById('postForm');
  var artPosts = document.getElementById('blogart');
  var createartBtn = document.createElement('button');
  createartBtn.id = 'createartBtn';
  if (artForm.style.display === 'none') {
    artForm.style.display = 'block';
    if (blogart) {
      blogart.style.display = 'none';
    }
    document.getElementById('createArtBtn').textContent = 'Cancel';
  } else {
    artForm.style.display = 'none';
    if (blogart) {
      blogart.style.display = 'block';
    }
    document.getElementById('createArtBtn').textContent = 'Create New Post';
  }
}

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="content"]').value;

  const response = await fetch(`/api/gallery`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Please Login or Signup');
  }
}

document
  .querySelector('.new-art-form')
  .addEventListener('submit', newFormHandler);
document.querySelector('#createArtBtn').addEventListener('click', showHideForm);
