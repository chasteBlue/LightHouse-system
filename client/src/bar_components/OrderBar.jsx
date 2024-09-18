import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '../App.css';
import '../restaurant_components/components_r.css';
import { IconButton, TextField } from '@mui/material';
import {IoRemoveOutline,  IoAddOutline, IoTrashBinOutline, IoPencil } from 'react-icons/io5';




const OrderBar = () => {
    const foodItems = [
        { name: 'Pizza Margherita', price: 8.0, image: 'https://via.placeholder.com/150' },
        { name: 'Burger', price: 5.5, image: 'https://via.placeholder.com/150' },
        { name: 'Pasta Carbonara', price: 7.25, image: 'https://via.placeholder.com/150' },
        { name: 'Caesar Salad', price: 4.75, image: 'https://via.placeholder.com/150' },
        { name: 'Sushi', price: 9.0, image: 'https://via.placeholder.com/150' },
        { name: 'Tacos', price: 6.0, image: 'https://via.placeholder.com/150' },
        { name: 'Steak', price: 15.0, image: 'https://via.placeholder.com/150' },
        { name: 'Pizza Margherita', price: 8.0, image: 'https://via.placeholder.com/150' },
        { name: 'Burger', price: 5.5, image: 'https://via.placeholder.com/150' },
        { name: 'Pasta Carbonara', price: 7.25, image: 'https://via.placeholder.com/150' },
        { name: 'Caesar Salad', price: 4.75, image: 'https://via.placeholder.com/150' },
        { name: 'Sushi', price: 9.0, image: 'https://via.placeholder.com/150' },
        { name: 'Tacos', price: 6.0, image: 'https://via.placeholder.com/150' },
        { name: 'Steak', price: 15.0, image: 'https://via.placeholder.com/150' },
      ];
      const initialFoodItems = [
        { id: 1, name: 'Pizza Margherita', price: 8.0, image: 'https://via.placeholder.com/150', quantity: 1 },
        { id: 2, name: 'Burger', price: 5.5, image: 'https://via.placeholder.com/150', quantity: 1 },
        { id: 3, name: 'Pasta Carbonara', price: 7.25, image: 'https://via.placeholder.com/150', quantity: 1 },
      ];
      const [foodOrders, setFoodItems] = useState(initialFoodItems);

      // Function to handle quantity change
      const handleQuantityChange = (id, increment) => {
        setFoodItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity + increment) }
              : item
          )
        );
      };
    
      // Function to handle item removal
      const handleRemoveItem = (id) => {
        setFoodItems((prevItems) => prevItems.filter((item) => item.id !== id));
      };

        const [showNotes, setShowNotes] = useState(false);
        const [notes, setNotes] = useState('');

        const total = foodOrders.reduce((sum, item) => sum + item.price * item.quantity, 0);
      
  
  return (
    <section className='section-p1'>
            <header>
                <div className='container-white-space'>
                    <div className="column is-multiline is-mobile">
                    <h1 className="subtitle">
                        <strong>Add Drink Order</strong>
                    </h1>
                    </div>
                    <div className="columns">
                    {/* Left Container: Two Input Fields */}
                    <div className="column is-4">
                        <h1 className="subtitle">Filter (Drink)</h1>
                        <div className="field">
                        <label className="label">Search</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Search for an order" />
                        </div>
                        </div>

                        {/* Dropdown for Food Category */}
                        <div className="field">
                        <label className="label">Food Category</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                            <select>
                                <option>Select food category</option>
                                <option>Appetizers</option>
                                <option>Main Courses</option>
                                <option>Desserts</option>
                                <option>Beverages</option>
                            </select>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Right Container: Empty */}
                    <div className="column is-8">
                        <h1 className="subtitle">Food Menu</h1>
                        <div  className="columns is-multiline" style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '10px' }}>
                            {foodItems.map((item, index) => (
                            <div className="column is-fullwidth-mobile is-8-tablet is-4-desktop" key={index}>
                                <div className="box">
                                <div className="card-image">
                                    <figure className="image is-4by3" style={{width:"100%", height:'30%'}}>
                                    <img src={item.image} alt={item.name} />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <p className="title is-6">{item.name}</p>
                                    <p className="subtitle is-7">${item.price.toFixed(2)}</p>
                                    <button className="button is-small is-blue is-fullwidth"><IoAddOutline/>Add</button>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
            </header>

            <section className="section-p1">
                <div className='container-white-space'>
                    <div className="column is-multiline is-mobile">
                    <h1 className="subtitle">
                        <strong>Order</strong>
                    </h1>
                    </div>
                    <div className='columns'>
                        <div className='column is-8'>
                            <div className="table-container">
                                <table className="table is-fullwidth is-striped is-hoverable">
                                <thead>
                                    <tr>
                                        <th className="has-text-centered">Image</th>
                                        <th className="has-text-centered">Food Name</th>
                                        <th className="has-text-centered">Quantity</th>
                                        <th className="has-text-centered">Subtotal</th>
                                        <th className="has-text-centered">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {foodOrders.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <figure className="image is-64x64">
                                            <img src={item.image} alt={item.name} />
                                            </figure>
                                        </td>
                                        <td>{item.name}</td>
                                        <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                            <div className='button-gap-mui'>
                                                <IconButton className='button is-blue' onClick={() => handleQuantityChange(item.id, -1)}>
                                                    <IoRemoveOutline />
                                                </IconButton>
                                                <TextField type="number"  value={item.quantity}
                                                InputProps={{
                                                    readOnly: true,
                                                    style: { textAlign: 'center' }
                                                }} style={{ width: '60px' }} />
                                                <IconButton  className='button is-blue' onClick={() => handleQuantityChange(item.id, 1)} >
                                                    <IoAddOutline />
                                                </IconButton>
                                            </div>
                                        </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button
                                        className="button is-small is-red"
                                        onClick={() => handleRemoveItem(item.id)}
                                        >
                                        <IoTrashBinOutline style={{margin:'0 1rem 0 0'}} /> Cancel
                                        </button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='column is-4'>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p className='title is-6'>Total: ${total.toFixed(2)}</p>
                                <button className="button is-blue" onClick={() => setShowNotes(!showNotes)}>
                                <IoPencil style={{margin:'0 5px'}}/>{showNotes ? 'Hide Notes' : 'Add Notes'}
                                </button>
                            </div>
                            {showNotes && (
                                <div style={{ marginTop: '1rem' }}>
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Enter your notes here..."
                                    className='textarea-appear'
                                />
                                </div>
                            )}
                            <Link to="/bar_order/proceed_order">
                                <button className="button is-dark-blue is-fullwidth" style={{ marginTop: '1rem' }}>
                                    Proceed Order
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </section>
    </section>
  );
};

export default OrderBar ;
