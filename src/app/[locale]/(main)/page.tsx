import { GreetingSalute } from "@/components/dashboard/GreetingSalute";
import { Card, Grid } from "@mui/material";

export async function generateMetadata() {
  return {
    title: ``,
    description: ``,
  };
}

export default async function HomePage() {
  return (
    <>
      <GreetingSalute />

      <Grid container spacing={3}>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          {/*<ClockCard />*/}
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {/*<TodayRing />*/}
          </Card>
        </Grid>
        {/* TODO: Add WeekBar and RecentSessions later */}
      </Grid>
    </>
  );
}
