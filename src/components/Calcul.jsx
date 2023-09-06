import React, { Component } from "react";

import blancheneigeskull from "../blancheneigeskull.jpg";
import monalisaskull from "public/assets/monalisaskull.jpg";
import femmeageeskull from "public/assets/femmeageeskull.jpg";
import zombieskull from "public/assets/zombieskull.png";
import supermanskull from  "public/assets/supermanskull.jpg";
import personnageeffrayant from "public/assets/personnageeffrayant.jpg";
import personnageeffrayant1 from "public/assets/personnageeffrayant1.jpg";
import personnageeffrayant2 from "public/assets/personnageeffrayant2.jpg";
import personnageeffrayant3 from "public/assets/personnageeffrayant3.jpg";

import princess from "public/assets/princess.jpg";
import princess3 from "public/assets/princess3.jpg";
import princess1 from "public/assets/princess1.jpg";
import magiciendoz from "public/assets/magiciendoz.jpg";
import alladinpinup from "public/assets/alladinpinup.jpg";
import magiciendoz2pinup from "public/assets/magiciendoz2pinup.jpg";
import meregrandpinup from "public/assets/meregrandpinup.jpg";
import princessPinUp3 from "public/assets/princessPinUp3.jpg";
import blancheneigepinup2 from "public/assets/blancheneigepinup2.jpg";
import princess2 from "public/assets/princess2.jpg";

import "src/components/Calcul.css";

const badResponseImages = [personnageeffrayant, personnageeffrayant1, personnageeffrayant2, personnageeffrayant3, zombieskull, blancheneigeskull, monalisaskull, supermanskull, femmeageeskull];

const goodResponseImages = [princess, princess1,princess3, princess2, magiciendoz,magiciendoz2pinup, blancheneigepinup2, meregrandpinup,alladinpinup, princessPinUp3];

class Calcul extends Component {
  constructor() {
    super();
    this.state = {
      num1: this.getRandomNumber(),
      num2: this.getRandomNumber(),
      answer: "",
      score: 0,
      feedback: "",
      goodResponseImage: null,
      badResponseImage: null,
      showConfirmation: true,
    };
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10000) + 1;
  }

  checkAnswer = () => {
    const { num1, num2, answer, score } = this.state;
    const correctAnswer = num1 + num2;

    if (parseInt(answer) === correctAnswer) {
      // correct answer
      this.playCorrectSound(); // For play the sound
      this.setState({
        score: score + 1,
        num1: this.getRandomNumber(),
        num2: this.getRandomNumber(),
        answer: "",
        feedback: "Bonne réponse",
        goodResponseImage:
        goodResponseImages[Math.floor(Math.random() * goodResponseImages.length)],
        showConfirmation: false,
        playCorrectSound:true,
        playIncorrectSound :true,

      });
      //Reset Image after 6 sec 
      setTimeout(() => {
        this.setState({ goodResponseImage: null });
      }, 6000);
    } else {
      this.playIncorrectSound(); //for play the sound
      this.setState({
        feedback: "Mauvaise réponse",
        badResponseImage:
        badResponseImages[Math.floor(Math.random() * badResponseImages.length)],
      });
      setTimeout(() => {
        this.setState({ badResponseImage: null });
      }, 6000);
    }
  };

  handleChange = (e) => {
    this.setState({ answer: e.target.value });
  };

  playCorrectSound() {
    let audio = new Audio("public/assets/SF-fouet3.mp3");
    audio.play();
  }

  playIncorrectSound() {
    let audio = new Audio(
      "public/assets/Female_Scream_Horror-NeoPhyTe-goodanswer.mp3"
    );
    audio.play();
  }

  handleNumericInputChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/);
    this.setState({ answer: numericValue });
  };

  render() {
    const { num1, num2, answer, score, feedback, badResponseImage, goodResponseImage, showConfirmation } = this.state;

    const imageStyle = {
      width: "35rem",
      height: "40rem",
    };
    return (
      
        <><div className="calcul">
        <h1>Générateur de Calcul Mental</h1>
      </div>
      <div className="numbers">
          <p>
            {num1} + {num2} ={" "}
            <input
              type="text"
              value={answer}
              onChange={this.handleNumericInputChange}
              placeholder="Votre réponse" />
          </p>
          </div>

          <h2>{showConfirmation ? "T'es sur de toi ???" : ""}</h2>
          
          <div className="button">
          <button onClick={this.checkAnswer}>Valider...</button>
        </div>

        <div className={`message1 ${showConfirmation ? "good-response" : ""}`}>
          {feedback && <p>{feedback}</p>}
          <div className="picture">
            {goodResponseImage && (
              <img
                src={goodResponseImage}
                alt="Image de bonne réponse"
                style={imageStyle} />
            )}</div>

          <div className={`message ${showConfirmation ? "wrong-response" : ""}`}>
            {badResponseImage && (
              <img
                src={badResponseImage}
                alt="Image de mauvaise réponse"
                style={imageStyle} />
            )}
          </div>
        </div>
        <div className="score">
          <p>Score : {score}</p>
        </div></>
    );
  }
}

export default Calcul;
