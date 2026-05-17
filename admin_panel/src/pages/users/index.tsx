import { Box, Typography, Paper, Button } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Edit as EditIcon, Block as BlockIcon } from '@mui/icons-material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    renderCell: () => (
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button size="small" variant="outlined" color="primary" startIcon={<EditIcon />}>
          Edit
        </Button>
        <Button size="small" variant="outlined" color="error" startIcon={<BlockIcon />}>
          Ban
        </Button>
      </Box>
    ),
  },
];

const initialRows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'Active' },
  { id: 4, name: 'Spam Bot', email: 'spam@bot.com', role: 'User', status: 'Banned' },
  { id: 5, name: 'Alice Walker', email: 'alice@example.com', role: 'User', status: 'Active' },
  { id: 6, name: 'Bob Builder', email: 'bob@example.com', role: 'User', status: 'Active' },
];

const Users = () => {

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <DataGrid
          rows={initialRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
        />
      </Paper>
    </Box>
  );
};

export default Users;
