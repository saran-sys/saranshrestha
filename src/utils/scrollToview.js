export default function scrollTo(param) {
    const element = document.getElementById(param);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
    console.log('no element found')

}