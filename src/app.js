function app() {
  const contents = document.createElement('h1');
  contents.innerHTML = 'Hello webpack v4!';

  return contents;
}

document.body.appendChild(app());
