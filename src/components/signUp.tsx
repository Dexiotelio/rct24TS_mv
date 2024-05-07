import { useRef } from "react";

interface FormRef {
  nombre: string;
  apellido: string;
  email: string;
  contraseña: string;
}

export function SingUp(): JSX.Element {
  const formRef = useRef<FormRef>({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // const formData = new FormData(formRef.current);
    // convertimos a formData en un objeto
    // const values = Object.fromEntries(formData);
  };

  return (
    <div className="form">
      <h1>Registro</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
