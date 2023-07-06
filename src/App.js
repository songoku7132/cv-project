import React, { Component } from 'react';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import './styles/style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        name: '',
        email: '',
        phone: '',
      },
      education: {
        school: '',
        degree: '',
        date: '',
      },
      experience: {
        company: '',
        position: '',
        dateW: '',
      },
    };
  }

  inputGeneral = (fieldName, e) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      general: {
        ...prevState.general,
        [fieldName]: value,
      },
    }));
  };

  inputEducation = (fieldName, e) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [fieldName]: value,
      },
    }));
  };

  inputExperience = (fieldName, e) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        [fieldName]: value,
      },
    }));
  };

  // handleEdit = () => {
  //   this.setState({ isEditing: true });
  // };

  // handleSave = () => {
  //   this.setState({ isEditing: false });
  // };

  render() {
    const { general, education, experience } = this.state;

    return (
      <>
        <div className="form-box">
          <form>
            <label htmlFor="nameInput">Enter name:</label>
            <input
              onChange={(e) => this.inputGeneral('name', e)}
              value={general.name}
              type="text"
              id="nameInput"
            />
            <label htmlFor="emailInput">Enter email:</label>
            <input
              onChange={(e) => this.inputGeneral('email', e)}
              value={general.email}
              type="text"
              id="emailInput"
            />
            <label htmlFor="phoneInput">Enter phone:</label>
            <input
              onChange={(e) => this.inputGeneral('phone', e)}
              value={general.phone}
              type="text"
              id="phoneInput"
            />
          </form>
          <form>
            <label htmlFor="schoolInput">School name:</label>
            <input
              onChange={(e) => this.inputEducation('school', e)}
              value={education.school}
              type="text"
              id="ScgoolInput"
            />
            <label htmlFor="degreeInput">Degree:</label>
            <input
              onChange={(e) => this.inputEducation('degree', e)}
              value={education.degree}
              type="text"
              id="degreeInput"
            />
            <label htmlFor="dateInput">Date of education:</label>
            <input
              onChange={(e) => this.inputEducation('date', e)}
              value={education.date}
              type="text"
              id="dateInput"
            />
          </form>
          <form>
            <label htmlFor="companyInput">Company name:</label>
            <input
              onChange={(e) => this.inputExperience('company', e)}
              value={experience.company}
              type="text"
              id="companyInput"
            />
            <label htmlFor="positionInput">Position:</label>
            <input
              onChange={(e) => this.inputExperience('position', e)}
              value={experience.position}
              type="text"
              id="positionInput"
            />
            <label htmlFor="dateWInput">Date of work:</label>
            <input
              onChange={(e) => this.inputExperience('dateW', e)}
              value={experience.dateW}
              type="text"
              id="dateWInput"
            />
          </form>
        </div>
        <div className="cv-box">
          <h1>My cv</h1>
          <General general={general}/>
          <Education education={education}/>
          <Experience experience={experience}/>
        </div> 
      </>
    );
  }
}

export default App;