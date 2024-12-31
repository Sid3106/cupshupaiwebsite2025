export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const navbarHeight = 80; // Height of fixed navbar
  const targetPosition = section.offsetTop - navbarHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

export function isElementInViewport(element: HTMLElement, offset = 80) {
  const rect = element.getBoundingClientRect();
  return rect.top <= offset && rect.bottom >= offset;
}