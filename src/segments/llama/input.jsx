import React, { useState } from 'react';

const InputComponent = () => {
  const [value, setValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    setSubmittedValue(value); // Устанавливаем значение, которое нужно отобразить
    setValue(''); // Очищаем инпут после отправки
  };

  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          className="text-white text-lg bg-transparent w-full box-border px-4 py-3 border-b-2 border-[#1a1a1a] focus:outline-none"
          placeholder="Ask llama"
          required
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)} // Обновляем состояние при изменении
        />
        <button
          type="submit"
          className="ml-2 text-white py-2 px-4 rounded"
        >
            Submit
        </button>
        <span className="absolute bg-gradient-to-r from-green-500 to-green-600 h-[2px] bottom-0 left-0 transition-all duration-700 ease-in-out w-0"></span>

        <style jsx>{`
          input:focus + span {
            width: 100%;
          }
        `}</style>
      </form>

      {/* Отображение введенного текста после отправки */}
      {submittedValue && (
        <div className="relative h-screen"> {/* Добавляем родительский элемент с относительным позиционированием */}
            <div className="absolute max-w-2xl left-1/2 transform -translate-x-1/2 mt-[12%]">
            <div className="break-words overflow-wrap-normal whitespace-normal">
                {submittedValue}
            </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default InputComponent;
