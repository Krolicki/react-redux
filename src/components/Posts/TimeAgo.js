import { formatDistanceToNow, parseISO } from "date-fns"

const TimeAgo = ({ timestapm }) => {
    let timeAgo = ''

    if(timestapm) {
        timeAgo = formatDistanceToNow(parseISO(timestapm))
    }

    return (
        <i>{timeAgo} ago</i>
    )
}
export default TimeAgo