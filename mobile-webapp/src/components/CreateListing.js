import React, { useState } from 'react'
import './CreateListing.css';
import Header from './Header';
import axios from 'axios';

const options = [
    {
        label: "Choose a maker",
        value: "",
    },
    {
        label: "BMW",
        value: "BMW",
    },
    {
        label: "Peugeot",
        value: "Peugeot",
    },
    {
        label: "Fiat",
        value: "Fiat",
    },
    {
        label: "Kia",
        value: "Kia",
    },
    {
        label: "Toyota",
        value: "Toyota",
    },
    {
        label: "Chevrolet",
        value: "Chevrolet",
    },
];


function CreateListing() {
    const [maker, setMaker] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState();
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [isImagePresent, setImagePresent] = useState(true);

    const [status, setStatus] = useState(undefined);

    const checkIfImageExists = (url, callback) => {

        const img = new Image();

        img.src = url;

        if (img.complete) {
            setImagePresent(true);
            setImage(url);

        } else {
            img.onload = () => {
                setImagePresent(true);
                setImage(url);
            };

            img.onerror = () => {
                setImagePresent(false);
            };
        }

    }


    const handleSubmit = event => {

        event.preventDefault();
        const vehicle = {
            maker: maker,
            model: model,
            year: year,
            description: description,
            price: price,
            email: email,
            image: image,
        };
        axios.post(`http://localhost:8082/api/save`, {
            maker: vehicle.maker,
            model: vehicle.model,
            manufacturing_year: vehicle.year?.toString(),
            description: vehicle.description,
            price: vehicle.price,
            email: vehicle.email,
            url: vehicle.image
        })
            .then(res => {
                console.log(res);
                setStatus({ type: 'success' });
                setTimeout(function () { window.location.reload(); }, 5000);

            })
            .catch(error => {
                console.log(error.response.data.error);
                setStatus({ type: 'error', error });
            })
    }


    return (
        <div >
            <Header />
            <div className="main">
                <form onSubmit={handleSubmit} className='form'>
                    <h1 className='listing-title'>Add New Listing</h1>

                    <label className='listing-label'>
                        Maker:
                        <select required onChange={event => setMaker(event.target.value)} name="maker" className='listing-input'>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>

                    </label>

                    <label className='listing-label'>
                        Model:
                        <input
                            minLength={2}
                            maxLength={32}
                            required
                            className='listing-input'
                            onChange={event => setModel(event.target.value)}
                            type="text"
                            name="model" />
                    </label>

                    <label className='listing-label'>
                        Year:
                        <input
                            placeholder="Year"
                            className='listing-input'
                            onChange={event => setYear(event.target.value)}
                            type="number"
                            required
                            InputProps={{
                                inputProps: {
                                    min: 1970, max: 2021
                                }
                            }}
                            name="year"
                        />
                    </label>

                    <label className='listing-label'>
                        Description:
                        <textarea
                            required
                            className='listing-input-description'
                            onChange={event => setDescription(event.target.value)}
                            type="text"
                            name="description" />
                    </label>

                    <label className='listing-label'>
                        Price:
                        <input
                            placeholder="Price (€)"
                            step=".1"
                            decimal
                            inputMode="decimal"
                            thousandSeparator={true}
                            required className='listing-input'
                            onChange={event => setPrice(event.target.value)}
                            type="number" name="price"
                            InputProps={{
                                inputProps: {
                                    min: 0, max: 1000
                                }
                            }} />
                    </label>

                    <label className='listing-label'>
                        Email:
                        <input
                            placeholder="Email"
                            required className='listing-input'
                            onChange={event => setEmail(event.target.value)}
                            type="email"
                            name="email" />
                    </label>

                    <label className='listing-label'>
                        Image:
                        <input
                            placeholder="Image URL"
                            className='listing-input'
                            onChange={event => checkIfImageExists(event.target.value)}
                            type="url"
                            name="image" />
                    </label>
                    <input type="submit" value="Add Vehicle" className='listing-button' />
                </form>
            </div>

            <div className='vehicle-overview-message'>
                {status?.type === 'success' && isImagePresent === true && <p>Success! Vehicle has been saved</p>}
                {status?.type === 'error' || isImagePresent === false && (
                    <p>Oups! Vehicle could not be saved</p>
                )}
            </div>
        </div>
    )
}

export default CreateListing;
