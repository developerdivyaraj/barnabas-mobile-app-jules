import { Paper, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const userGrowthData = [
  { name: 'Mon', users: 4000 },
  { name: 'Tue', users: 3000 },
  { name: 'Wed', users: 2000 },
  { name: 'Thu', users: 2780 },
  { name: 'Fri', users: 1890 },
  { name: 'Sat', users: 2390 },
  { name: 'Sun', users: 3490 },
];

const engagementData = [
  { name: 'Week 1', sessions: 400 },
  { name: 'Week 2', sessions: 300 },
  { name: 'Week 3', sessions: 200 },
  { name: 'Week 4', sessions: 278 },
];

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total Users
            </Typography>
            <Typography component="p" variant="h4">
              12,304
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              +14% since last month
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Daily Active Sessions
            </Typography>
            <Typography component="p" variant="h4">
              1,240
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              +5% since yesterday
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total Formations
            </Typography>
            <Typography component="p" variant="h4">
              45
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              3 scheduled for this week
            </Typography>
          </Paper>
        </Grid>

        {/* Charts */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 350 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              User Growth
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={userGrowthData}
                margin={{ top: 16, right: 16, bottom: 0, left: 24 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#1976d2" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 350 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Engagement Levels
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={engagementData}
                margin={{ top: 16, right: 16, bottom: 0, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sessions" fill="#dc004e" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
