import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"

export const MuiTimeLine = () => {
    return (
        <Timeline position="left">
            <TimelineItem>
                <TimelineOppositeContent color={"text.secondary"}>
                    09:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={"secondary"} variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent >City A  </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color={"text.secondary"}>
                    10:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={"secondary"} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>  City B  </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color={"text.secondary"}>
                    11:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={"secondary"} variant="outlined" />
                    {/* <TimelineConnector /> */}
                </TimelineSeparator>
                <TimelineContent>City C </TimelineContent>
            </TimelineItem>
        </Timeline >
    )
}
