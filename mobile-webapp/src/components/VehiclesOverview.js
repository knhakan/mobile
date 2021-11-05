import React, { useEffect, useState } from 'react'
import './VehiclesOverview.css';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import NumberFormat from 'react-number-format';

function VehiclesOverview() {
  const [vehicles, setVehicles] = useState([]);
  const [page, setPage] = React.useState(1);
  const [vehiclesnumber, setVehiclesnumber] = useState([]);

  useEffect(() => {
    const pageSize = 5;
    const pageNo = page - 1;
    console.log("page");
    axios.get(`api/numberofvehicles`)
      .then(res => {
        setVehiclesnumber(res.data);
      });
    console.log(page);
    axios.get(`api/vehicles?pageSize=` + pageSize + `&pageNo=` + pageNo)
      .then(res => {
        setVehicles(res.data);
      })
  }, [page])

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="vehicles-overview-main">
      <Header />
      {vehicles.map((vehicle, index) =>
        <Card className="vehicles-overview-card">
          <Box className="vehicles-overview-box">
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div">
                {vehicle.maker} {vehicle.model}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <NumberFormat
                  value={vehicle.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  decimalSeparator=""
                  prefix={'€'} />
              </Typography>
              <CardActions>
                <Link to={`/vehicle/${index + 1 + 5 * (page - 1)}`} className="vehicles-overview-link">
                  <Button
                    size="large"
                    variant
                    contained
                    className="vehicles-overview-button">View Details</Button>
                </Link>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      )}
      <Stack spacing={2} >
        <Pagination className="overview-pagination" count={Math.ceil(vehiclesnumber / 5)} page={page} onChange={handleChange} />
      </Stack>
    </div>
  )
}

export default VehiclesOverview;
