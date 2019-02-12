import React from 'react';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <form>
                <h2>Add Contact</h2>
                <label>Name </label>
                <input></input> <br />
                <label>Email </label>
                <input></input> <br />
                <label>Phone </label>
                <input></input> <br />
                <label>Address </label>
                <input></input> <br />
                <label>City </label>
                <input></input> <br />
                <label>State </label>
                <input></input> <br />
                <label>Zip Code </label>
                <input></input> <br />
            </form>
        );
    }
}

export default AddContact
