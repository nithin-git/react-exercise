import React, {useState, useEffect} from 'react';

const Modal = ({show, data, onSubmit, onCancel, editReward}) => {

  useEffect(() => {
    if (editReward) setFormData(editReward);
  }, [editReward]);

  const initialFormState = () => {
    return editReward ? {id: null, cardType: 'Test', cardNumber: '123'} : {id: null, cardType: '', cardNumber: ''};
  } 

  const [formData, setFormData] = useState(initialFormState);

  const onInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: (name === 'cardNumber' ? parseInt(value) : value )});
  }

  const submitData = event => {
    event.preventDefault();
    if(formData.cardNumber !== '' && formData.cardType !== ''){
      onSubmit(formData);
      onCancel();
      setFormData({id: null, cardType: '', cardNumber: ''});
    }
  }

  return (
    show ? (
      <div className="modal-overlay modal fade show" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{editReward ? 'Edit Reward' : 'Add Reward'}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onCancel}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitData}>
                  <div className="form-group">
                    <label className="col-form-label">Card Type</label>
                    <input type="text" name="cardType" value={formData.cardType} 
                      onChange={onInputChange} autoFocus autoComplete="off" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Card Number</label>
                    <input type="text" name="cardNumber" value={formData.cardNumber} 
                      onChange={onInputChange} autoComplete="off" className="form-control"/>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" onClick={onCancel}>Cancel</button>
                    <button className="btn btn-primary" type="submit">Submit</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
}

export default Modal;