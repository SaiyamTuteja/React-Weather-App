import React from "react";
import styled from "styled-components";
import { useState } from "react";

const BASE_URL = "http://localhost:9000";
const App = () => {
  const [date, setDate] = useState(null);
  const fetchFoodData = async () => {
    const response = await fetch(BASE_URL);
    const json = await response.json();
  };
  fetchFoodData();
  return (
    <Conatiner>
      <TopConatianer>
        <div className="logo">
          <img src="./Foody Zone.svg" alt="logo" />
        </div>
        <div className="serach">
          <input type="text" placeholder="Search Food " />
        </div>
      </TopConatianer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodCardContainer>
        <FoodCard></FoodCard>
      </FoodCardContainer>
    </Conatiner>
  );
};

export default App;

const Conatiner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopConatianer = styled.section`
  min-height: 140px;
  justify-content: space-between;
  display: flex;
  padding: 16px;
  align-items: center;
  .serach {
    input {
      background-color: transparent;
      color: #fff;
      border: 1px solid red;
      padding: 8px 16px;
      border-radius: 8px;
      height: 40px;
      font-size: 16px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
`;
const Button = styled.button`
  background-color: red;
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
const FoodCardContainer = styled.section`
  background-image: url("./bg.png");
  background-size: cover;
  background-position: center;
  height: calc(100vh - 220px);
`;
const FoodCard = styled.div``;
