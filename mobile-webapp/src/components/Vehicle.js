import React, { useEffect, useState } from 'react'
import Header from './Header';
import './Vehicle.css';
import axios from 'axios';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NumberFormat from 'react-number-format';



function Vehicle() {
  const { vehicle_id } = useParams();
  const [maker, setMaker] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    axios.get(`api/vehicle/` + vehicle_id)
      .then(res => {
        setMaker(res.data.maker);
        setModel(res.data.model);
        setYear(res.data.manufacturing_year);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setEmail(res.data.email);
        setImage(res.data.url);
      })
  }, [])

  return (
    <div>
      <Header />
      <Card sx={{ maxWidth: 550 }} className="vehicle-card">
        <CardActionArea>
          {image === "" ? <div className="vehicle-card-no-image">NO IMAGE</div> : <CardMedia
            component="img"
            style={{ height: "350px", paddingTop: "2%" }}
            square
            image={image}
            alt="vehicle"
          />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <div className="vehicle-title">
                <div>
                  {maker} {model}
                </div>
                <div>
                  <NumberFormat
                    value={price}
                    displayType={'text'}
                    thousandSeparator={true}
                    decimalSeparator=""
                    prefix={'€'} />
                </div>
              </div>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {year}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default Vehicle;
