// src/components/SimpleDynamicForm.jsx
import { useState } from 'preact/hooks';

const SimpleDynamicForm = () => {
  const [calendarType, setCalendarType] = useState('');
  const [email, setEmail] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleCalendarChange = (event) => {
    setCalendarType(event.target.value);
    setAdditionalInfo(''); // Limpiar la información adicional cuando se cambia el tipo de calendario
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !calendarType || !additionalInfo) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    alert('Formulario enviado correctamente!');
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor.
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
          placeholder="Ingresa tu email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Tipo de calendario</label>
        <select
          value={calendarType}
          onChange={handleCalendarChange}
          required
          className="form-select"
        >
          <option value="" disabled>Selecciona un tipo de calendario</option>
          <option value="mesa">Mesa</option>
          <option value="pared">Pared</option>
        </select>
      </div>

      {/* Pregunta adicional según el tipo de calendario */}
      {calendarType && (
        <div className="mb-4">
          <label className="block text-sm font-medium">
            {calendarType === 'mesa'
              ? '¿Prefieres un calendario compacto?'
              : '¿Deseas colgarlo en la sala o en la oficina?'}
          </label>
          <input
            type="text"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            required
            className="form-input"
            placeholder={calendarType === 'mesa' ? 'Ej. Sí, prefiero compacto' : 'Ej. Sala'}
          />
        </div>
      )}

      <div className="mt-6">
        <button type="submit" className="btn btn-primary">Enviarlo</button>
      </div>
    </form>
  );
};

export default SimpleDynamicForm;
