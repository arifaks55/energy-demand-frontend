import React, { useState } from 'react';
import './App.css'; // Stil dosyasını dahil ediyoruz

const App: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [prediction, setPrediction] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Rastgele tahmin üreten fonksiyon
  const generateRandomPrediction = (): number => {
    return Math.random() * 1000; // 0 ile 1000 arasında rastgele bir sayı
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date) {
      setError('Please select a date');
      return;
    }

    setError(null); // Hata mesajını temizle
    const randomPrediction = generateRandomPrediction(); // Tahmini oluştur
    setPrediction(randomPrediction);
  };

  return (
    <div className="container">
      <h1 className="title">Energy Demand Prediction</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="date-input"
        />
        <button type="submit" className="submit-button">Predict</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {prediction !== null && (
        <p className="result">
          Predicted demand for <strong>{date}</strong>: <span>{prediction.toFixed(2)}</span>
        </p>
      )}
    </div>
  );
};

export default App;
