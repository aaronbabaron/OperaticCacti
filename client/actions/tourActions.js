import axios from 'axios';

function setTourList(tours) {
  return {
    type: "SET_TOUR_LIST",
    tours
  };
}

function setTourListWithData() {
  return (dispatch) => (
    axios.get('/tours').then(resp => dispatch(setTourList(resp.data)))
  )
}

function setTourItem(item, value) {
  var toReturn = {
    type: 'SET_TOUR_' + item.toUpperCase()
  };

  toReturn[item.toLowerCase()] = value;

  console.log('hi', toReturn);
  return toReturn;
}

export { setTourList, setTourListWithData, setTourItem };
