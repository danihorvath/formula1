import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Driver } from "../index";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface DriverCardProps {
  driver: Driver;
  overtake: (id: number) => void;
}

const DriverCard = ({ driver, overtake }: DriverCardProps) => (
  <Card variant="outlined" key={driver.id}>
    <CardHeader
      avatar={<Avatar aria-label="recipe">{driver.place}</Avatar>}
      title={`${driver.firstname} ${driver.lastname}`}
      subheader={driver.team}
      action={
        <Box display="flex" height={50} alignItems="center" marginX={1}>
          <Typography fontWeight={500}>{driver.code}</Typography>
        </Box>
      }
    />
    <CardMedia
      component="img"
      image={`${import.meta.env.VITE_API_URL}${driver.imgUrl}`}
      alt="Paella dish"
    />
    <CardActions>
      <IconButton
        aria-label="add to favorites"
        sx={{ marginLeft: "auto" }}
        disabled={driver.place === 1}
        onClick={() => overtake(driver.id)}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </CardActions>
  </Card>
);

export default DriverCard;
