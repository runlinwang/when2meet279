import React, { Component } from 'react';
import './App.css';
// using the react tool from https://github.com/andrew200101/react-schedule-selector
import ScheduleSelector from 'react-schedule-selector';

class App extends Component {
  // schedule contained in the state
  state = { schedule: [] }

  // this function is called each time that the schedule selector is edited, 
  // and the new schedule is passed in
  handleChange = newSchedule => {

    // ignore this; testing and debugging code
    // var bottom = document.getElementById("last");
    // bottom.textContent = "";
    
    // get the original old schedule
    var OGOld = this.state.schedule;

    // new arrays of 3 digit identifiers of the date and hour selected: "date-hour-hour"
    var oldSchedule = [];
    var newSched = [];

    // incrementing through each of the old schedule times and adding the strings of
    // "date-hour-hour" (three characters) to the array
    for (let i = 0; i < OGOld.length; i++) {
      oldSchedule.push(String(OGOld[i].getDate()).concat(String(OGOld[i].getHours())));
    }

    // incrementing through each of the new schedule times and adding the strings of
    // "date-hour-hour" (three characters) to the array
    for (let j = 0; j < newSchedule.length; j++) {
      var temp = String(newSchedule[j].getDate()).concat(String(newSchedule[j].getHours()));
      // ignore this; testing and debugging code
      // if (temp.length <= 3) {
      newSched.push(temp);
      // }
    }

    // choosing just the items in the old schedule that have been removed
    var oldGone = oldSchedule.filter(item => !newSched.includes(item));

    // choosing just the items in the new schedule that have been added
    var newIn = newSched.filter(item => !oldSchedule.includes(item));

    // incrementing through each of the removed dates to change the cells
    for (let k = 0; k < oldGone.length; k++) {
      // get the table cell with the id same as the "date-hour-hour" code
      var tdToChange = document.getElementById(oldGone[k]);
      
      // check the final 5 characters to make sure that we haven't already removed this date
      // the ScheduleSelector tool imported sometimes double counts dates
      var check1 = tdToChange.textContent.slice(-5);
      if (check1 !== ", You") {
        continue;
      }

      // change the class of the cell to be one lower, which changes the color
      if (tdToChange.className === "two tooltip") {
        tdToChange.className = "one tooltip";
      } else if (tdToChange.className === "three tooltip") {
        tdToChange.className = "two tooltip";
      } else if (tdToChange.className === "four tooltip") {
        tdToChange.className = "three tooltip";
      }
      // delete the last five characters of the span popup, which we checked was ", You"
      tdToChange.lastChild.textContent = tdToChange.lastChild.textContent.replace(/.{5}$/g, '');
    }

    // incrementing through each of the newly added dates to change the cells
    for (let l = 0; l < newIn.length; l++) {
      // get the table cell with the id same as the "date-hour-hour" code
      var tdToChange1 = document.getElementById(newIn[l]);

      // check the final 5 characters to make sure that we haven't already added this date
      // the ScheduleSelector tool imported sometimes double counts dates
      var check2 = tdToChange1.textContent.slice(-5);
      if (check2 === ", You") {
        continue;
      }

      // change the class of the cell to be one higher, which changes the color
      if (tdToChange1.className === "one tooltip") {
        tdToChange1.className = "two tooltip";
      } else if (tdToChange1.className === "two tooltip") {
        tdToChange1.className = "three tooltip";
      } else if (tdToChange1.className === "three tooltip") {
        tdToChange1.className = "four tooltip";
      }

      // add the string ", You" to the end of the span popup
      tdToChange1.lastChild.textContent += ", You";
    }
    
    // update the schedule to the new schedule
    this.setState({ schedule: newSchedule });
    
  }
  
  // function to handle setting the state of hover to true
  handleMouseIn() {
    this.setState({ hover: true })
  }
  
  // function to handle setting the state of hover to false
  handleMouseOut() {
    this.setState({ hover: false })
  }


