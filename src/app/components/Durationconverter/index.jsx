export default function DurationConverter(duration) {
    let seconds = parseInt((duration / 1000) % 60)
    let minutes = parseInt((duration / (1000 * 60)) % 60)

    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
}