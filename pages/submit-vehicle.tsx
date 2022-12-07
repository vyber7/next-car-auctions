import styles from "/styles/submit.module.scss";

function SubmitVehicle() {
  return (
    <div className={styles.container}>
      <main>
        <h2>Enter your vehicle information</h2>
        <form action='/api/new-listing' method='POST'>
          <label htmlFor='make'>Make</label>
          <input type='text' id='make' />
          <label htmlFor='model'>Model</label>
          <input type='text' id='model' />
          <label htmlFor='year'>Year</label>
          <input type='text' id='year' />
          <label htmlFor='miles'>Miles</label>
          <input type='text' id='miles' />
          <label htmlFor='decription'>Description</label>
          <textarea id='description' />
          <label htmlFor={styles.images}>
            Drag images below or <button id={styles.btn_browse}>BROWSE</button>
          </label>
          <textarea id={styles.images} />
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
