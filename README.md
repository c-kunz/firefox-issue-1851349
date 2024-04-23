# Reproduction of Firefox Issue 1851349

This is a minimal reproduction web page hosted on an Express.js server to reproduce the Issue 1851349.

See [the Mozilla's Bugzilla Issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1851349) for further information.

## Steps to reproduce

1. `git clone <this repo>`
2. `cd <this repo>`
3. `npm install`
4. `node index.js`
5. Visit [http://localhost:3000](http://localhost:3000)
6. Manually change the `background-color` in `public/styles.css` from `blue` to some different color
7. On the web page, click the `Reload styles.css` button

## Expected result

1. The web page reloads and the background color is the color that was set manually in step 6

## Actual result

1. The web page keeps its old background color
2. Opening the style editor tab in the Developer panel, one can see that the new background color is shown, but it is not displayed.

## Possible Workarounds

1. Manually add a blank to the style editor in `styles.css`, **or**
2. Restart Firefox, **or**
3. Hit `CTRL+F5`, **or**
4. Reload using Firefox-only `forceGet` parameter set to true, like so: `window.location.reload(true)` (https://developer.mozilla.org/en-US/docs/Web/API/Location/reload#forceget)
