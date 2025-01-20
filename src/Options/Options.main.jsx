import styles from './Options.module.sass'

function Options(){
    return(<>

    <div className={styles.optionscontainer}>
        <div className={styles.buttonscontainer}>
        <button className={styles.optionsbutton}>Все</button>
        <button className={styles.optionsbutton}>Мясные</button>
        <button className={styles.optionsbutton}>Вегетарианская</button>
        <button className={styles.optionsbutton}>Гриль</button>
        <button className={styles.optionsbutton}>Острые</button>
        <button className={styles.optionsbutton}>Закрытые</button>
        </div>
        <div className={styles.formcontainer}>
         <form>
          <label>Сортировка по: </label>
           <select className={styles.selectpop} id="pop" name="popform">s
             <option value="popularity">популярности</option>
             <option value="price">цене</option>
             <option value="alphabet">алфавиту</option>
           </select>
         </form>
        </div>
    </div>
    <div className={styles.allpizza}>
        <h2 className={styles.allpizzatitle}>Все пиццы</h2>
    </div>
    
    </>)
}
export default Options