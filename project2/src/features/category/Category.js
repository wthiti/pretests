import React, {useEffect, useState} from 'react';
import styles from './Category.module.css';

export function Category() {
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);
   const [filter, setFilter] = useState('');

    useEffect(() => {
        fetch('https://api.publicapis.org/categories')
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result);
            })
    })

    function render(items) {
        if(!isLoaded) {
            return <tbody><tr><td>Loading...</td></tr></tbody>
        } else {
            return items
                .filter((item) => filter === '' || item === filter)
                .map((item) => {
                return <tbody key={item + 'tbody'}><tr key={item + 'tr'}><td key={item + 'td'}>{item}</td></tr></tbody>;
            });
        }
    }

    return (
        <div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set test number"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <table>
                    {render(items)}
                </table>
            </div>
        </div>
    );
}
