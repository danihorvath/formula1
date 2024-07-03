import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DriverCard from "./components/DriverCard";

export interface Driver {
  id: number;
  code: string;
  firstname: string;
  lastname: string;
  country: string;
  team: string;
  place: number;
  imgUrl: string;
}

function App() {
  const [list, setList] = useState<Driver[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/drivers`)
      .then((response) => response.json())
      .then((drivers: Driver[]) =>
        setList(drivers.sort((a, b) => a.place - b.place))
      );
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" marginY={3}>
        Formula 1
      </Typography>
      <Grid container spacing={2} marginBottom={6}>
        {list.map((driver) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DriverCard driver={driver} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
