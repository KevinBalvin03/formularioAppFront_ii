export function Registro() {

    let nombre = "Formulario de registro"


    return (
        <>

            <section className="container">
                <section className="row justify-content-center">
                    <section className="col-6"></section>
                    <h1>{nombre}</h1>
                    <hr />

                    <form className="border rounded p-5 shadow">
                        <input type="text" className="form-control mb-3" />
                        <input type="email" className="form-control mb-3" />
                        <input type="password" className="form-control mb-3" />

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