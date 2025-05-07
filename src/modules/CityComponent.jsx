import styled from "styled-components";
import React from "react";
import Button from '@mui/material/Button';

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color:  ${({ theme }) => theme?.palette?.text?.primary};
    font-size: 14px;
    padding: 0 10px;
    color:  ${({ theme }) => theme?.palette?.text?.primary};
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WelcomeWeatherLogo src={"https://play-lh.googleusercontent.com/UL7WkH-93_L07PRTRAsTAf05ELL8VhaudbJbUYOvgEVdbgfw9PNJ3OwKyY8cFFEpe28=w240-h480-rw"} />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <Button variant="outlined" type={"submit"}>Search</Button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
