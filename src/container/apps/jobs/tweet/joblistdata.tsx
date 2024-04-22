interface TweetData {
  id: number;
  url: string;
  tweetid: string;
  tweetrec: string;
  sent: string;
  action: string;
}
export const Tweetdata: TweetData[] = [
  {
    id: 1,
    url: "www.ridhi.com",
    tweetid: " 3636326326",
    tweetrec: "Yes",
    sent: "Yes",
    action: "Check",
  },
  {
    id: 2,
    url: "www.ridhi.com",
    tweetid: "124215556",
    tweetrec: "Yes",
    sent: "Yes",
    action: "Not-Check",
  },
  {
    id: 3,
    url: "www.ridhi.com",
    tweetid: " 4647434466",
    tweetrec: "No",
    sent: "No",
    action: "Check",
  },
];

interface TweetData1 {
  id: number;
  alerts: string;
  status: string;
  time: string;
}
export const Tweetdata1: TweetData1[] = [
  {
    id: 1,
    alerts: "www.ridhi.com",
    status: "ok",
    time: "2:00 PM",
  },
  {
    id: 2,
    alerts: "www.ridhi.com",
    status: "No-ok",
    time: "5:00 AM",
  },
  {
    id: 3,
    alerts: "www.ridhi.com",
    status: "ok",
    time: "3:00 AM",
  },
];
