import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import TitleContent from "./components/TitleContent";

var score = 0;
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: score,
      mesaj: '',
    };
  }

  render() {
    if (this.state.score >= 400) {
      this.setState({mesaj:"ai multe pacate"})
    }
    return (
      <div style={{ width: '100%' }}>
        <h3>Recomandari</h3>
        <table>
          <tbody>
            <tr>
              <td>Scor:</td>
              <td>{score}</td>
            </tr>
            <tr>
              <td>Păcate: </td>
              <td>{this.state.mesaj}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};



// Creating our own theme
const theme = {
  background: "#fafafa",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  botAvatar:
    "data:image/svg+xml,%3csvg viewBox='-208.5 21 100 100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ccircle cx='-158.5' cy='71' fill='%23F5EEE5' r='50'/%3e%3cdefs%3e%3ccircle cx='-158.5' cy='71' id='a' r='50'/%3e%3c/defs%3e%3cclipPath id='b'%3e%3cuse overflow='visible' xlink:href='%23a'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23b)' d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' fill='%23E6C19C'/%3e%3cg clip-path='url(%23b)'%3e%3cdefs%3e%3cpath d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' id='c'/%3e%3c/defs%3e%3cclipPath id='d'%3e%3cuse overflow='visible' xlink:href='%23c'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23d)' d='M-158.5 100.1c12.7 0 23-18.6 23-34.4 0-16.2-10.3-24.7-23-24.7s-23 8.5-23 24.7c0 15.8 10.3 34.4 23 34.4z' fill='%23D4B08C'/%3e%3c/g%3e%3cpath d='M-158.5 96c12.7 0 23-16.3 23-31 0-15.1-10.3-23-23-23s-23 7.9-23 23c0 14.7 10.3 31 23 31z' fill='%23F2CEA5'/%3e%3c/svg%3e",
  floating: true,
};
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <TitleContent></TitleContent>
          <ThemeProvider theme={theme}>
            <ChatBot
              headerTitle="Îndreptar bot"
              steps={[
                {
                  id: '0',
                  message: 'Salut, eu sunt cel care te va ajuta să îți faci îndreptarul ortodox, răspunde cu ești rugat',
                  trigger: "intrebare1"
                },
                {
                  id: 'intrebare1',
                  message: 'Ce te-a făcut Dumnezeu? Barbat sau femeie? 100 de puncte',
                  trigger: "optiune1"
                },
                {
                  id: 'optiune1',
                    user: true,
                    trigger: 'necesitati',
                    validator: (value) => {
                      if (value.toLowerCase().includes("barbat")) {
                        score = 100;
                        console.log(score);
                      } else if (!value.toLowerCase().includes("barbat") && !value.toLowerCase().includes("femeie")) {
                        return 'trebuie să răspunzi cu barbat sau femeie';
                      }
        
                      return true;
                    },
                },
                {
                  id: 'necesitati',
                  message: 'La următoarele întrebări despre păcatele lumii, vă rugăm să răspundeți în căsuță cu da sau nu, indiferent de cum scrieți.',
                  trigger: "intrebare2"
                },
                {
                  id: 'intrebare2',
                  message: "Fiind rob al pântecelui, am aşteptat cu mare nerăbdare să vină Paştile, Crăciunul sau alte praznice mari spre a face dezlegare la toate mâncărurile şi băuturile. 150 de puncte",
                  trigger: "optiune2"
                },
                {
                  id: 'optiune2',
                    user: true,
                    trigger: 'intrebare3',
                    validator: (value) => {
                      if (value.toLowerCase().includes("da")) {
                        score += 150;
                      } else if (!value.toLowerCase().includes("da") && !value.toLowerCase().includes("nu")) {
                        return 'trebuie să răspunzi cu da sau nu';
                      }
        
                      return true;
                    },
                },
                {
                  id: 'intrebare3',
                  message: "Am fost la stadioane, săli de sport, teatre, pentru a urmări meciuri (se pune și dacă te-ai uitat la televizor), spectacole, circuri, conferinţe sau am participat la alte manifestaţii păgâne ori sectare. 150 de puncte",
                  trigger: "optiune3"
                },
                {
                  id: 'optiune3',
                    user: true,
                    trigger: 'review',
                    validator: (value) => {
                      if (value.toLowerCase().includes("da")) {
                        score += 150;
                      } else if (!value.toLowerCase().includes("da") && !value.toLowerCase().includes("nu")) {
                        return 'trebuie să răspunzi cu da sau nu';
                      }
        
                      return true;
                    },
                },
                  {
                    id: 'review',
                    component: <Review />,
                    asMessage: true,
                    end:true
                  }
               
              ]}
              {...config}
            />
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
