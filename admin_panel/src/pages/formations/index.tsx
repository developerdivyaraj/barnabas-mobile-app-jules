import { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

interface Formation {
  id: string;
  title: string;
  scriptureText: string;
  status: string;
  publishDate: string;
}

const initialFormations: Formation[] = [
  { id: '1', title: 'Faith over Fear', scriptureText: 'Isaiah 41:10', status: 'published', publishDate: '2025-05-10' },
  { id: '2', title: 'The Power of Prayer', scriptureText: 'Philippians 4:6', status: 'draft', publishDate: '' },
  { id: '3', title: 'Walking in Love', scriptureText: '1 Corinthians 16:14', status: 'published', publishDate: '2025-05-15' },
];

const Formations = () => {
  const [formations, setFormations] = useState<Formation[]>(initialFormations);
  const [open, setOpen] = useState(false);
  const [currentFormation, setCurrentFormation] = useState<Partial<Formation>>({});
  const [isEditing, setIsEditing] = useState(false);

  const handleOpen = (formation?: Formation) => {
    if (formation) {
      setCurrentFormation(formation);
      setIsEditing(true);
    } else {
      setCurrentFormation({ title: '', scriptureText: '', status: 'draft', publishDate: '' });
      setIsEditing(false);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentFormation({});
    setIsEditing(false);
  };

  const handleSave = () => {
    if (isEditing) {
      setFormations(formations.map(f => f.id === currentFormation.id ? { ...f, ...currentFormation } as Formation : f));
    } else {
      const newFormation = {
        ...currentFormation,
        id: Math.random().toString(36).substring(2, 9),
      } as Formation;
      setFormations([...formations, newFormation]);
    }
    handleClose();
  };

  const handleDelete = (id: string) => {
    setFormations(formations.filter(f => f.id !== id));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Daily Formations CMS
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen()}>
          Create New
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="formations table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Scripture</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Publish Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formations.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell>{row.scriptureText}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={row.status === 'published' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>{row.publishDate || '-'}</TableCell>
                <TableCell align="right">
                  <Button size="small" onClick={() => handleOpen(row)} startIcon={<EditIcon />}>
                    Edit
                  </Button>
                  <Button size="small" color="error" onClick={() => handleDelete(row.id)} startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Create/Edit Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{isEditing ? 'Edit Formation' : 'Create New Formation'}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Title"
              fullWidth
              value={currentFormation.title || ''}
              onChange={(e) => setCurrentFormation({ ...currentFormation, title: e.target.value })}
            />
            <TextField
              label="Scripture Reference"
              fullWidth
              value={currentFormation.scriptureText || ''}
              onChange={(e) => setCurrentFormation({ ...currentFormation, scriptureText: e.target.value })}
            />
            <TextField
              label="Devotional Content"
              multiline
              rows={4}
              fullWidth
              placeholder="Rich text content would go here in a real app..."
            />
            <TextField
              label="Publish Date"
              type="date"
              fullWidth
              slotProps={{ inputLabel: { shrink: true } }}
              value={currentFormation.publishDate || ''}
              onChange={(e) => setCurrentFormation({ ...currentFormation, publishDate: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Formations;