  render() {
    return (
      <div className="App">
        <title>279 When2Meet Prototype</title>
        <header className="App-header">
          <p>
            CS279R When2Meet User Implementation: Ayana Yaegashi and RunLin Wang
          </p>
          <p>
            Select your availability below!
          </p>
          {/* this is the schedule selector tool found online at https://github.com/andrew200101/react-schedule-selector */}
          <ScheduleSelector
            selection={this.state.schedule}
            numDays={5}
            minTime={13}
            maxTime={18}
            hourlyChunks={1}
            startDate = "2022-11-01"
            onChange={this.handleChange}
          />

          <p>Here's the availability of the group. Hover over the green boxes to see who's available!</p>

          {/* classes just define the background color of the cell */}
          <table>
            <tr>
              <td border="none">Number of people available</td>
              <td width="10%">Zero</td>
              <td class="one" width="10%">One</td>
              <td class="two" width="10%">Two</td>
              <td class="three" width="10%">Three</td>
              <td class="four" width="10%">Four</td>
            </tr>
          </table>

<p></p>

          {/* hard coded availabilities of 3 other users, corresponding to the same dates and times as the Schedule Selector */}
          <table>
            <tr>
              <td></td>
              <td>11/1</td>
              <td>11/2</td>
              <td>11/3</td>
              <td>11/4</td>
              <td>11/5</td>
            </tr>

            {/* id is hard coded to correspond to "date-hour-hour" code for that position */}
            {/* tooltip class in css allows for tooltiptext to appear after hovering over it */}
            <tr>
              <td>1pm</td>
              <td id="113" class="one tooltip"><span class="tooltiptext">Available: Chad</span></td>
              <td id="213" class="one tooltip"><span class="tooltiptext">Available: Chad</span></td>
              <td id="313" class="two tooltip"><span class="tooltiptext">Available: Chad, Brad</span></td>
              <td id="413" class="one tooltip"><span class="tooltiptext">Available: Brad</span></td>
              <td id="513" class="two tooltip"><span class="tooltiptext">Available: Brad, Dad</span></td>
            </tr>
            <tr>
              <td>2pm</td>
              <td id="114" class="two tooltip"><span class="tooltiptext">Available: Chad, Brad</span></td>
              <td id="214" class="one tooltip"><span class="tooltiptext">Available: Chad</span></td>
              <td id="314" class="two tooltip"><span class="tooltiptext">Available: Chad, Brad</span></td>
              <td id="414" class="one tooltip"><span class="tooltiptext">Available: Brad</span></td>
              <td id="514" class="three tooltip"><span class="tooltiptext">Available: Chad, Brad, Dad</span></td>
            </tr>
            <tr>
              <td>3pm</td>
              <td id="115" class="two tooltip"><span class="tooltiptext">Available: Brad, Dad</span></td>
              <td id="215" class="one tooltip"><span class="tooltiptext">Available: Brad</span></td>
              <td id="315" class="one tooltip"><span class="tooltiptext">Available: Brad</span></td>
              <td id="415" class="three tooltip"><span class="tooltiptext">Available: Chad, Brad, Dad</span></td>
              <td id="515" class="one tooltip"><span class="tooltiptext">Available: Chad</span></td>
            </tr>
            <tr>
              <td>4pm</td>
              <td id="116" class="two tooltip"><span class="tooltiptext">Available: Brad, Dad</span></td>
              <td id="216" class="one tooltip"><span class="tooltiptext">Available: Brad</span></td>
              <td id="316" class="one tooltip"><span class="tooltiptext">Available: Brad</span></td>
              <td id="416" class="one tooltip"><span class="tooltiptext">Available: Brad</span></td>
              <td id="516" class="one tooltip"><span class="tooltiptext">Available: Brad</span></td>
            </tr>
            <tr>
              <td>5pm</td>
              <td id="117" class="two tooltip"><span class="tooltiptext">Available: Chad, Brad</span></td>
              <td id="217" class="one tooltip"><span class="tooltiptext">Available: Chad</span></td>
              <td id="317" class="one tooltip"><span class="tooltiptext">Available: Brad</span></td>
              <td id="417" class="two tooltip"><span class="tooltiptext">Available: Chad, Brad</span></td>
              <td id="517" class="one tooltip"><span class="tooltiptext">Available: Chad</span></td>
            </tr>
          </table>

        </header>
        {/* debugging code */}
        {/* <p id="last">Here: </p> */}
      </div>
    );
  }
}

export default App;
