export default function setDate(secArrow, minArrow, hourArrow) {
    secArrow.style.transfrom = 'none';
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secArrow.style.webkitTransform = `rotateZ(${secondsDegrees}deg)`;
    secArrow.style.msTransform = `rotateZ(${secondsDegrees}deg)`;
    secArrow.style.transform = `rotateZ(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    // const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;  //более плавный
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minArrow.style.webkitTransform = `rotateZ(${minutesDegrees}deg)`;
    minArrow.style.msTransform = `rotateZ(${minutesDegrees}deg)`;
    minArrow.style.transform = `rotateZ(${minutesDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourArrow.style.webkitTransform = `rotateZ(${hourDegrees}deg)`;
    hourArrow.style.msTransform = `rotateZ(${hourDegrees}deg)`;
    hourArrow.style.transform = `rotateZ(${hourDegrees}deg)`;
}
