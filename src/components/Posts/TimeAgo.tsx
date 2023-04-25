import { formatDistanceToNow, parseISO } from "date-fns"

const TimeAgo = ({ timestapm } : { timestapm: string | undefined}) => {
    let timeAgo = ''

    if(timestapm) {
        timeAgo = formatDistanceToNow(parseISO(timestapm))
    }

    return (
        <i>{timeAgo} ago</i>
    )
}
export default TimeAgo