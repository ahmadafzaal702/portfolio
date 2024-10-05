export const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
        });
    }
};