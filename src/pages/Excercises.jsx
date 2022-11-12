import React from 'react'
import ExcercisesService from '../services/excercise.service'
import { useEffect } from 'react';
import { useState } from 'react';
import NavUser from '../components/Navbar/NavUser';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';


const Excercises = () => {
  const [exerciseList, setExcerciseList] = useState([]);

  useEffect(() => {
    ExcercisesService
      .getExcerciseList()
      .then((res) => {
        // console.log("success excercises list test", res.data);
        setExcerciseList(res.data);
      })
      .catch((e) => console.log("fail excercises list test", e));
  }, []);
  return (
    <div className='page__exercise'>
      <NavUser />
      <div className='page__exercise--wrapper'>
        <h1 className='page__exercise__title'>All OF OUR <span>EXERCISES</span></h1>
        <div className='exerciseList__container'>
          {exerciseList.map((exerciseList) =>
            <div className='exercise__cardHolder'>
              <div className='exercise__cardHolder__item exercise__cardHolder__item--img'>
                <img alt="Dumbbell" src={require("../components/Image/dumbbell.png")} />
              </div>
              <div className='exercise__cardHolder__item exercise__cardHolder__item--content'>
                <div className='exercise__card__component'>
                  <h4>{exerciseList.exerciseName}</h4>
                </div>
                <div className='exercise__card__component'>
                  <CardText>
                    Body Part: {exerciseList.bodyPart}
                  </CardText>
                  <CardText>
                    Set: {exerciseList.set}
                  </CardText>
                  <CardText>
                    Step: {exerciseList.step}
                  </CardText>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Excercises;