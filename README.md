# Tweeter Project

Tweeter is a simple, single-page Twitter clone. The project was a front-end exercise, working to develop my skills with HTML, CSS, jQuery, AJAX, and front-end JS.

This project features responsive design across different screen-sizes. Hiding, showing, and altering elements as fit. The project also uses AJAX to asynchronously update the tweet feed whenever you post a new tweet, without the need to reload the page.

The new tweet form can be opened (or closed) by clicking the "write a new tweet" button in the navigation bar fixed at the top.

If you add some tweets and scroll down the page, the nav "write a new tweet" button will fade out and be replaced with a "scroll to top" button in the bottom right. This button also opens the new tweet menu, after smoothly scrolling back to the top of the page.

&nbsp;

---

## Getting Started

1. Install all [dependencies](#dependencies) (using the `npm install` command).
2. Run the development web server using the `npm start` command.
3. Go to <http://localhost:8080/> in your browser.

---

&nbsp;

## Final Product

!['Screenshot of URLs index page'](https://github.com/CorgiOnNeptune/tinyapp/blob/main/docs/urls-page.png?raw=true)

&nbsp;

<details>
  <summary>Screenshots of URLs stat pages</summary>

!['Screenshot of TinyURL stat page'](https://github.com/CorgiOnNeptune/tinyapp/blob/main/docs/urls-stats.png?raw=true)  
 !['Screenshot of TinyURL stat page w/ extra stats expanded'](https://github.com/CorgiOnNeptune/tinyapp/blob/main/docs/urls-stats-expanded.png?raw=true)
!['Screenshot of TinyURL stat page w/ no views'](https://github.com/CorgiOnNeptune/tinyapp/blob/main/docs/urls-stats-no-views-expanded.png?raw=true)

</details>
&nbsp;
<details>
  <summary>Screenshot of registration page</summary>
  
  !['Screenshot of registration page'](https://github.com/CorgiOnNeptune/tinyapp/blob/main/docs/registration-page.png?raw=true)

</details>

&nbsp;

---

## Dependencies

- Node 5.10.x or above
- Express
- Chance
- Body-Parser
