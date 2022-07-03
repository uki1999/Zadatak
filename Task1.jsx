
import React from 'react';
import { connect } from 'react-redux';
import fetchPeople from './redux/people/action';

​
const mapCompaniesIntoPeople = (people, companies) => {

}
const mapPeopleIntoHouses = (houses, people) => {

}
useEffect(()=>{
    fetchPeople();
},[])
​
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <People data={this.props.people}/>
        <House data={this.props.houses} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { people: { data }, companies, houses } = state;
  const people = mapCompaniesIntoPeople(data, companies);
  const houses = mapPeopleIntoHouses(houses, data)
  return {
    people,
    houses,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPeople: () => dispatch(fetchPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);