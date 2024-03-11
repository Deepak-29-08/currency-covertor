// App.jsx
import  { useState } from 'react';
import Inputbox from './component/Inputbox';
import UseCurrencyInfo from './component/hooks/UseCurrencyInfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = UseCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div className="w-fill h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?)` }}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className=' w-full mb-1'>
              <Inputbox label="from" amount={amount}
                CurrencyOptions={options}
                onCurrencyChange={(currency) => { setFrom(currency) }}
                onAmountChange={(newAmount) => setAmount(newAmount)}
                selectedCurrency={from} />

                <div className='relative w-full h-0.5'>

                  <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white
                rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}>

                 Swap </button>

                </div>
                <div className=' w-full mb-1'>
                    <Inputbox label="to"
                    CurrencyOptions={options}
                    amount={convertedAmount}
                    onCurrencyChange={(currency)=>setTo(currency)}
                    selectedCurrency={to}
                    amountDisabled
                      />
                      </div>

                      <div>
                        <button type='submit'
                        className='w-full bg-blue-700 tet-white px-4 py-3 rounded-lg'>

                        <h3 className='text-white'>Convert {from.toUpperCase()} to {to.toUpperCase()}</h3></button>
                      </div>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
