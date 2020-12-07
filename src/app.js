import './app.css'

const target = document.querySelector('#target')

ramdaRepl(target, {
  apiUrl: 'https://tinyurl.com/api-create.php',
  returnUrl: document.location.host,
  initialValue: decodeURI(window.location.hash).substring(2),
  onChange : code => {
    window.location.hash = `?${encodeURI(code)}`
  },
  ramdaScript: {
    src: 'vendor/ramda.js',
    global : 'R',
  },
  scripts: [
    {
      src: 'vendor/ramda-adjunct.js',
      global: 'RA',
    },
    {
      src: 'vendor/funky.js',
      global: 'F',
    },
  ],
})
