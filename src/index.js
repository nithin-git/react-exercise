import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import './assets/dist/css/bootstrap.min.css'
import testData from './data.json';
import RewardCollection from './reward-collection';
import Modal from './modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [rewardData, setRewardData] = useState(testData);
  const [currentReward, setCurrentReward] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const addReward = reward => {
    if (currentReward) {
      setRewardData(rewardData.map(testData => (testData.id === reward.id ? reward : testData)));
      setCurrentReward(null);
      return;
    }
    reward.id = rewardData.length + 1;
    setRewardData([...rewardData, reward]);
  }

  const editRewardHandler = reward => {
    setCurrentReward(reward);
    toggleModal();
  }

  const deleteReward = reward => {
    setRewardData(rewardData.filter(item => item.cardType !== reward.cardType));
  }

  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container-fluid">
          <div className="row">
          <div className="col-8 text-left"> 
              <h4>Reward Cards</h4>  
            </div>
            <div className="col-4 d-flex justify-content-end">
              <button onClick={toggleModal} type="button" className="btn btn-outline-light me-2 float-right">Add New</button>
            </div>
          </div>
        </div>
      </header>
      <RewardCollection data={rewardData} onEdit={editRewardHandler} onDelete={deleteReward} />
      <Modal onCancel={toggleModal} onSubmit={addReward} show={showModal} data={rewardData} editReward={currentReward} />
    </div>
  )
}

render(<App />, document.getElementById('root'));
