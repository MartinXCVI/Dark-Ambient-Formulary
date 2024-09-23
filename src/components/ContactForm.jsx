
const ContactForm = () => {

  return (
    <form id="form">
      <fieldset className="field1 field">
        <div className="division">
          <label htmlFor="name" id="name-label">Name</label>
          <input
            type="text"
            id="name"
            className="hover-input"
            placeholder="Enter your name here"
            minLength={2}
            maxLength={35}
            required
          />
        </div>
        <div className="division">
          <label htmlFor="email" id="email-label">Email</label>
          <input
            type="email"
            id="email"
            className="hover-input"
            placeholder="Enter your email here"
            maxLength={100}
            required
          />
        </div>
        <div className="division">
          <label htmlFor="number" id="number-label">Age</label>
          <input
            type="number"
            id="number"
            className="hover-input"
            placeholder="Enter your age here"
            min="18"
            max="120"
            required
          />
        </div>
      </fieldset>
      <fieldset className="field2 field">
        <legend className="legend-text">Where are you from?</legend>
        <select name="dropdownlist" className="hover-input" id="dropdown" defaultValue={'american-continent'}>
          <option value="africa">Africa</option>
          <option value="antarctica">Antarctica</option>
          <option value="american-continent">American Continent</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </fieldset>
      <fieldset className="field3 field">
        <legend className="legend-text">How would you primarily describe yourself?</legend>
        <div className="radio-division">
          <input
            className="inline"
            type="radio"
            id="radio1"
            value="lovecraftian"
            name="radio"
          />
          <label htmlFor="radio1">Lovecraftian</label>
        </div>
        <div className="radio-division">
          <input
            className="inline"
            type="radio"
            id="radio2"
            value="enthusiast"
            name="radio"
          />
          <label htmlFor="radio2">Enthusiast</label>
        </div>
      </fieldset>
      <fieldset className="field4 field">
        <legend className="legend-text">Would you like to receive promotions?</legend>
        <div className="check-division">
          <input
            type="checkbox"
            id="check1"
            name="checkbox1"
            value="promotions"
          />
          <label htmlFor="check1">Yes, send me promotions</label>
        </div>
      </fieldset>
      <input className="submit-btn" type="submit" id="submit-btn" value="Subscribe!" />
    </form>
  );
};

export default ContactForm;
