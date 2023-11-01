import './vistoria.css'

export default function Vistoria() {
    return (
        <> 
            <div id="lin_grad">
                <h1 className=" p-5 text-center text-black text-3xl justify-center"><strong> Bem Vindo(a) sua Vistoria!! </strong></h1> <br />
                    <p className="text-center text-base"> A partir daqui, você será guiado(a) pela nossa interface personalizada durante as fotografias da sua bike, mas antes, por favor preencha os dados a seguir: </p>
                    
                    <form action="#" className="form-vistoria"> 
                        <fieldset className="form-vistoria-holder"> 
                            <h3 className="p-5 text-center text-2xl"><strong> Bike da Porto Seguro</strong></h3>

                            <div class="input-holder">
                                <input class="input-form" type="number" min="1" step=".1" name="txtValor" id="idValor" placeholder="Qual o valor da sua Bike?"/>
                            </div>
                            
                            <div class="input-holder">
                                <input class="input-form" type="text" name="txtModelo" id="idModelo" placeholder="Qual o modelo da sua Bike?"/>
                            </div>
                            
                            <div class="input-holder">
                                <input class="input-form" type="text" name="txtSNumber" id="idSNumber" placeholder="Qual o número de série?"/>
                            </div>
                            
                            <div class="input-holder">
                                <label for="txtDataCompra" id="lblData">Qual a data da compra da sua bike?</label>
                                <input class="input-form" type="date" name="txtDataCompra" id="idDataCompra" placeholder="Qual a data da compra?"/>
                            </div>
                            
                            <div className="botao"> 
                                <button className="border-2 border-blue-600 rounded-2xl text-blue-600 p-1 px-3 m-3">
                                    Iniciar Vistoria
                                </button>
                            </div>
                        </fieldset>
                    </form> 
            </div> 
            
        </>
    )
}
