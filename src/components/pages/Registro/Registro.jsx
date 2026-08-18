import { useState } from "react"

export function Registro() {

    let nombre = "Formulario de registro"

    const [datosFormulario, setDatosFormulario] = useState({
        nombres: "",
        correo: "",
        contraseña: "",
        rol: ""
    })

    function manejarCambios(evento) {
        //Saber que cjaa esta sufriendo manejarCambios
        let nombreCaja = evento.target.name
        //Cual es el valor de la caja
        let valorCaja = evento.target.value

        //Centralizamos los datos escritos en una nueva variable
        let nuevoDatosFormulario = {
            ...datosFormulario,
            [nombreCaja]: valorCaja
        }

        console.log("Campo que estoy escribiendo: ", nombreCaja)
        console.log("Valor que escribieron", valorCaja)
        console.log("datos nuevos: ", nuevoDatosFormulario)


        //Escribir mi variable de estado
        setDatosFormulario(nuevoDatosFormulario)
    }
    return (
        <>

            <section className="container">
                <section className="row justify-content-center">
                    <section className="col-6"></section>
                    <h1>{nombre}</h1>
                    <hr />

                    <form className="border rounded p-5 shadow">

                        <input type="text"
                            className="form-control mb-3"
                            placeholder="Kevin Stiward Balvin Garcia"
                            id="nombres"
                            name="nombres"
                            value={datosFormulario.nombres}
                            onChange={manejarCambios}
                        />

                        <input type="email" className="form-control mb-3"
                            placeholder="ejemplo@correo.com"
                            id="correo"
                            name="correo"
                            value={datosFormulario.correo}
                            onChange={manejarCambios} />

                        <input type="password" className="form-control mb-3"
                        placeholder="*******"
                            id="contraseña"
                            name="contraseña"
                            value={datosFormulario.contraseña}
                            onChange={manejarCambios} 
                         />

                        <select name="" id="" className="form-select mb-3">
                            <option value="">Administrador</option>
                            <option value="">Inquilino</option>
                        </select>

                        <button className="btn btn-primary w-100">Enviar</button>
                    </form>
                </section>
            </section>

        </>
    )
}