import Carlist from "./components/Carlist";
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function App() {


  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Car Shop</Typography >
        </Toolbar>
      </AppBar>
      <Carlist />
    </Container>
  )
}

export default App
