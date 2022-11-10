import Layout from '@block-components/layouts';
import { Box, Typography } from '@mui/material';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { EventObject } from '@toast-ui/calendar/types/types/events';
import { useEffect } from 'react';

export default function CalendarPage() {
  useEffect(() => {
    import('@toast-ui/calendar').then(({ default: Calendar }) => {
      new Calendar('#calendar', {
        defaultView: 'month',
        template: {
          time(event: EventObject) {
            const { start, end, title } = event;
            // TODO: 이벤트 시간 표시
            return `<span style="color: white;"> ${title}</span>`;
          },
          allday(event: EventObject) {
            return `<span style="color: gray;">${event.title}</span>`;
          },
        },
        calendars: [],
      });
    });
  }, []);

  return (
    <Layout>
      <Typography variant="h5" fontWeight="bold" pt={5} pb={5}>
        일정
      </Typography>

      <Box
        id="calendar"
        sx={{
          height: 1000,
          p: 4,
          backgroundColor: 'white',
          borderRadius: 2,
        }}
      ></Box>

      <Box height={100}></Box>
    </Layout>
  );
}
