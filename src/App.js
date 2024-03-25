import styles from "./App.module.css";
import { useState, useEffect } from "react";


export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const responseData = await response.json();
        setData(responseData);
      } catch (e) {
        console.log("Error caught");
      }
    };

    getCountries();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {data.map((country) => {
          return (
            <div className={styles.wrapper}>
              <img
                className={styles.image}
                src={country.flags.png}
                alt={country.name.common}
              />

              <p className="{styles.countryName}">{country.name.common}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
