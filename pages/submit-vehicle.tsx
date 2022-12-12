import styles from "/styles/submit.module.scss";

function SubmitVehicle() {
  return (
    <div className={styles.container}>
      <main>
        <h2>Enter your vehicle information</h2>
        <form action='/api/new-listing' method='POST'>
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
