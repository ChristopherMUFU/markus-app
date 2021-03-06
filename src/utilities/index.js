export const smoothScroll = (to) => (e) => {
  e.preventDefault();
  e.stopPropagation();

  const href = e.target.hash || "#" + to; // '#projects'
  const offsetTop =
    document.querySelector(href)?.offsetTop - 60 ||
    document.querySelector(href)?.scrollTop - 60;

  // console.log({ href, offsetTop });

  window.scroll({
    top: offsetTop || 0,
    behavior: "smooth",
  });
};

export function debounce(cb, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export function isIntersecting(el_id) {
  const element = document.getElementById(el_id);
  const scrollTop_el = element?.offsetTop || element?.scrollTop || 0;
  const height_el = element?.clientHeight || 0; // element a la moitié
  const height_window = window.innerHeight;
  const window_scrollTop = document.documentElement.scrollTop;

  // console.log(scrollTop_el);
  // console.log(height_el);
  // console.log(height_window);
  // console.log(window_scrollTop);

  if (scrollTop_el - 150 < window_scrollTop) {
    // console.log("active", element);
    // console.log(scrollTop_el, window_scrollTop, element);
    return true;
  }

  return false;
}
