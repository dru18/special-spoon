// 🌺 जय माँ काली! 🌺
// Add RSS and Atom feed links to <head>
const HEAD = document.querySelector("head");

const FEEDS = [
  { type: "application/rss+xml", href: "/rss.xml", title: "RSS Feed" },
  { type: "application/atom+xml", href: "/atom.xml", title: "Atom Feed" },
];

FEEDS.forEach(feed => {
  const link = document.createElement("link");
  link.setAttribute("rel", "alternate");
  link.setAttribute("type", feed.type);
  link.setAttribute("title", feed.title);
  link.setAttribute("href", feed.href);
  HEAD.appendChild(link);
});

