// The joins between pages (cross-document view transitions; a classic script in every page's <head>, so its pagereveal
// handler is in place before the first frame). The link the reader followed travels into the next page:
//   a subject link (nav, chip, card, lens button) becomes the hub's title: the word is carried across and grows into it;
// Everything else cross-fades: the old page dims out, the new one lights up, the nav stays put. Browsers without view
// transitions navigate as before.
(function () {
  var last = null;
  document.addEventListener('click', function (e) { last = e.target.closest && e.target.closest('a[href]'); }, true);
  var HUB = /(?:^|\/)(history|economics|geography)\.html$/, CHAPTER = /\/(history|economics|geography)\/[^/]+\.html$/;
  var path = function (u) { try { return new URL(u, location.href).pathname; } catch (e) { return ''; } };

  addEventListener('pageswap', function (e) {
    if (!e.viewTransition || !last) return;
    var to = path(e.activation && e.activation.entry ? e.activation.entry.url : last.href);
    if (path(last.href) !== to) return; // left by something else (back, a typed address)
    var hubTitle = document.querySelector('.s-hero__title');
    if (hubTitle) hubTitle.style.viewTransitionName = 'none';
    if (HUB.test(to) && !CHAPTER.test(to)) last.style.viewTransitionName = 'subj';
  });

  addEventListener('pagereveal', function (e) {
    if (!e.viewTransition) return;
    var root = document.documentElement, named = [];
    var title = document.querySelector('.s-hero__title');
    if (title) { title.style.viewTransitionName = 'subj'; named.push(title); root.dataset.vt = 'subj'; }
    e.viewTransition.finished.finally(function () { named.forEach(function (el) { el.style.viewTransitionName = ''; }); });
  });
  // back from the next page (bfcache): nothing stays named
  addEventListener('pageshow', function () { document.querySelectorAll('[style*="view-transition-name"]').forEach(function (el) { el.style.viewTransitionName = ''; }); });
})();
