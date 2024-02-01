import React from 'react';
import '../design/Cards.css';

export default function Pricing() {
  return (
    <section id="pricings" className="pricings">
            <h2>Tarifs</h2>
            <div className="card-container">
                <div className="card cta" a href="#">
                <h3>Starter</h3>
                    <ul>
                        <li>1 nom de domaine</li>
                        <li>1 Go espace disque</li>
                        <li>2 adresses email</li>
                    </ul>
                </div>
                <div className="card cta" a href="#">
                <h3>Perso</h3>
                    <ul>
                        <li>1 nom de domaine</li>
                        <li>100 Go espace disque</li>
                        <li>10 adresses email</li>
                    </ul>
                </div>
                <div className="card cta" a href="#">
                <h3>PRO</h3>
                    <ul>
                        <li>1 nom de domaine</li>
                        <li>250 Go espace disque</li>
                        <li>100 adresses email</li>
                    </ul>
                </div>
            </div>
        </section>
  );
}
