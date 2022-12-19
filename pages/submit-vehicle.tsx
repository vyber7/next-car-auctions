import styles from "/styles/submit.module.scss";

function validateForm(e): void {
  const make = document.forms["submit"].make.value;
  const model = document.forms["submit"].model.value;
  const year = document.forms["submit"].year.value;
  const miles = document.forms["submit"].miles.value;
  const description = document.forms["submit"].description.value;
  //const input = document.querySelector("#make");

  if (
    make == "" ||
    model == "" ||
    year == "" ||
    miles == "" ||
    description == ""
  ) {
    alert("Enter missing info!");
    e.preventDefault();
  }
}

function SubmitVehicle() {
  return (
    <div className={styles.container}>
      <main>
        <h2>Enter your vehicle information</h2>
        <form
          name='submit'
          action='/api/new-listing'
          onSubmit={(e) => validateForm(e)}
          method='POST'>
          <label htmlFor='make'>Make</label>
          <input type='text' id='make' name='make' />

          <label htmlFor='model'>Model</label>
          <input type='text' id='model' name='model' />

          <label htmlFor='year'>Year</label>
          <input type='text' id='year' name='year' />

          <label htmlFor='miles'>Miles</label>
          <input type='text' id='miles' name='miles' />

          <label htmlFor='decription'>Description</label>
          <textarea id='description' name='description' />

          <label htmlFor={styles.images}>
            Drag images below or{" "}
            <button id={styles.btn_browse} disabled>
              BROWSE
            </button>
          </label>
          <textarea id={styles.images} name='images' disabled />

          <button type='submit'>SUBMIT</button>
        </form>
      </main>
      <aside>
        <h2>Recently Sold</h2>
        <div className='recently-sold'></div>
      </aside>
    </div>
  );
}

export default SubmitVehicle;
