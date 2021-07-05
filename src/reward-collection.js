import React from 'react';

const RewardCollection = ({data, onEdit, onDelete}) => (
  <div className="page-wrapper p-4">
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Card Type</th>
          <th scope="col">Card Number</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {(
          data.map(reward => (
            <tr key={reward.cardType}>
              <td>{reward.cardType}</td>
              <td>{reward.cardNumber}</td>
              <td className="d-flex justify-content-end">
                <button className="btn btn-primary mx-3" onClick={() => onEdit(reward)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onDelete(reward)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
        
);


export default RewardCollection;