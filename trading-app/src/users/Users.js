import React from 'react';
import '../styles/Users.css';
import Home from '../Home'

class Users extends React.Component{
    render() {
        return(
          <section id="team" class="pb-5">
                   <nav class="navbar navbar-dark">
                <a id = "nav "class="navbar-brand" href="/">
                  <i class="fa fa-ship fa-1x" aria-hidden="true"></i>
                   <a id = "title">Stores Manager</a>
                 </a>
                 <form class="form-inline my-2 my-lg-0">
                     <a href="/login" class="btn"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i></a>
                 </form>

            </nav> 
          
              <div class="container">
                  <form class="form-inline">
                  </form>
                      <div class ="row">
                          <div class = "col-4">
                              <div class="card">
                                  <div class="card-body text-center">
                                      <h4 class="card-title">Iván Herrera</h4>
                                      <p><img class=" img-fluid" src="https://image.flaticon.com/icons/svg/1805/1805781.svg   " alt="card image" height="50" width="50"></img></p>
                                      <div class="container-fluid">
                                       <div class= "row">
                                         <div id="symbol" class = "col-4">
                                            <i class="fa fa-id-badge" aria-hidden="true"></i>
                                          </div>
                                          <div id="symbol" class = "col-4">
                                             <i class="fa fa-credit-card" aria-hidden="true"></i>
                                          </div>
                                          <div id="symbol" class = "col-4">
                                              <i class="fa fa-bed" aria-hidden="true"></i>
                                          </div>
                                         </div>
                                         <div class= "row">
                                         <div class = "col-4">
                                            <a id = "font">18293</a>
                                          </div>
                                          <div  id = "font" class = "col-4">
                                             ***9828
                                          </div>
                                          <div id = "font" class = "col-4">
                                              26E
                                          </div>
                                         </div>
                                       </div>
                                       <hr></hr>
                                      <a href="/users/history" id ="verhcompras" class="btn">Ver historial de compras</a>                      
                                      </div>
                                  </div>
                              </div>
                          <div class = "col-8">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                              <div class="mainflip">
                                  {/* <div class="frontside">  */}
                                      <div class="card">
                                          <div class="card-body text-center">
                                              <h4 class="card-title">Mi información</h4>

                                              <div id = "usercont" class="container-fluid">
                                                 <div class ="row">
                                                    <div class = "col-6">
                                                        <div class="input-group mb-3">
                                                             <div class="input-group-prepend">
                                                                  <span class="input-group-text"  id = "basic-addon1">Nombre</span>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
                                                        </div>  
                                                    </div>
                                                    <div class = "col-6">
                                                         <div class="input-group mb-3">
                                                             <div class="input-group-prepend">
                                                                  <span class="input-group-text" id = "basic-addon1">Apellido</span>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
                                                        </div>  
                                                    </div>

                                                 </div>
                                                  <hr></hr>
                                                <h4 class="card-title">Información de facturación</h4>
                                                  <div class = "row">
                                                      <div class = "col-3">
                                                      </div>
                                                      <div class = "col-6">
                                                          <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="5180 9200 0034 5656"></input>
                                                                <div class="input-group-append">
                                                                <button id = "creditc" class="btn" type="button">
                                                                  <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
                                                                </button>
                                                                </div>
                                                            </div>
                                                      </div>
                                                      <div class = "col-3">
                                                      </div>
                                                  </div>
                                                  .
                                                  <div class = "row">
                                                      <div class = "col-3">
                                                      </div>
                                                      <div class = "col-3">
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="basic-addon1">CVV</span>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="901" aria-label="Username" aria-describedby="basic-addon1"></input>
                                                        </div>
                                                      </div>
                                                      <div class = "col-3">
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="05/22" aria-label="Username" aria-describedby="basic-addon1"></input>
                                                        </div>
                                                      </div>
                                                      <div class = "col-3">
                                                      </div>
                                                  </div>
                                                  <hr></hr>
                                                  <div class="container">
                                                  <img src="data:image/jpeg;base64,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"></img>
                                                <img src="data:image/jpeg;base64,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"></img>
                                                 <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAOCwoIEBAKCgkLDQsIDQ0NBxsKCggLIB0WIiAdHx8kHCggJBoxJx8fITIhJSkrLi4uIx8zODMtNyg5Li4BCgoKDg0OFRAPGC0dHR4tKy4tLS0rNystLSs3LTcrNy0rNysuLSstLTctNzctLSstKy03NzctKy0tKy0tNzcuK//AABEIAIAAgAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQABAwIGB//EADoQAAIBAwIDBgIJAwMFAAAAAAECAwAREgQhEyIxBTJBUWFxgZEGFCNCUqGxwfAz0eEVQ5JicoLC8f/EABoBAAIDAQEAAAAAAAAAAAAAAAIEAAEDBQb/xAApEQACAgIBAgUDBQAAAAAAAAAAAQIRAyExBBITQVFhoQUicUJSgdHw/9oADAMBAAIRAxEAPwDxoroVBV2r1Z5dsgq6lWKhTJV1KlQolSpepbYH1qEIaoVYF7Abk9APvVbIR1BX3WoXTKqGpUqFFVKu1Q1CHJqrV1VVCFVdXapaoQlSpVgdSSFVRkzHuqtQvk4kcKrOxsq7k0t/1Nrk4oqHdcnxZlrrUuZuexXTozKity5t+JqyadQwTPUhyPuqMGb0HwpLJnbf2ukP4+nSX3K2zePtUjbBSPEDVLzfC9ajtRSOZJbXy2GX50GusitYyzdMjlAGy8PKto1hc2EsRbJUs2iGWR8NhQrLLykgngj+0xm7dxJ5LJfELlizUXou1lmcqM0c85UjJa6k7LHKt9KchkqnUtEzb2OxJ8vKuP8AR5EuVSSM97JMZP0sfyoY5Mqld2g5YsbjpUxhlfqB7jlqWHmR7rQWcqABwJL5A3XhSfI2v8q2imDX6hh1VlxZfhTsMilwIZMUo87NsT7+3NXNXUzPv781abMdFVVdZDy+TVVvX51AqIKuqFXUBIelLNZqMzwlGUY6KeVtS3mfQUxdrC/U+AoIxFGBtmzDikjmZvQeVYZ7apDXTJJ2yjGqx5Pa9sXORZch5CraSIKr4o7W5SVxZqHlcs4bZ5B0Uf04mt41kBzBr8WS+IPejia386Up3UqSHJRt22wiPQ53Jg06KRjzSlf0NGwdnxizFIw+fF5ZWZcviax0sBbF5CzS2Zsc8cvh7UzhAcqCgsoZhfvfC9RdsXtX8v4RT7mtS/r5ezGXsqJmjbJySuGz4rHfzuKmv7Nu1xIY5EWNMo1DZKPVTv1oyON2vdGTfaz5ZfKiPqhwV8kAv3RKMviOtaPHj0BGWXYkczjhokySkrIzpK/NI3gAGHSs5NQy2WbT4i+IeO6Llt08PPxp+NMXOCgs/kELUw0n0e1TXJWNEblDO4j/ACvWUu2HM6/35NouU/0WeV008bgBHLG2WL8sn+a1avSdofQeyF34KzBlb7NyvL6i36UTP9GonjTVK7iMBYikGmaRmbz5jejx9dDiTv3Rlk6CTdxX8HkaomveaX6LaQBWbjvcZWaUR/oBWut7H0UKZrErBgyEmdpMfzoJfVcSdJNlx+l5WrbSPn4NWATYDmJOIA+81ZEEb/8AtWU2pKN9m54gG7Lysvt5U/kn2rXIljxdz3wF6+NIorljJMG5yjhoY9u6PM0qkVyC7h1RxkFHNkvma5VrLa7Y3ysObm8bevrRDCSdwiCOByFREVQrMvrf9aRcpSezodsYxtaBUh5Qv9ONvuhvtJL/AM9qKggdyqRIQW8QuUlONN2NHFZ53VHIzxL5NJv6XJ/m9bTdpIitFAmCHlzZccuvh8upPStYY2+BbJm9DjS9jKhGolZIbDorBpG8D6D9aPg1+lR0iWL6xIWZCT3ZPI3Nz19BSKSV5XGTFnY2uzeZr1HY3ZanTpcRiY8oYxf7hNwb+l7f/KHNWKN+bJi7py3wj0um0qppCuUUczHjZogkaPYdLjatZJ9NHGFCRmUDmYQBWb8q84O15b/U0REmC5Ytfh7Dc+NItZ2nqGzVsdPiGazLw8mHUD13rjQwZssrbo7Ty4sSpHoNR2tGJGZUjuWW1lPEW1MNL2ktlQxooL5sroG5vMD8q8Ee1JuGiZn7N+KpFslb361Y7SmllVpZXIPedn5sacl0lxpsWj1i7tI9x2v201la9iDjdeXJf2P9qTN28+ylwwB3u2PEX9v8Undoi8ytOWjs3BYIcsvDLkpe+OLLd3ky2YPjHw7eRF71ePpYxVEn1TbtHpv9VPfzzF8iCx5l6W29Lb+Y9aA7T7SLRGPIHvc22TL5f586XXg4AT7Yai+XECDHHy79AOTRRwQTuinnk1RJpbbC/Tf/ALaz0qqXs9yvM2P4mttsPC9t69Dovo8JUErPJHlHxcVYKzKPQ2I3tv0rbTaKKKSGLgWleJpSxbLh2zve4/6TWmTqFKTS3Rnj6dxim9Jivsns1po5yiZSLjZmb+nHvcj16W+NNdB2Jp4WaSXUAmMrlg+PDl8t977H5U77K0vHi0spujOurlZQ54a49PG/lt0pJ2pGF0GlkUAPJNOzjENj4AdPf50rjyZMmXtTpXXqNZYY44bat1+Dn6SMl9LFGuKcJZi+H9Zm8b9TsB1J8aSmmvb+pDtpkH+1BHCbelJ2euvi+yCTOLlXdkdcEc9RuPUNi1Y6aeWEnhTTRg9QrlcqpnrgmscvbPlWMY7hwwubXySbu7SHzLVheuLVYU9etCtKkE3btmgrtaGaXEqpBsx2NEgUN2SqOgtdBa7RL1osdWWjApXDJR3CoPVPa6DvHqfw0O3pGiXmxz2VO1gSmoYmGWLk0pZWY3PVb+lZ9rdqL9ZWUvPHyNDi0BjkW5P5b+lLtD2k8WJCriPHejj2iZ8lkQTpa+JY44+gv13rLI3Ft0awqSSPVdjamOCBMnCo0eCM3Ku/kT50g7Z1MQiTT5cQoZGULLku/iaLX6kyJpm0zHANiGgdVW4uTvYDpQGp+isEpURFlY5G+X2fp47Uh0s/DySlK7Y71Cc8SikhE8nj1NYO9aa76NcOzce4LYf0/vW+VI5dM6krkwIOJvXSfUykrSOZHp1HTY1vUy6Ulwf8bf8AI10DJ+Nv+RofF9g3iXqOw3xq0boehpKGl/Ex/wDKug0/W7VfjewDxr1Q6mcHh9AQy/vWgf4iksRmY473PdJXlVq2C6kErtceQDL86tZ1e0D4LS0x7Gw896JiYe9IodPrCdo3b7twi0VDDrV5sCAOvc/vVvNAKOOQdrdWEBRd5D1P4aVM/U+JoyLsyZ+ayxgndmlH7E1S9kysWUAMBy5Bso/nRKcVww+1+aFyvaxuw9mrfTzgG4ZxflP3Wah4go3ydW7xGVHdnQI5fmZcBug/3vmPDx/hrKcqWw4xbeh1p9VwVBaSVI5Fa2amSGS/z+ddabUWYyB0ZJFxKsxbJenTYAfGl8mqRLKr/V0Tkss4kZfgL/nW8JyuxaGSNRkzxq2XsAD16XvSqgm7GZTpUGdpS2iDtjGw5cAvNv4b3AP7V5aeMnJtzY4EleXKm8z7NcM6kZqoXFlYfi2328vKlMy2u2TNfJrY44703CNREck25aBlgBJBIQgZDl71HaXs47EixK5BSo4jb26eFDxWJLHvW/D+XoaNhjk5pMsW5ccmEjL5Hz+NVJEUt7DTonQFljkUIdsYu8tvX9wKHMTkNLgUis1y98mt6A+n5GvQaJsyDli5XEhnbGf1O3+Kx7Skde6Y8clVQHDNIt+Y7gH9RS7dOhhQTVnlNXKQVcFzctYF/Xy3/WhzMx5iZAT1Jbl+FHzOWLls3K5KGXuxtfre29YxN3+rLbwcr8fX9KNGUo7M+K2AfKS4O3Of7e1dRyPzYvMTZUxEuLM3ltRSgG6Y2jIyA72O/XYUP9THMLcy82Af7T5WoW0WoAkufU8S98blvvVm72t3unjy0SosSmwALcp5W+Pn0rGVTzHka/W3eWrUi+0wz8dyfG7Y1rBqCm42PL0as1Qeg870Zp4oHjJaQRuGxAZOJy+th70UnXIa3wFjtbLkIhYse9NEJGX+/wA6JOrRAGEUauOXiRPw1x9injStdJHYtxoClst4nyX4DwraCWMcvE0+4XlTTFcvckbUNryLd+YRqZgyBdsiOZzrFb2t06e1BNKMt3DXOVi+TevStNSgPOkbKOZicE5dvAjf+ChyY1D3tcFcAUEmXxrVOkLySbO0bIjezHpZ/wC29H6HFmSDALITvduZlv5W3+d6A06lrKrfaDnACjw9vLfpTbQs54icQiaJlszwZSKt7bXO49vOhnPQUIbHEioqA2WNnXdip+zb8r+1Cdr6mSGRYS6yRnFs2usa790bXt7E1c0gvaZodxl9poO96jn67Da9L9WiJw9TFadC2114fMLG2II8z0pdPexl8aANW+7OjswDY9wK3nfY1ws2Fx9pYjIkuVb9f5eupgZMpG4aG6riiYxx+V/Lx33octY9UsQrNy5Lt0/grSzF8hEfKxezOhyuCgb9dxUk1FysjIoJGSkfZ1gt+/uLncrfFvSpM6ktiQIzy4rfmt6XvVMJHU826tdZFAyH3evvv86wOLXI8eUcvNWjupYLyAYrYBeXb5+NZzx83Q2YNt3Vj9vapZdH/9k="></img>
                                                  </div>
                                              </div>
                                            </div>
                                      </div>
                                  {/* </div> */}
                                  {/* <div class="frontside">
                                      <div class="card">
                                          <div class="card-body text-center">
                                          <div class="container-fluid">
                                                  <div class = "row">
                                                      <div class = "col-6">
                                                          Nombre:
                                                      </div>
                                                      <div class = "col-6">
                                                          <input></input>
                                                      </div>
                                                  </div>
                                                  <div class = "row">
                                                      <div class = "col-6">
                                                          Apellido:
                                                      </div>
                                                      <div class = "col-6">
                                                          <input></input>
                                                      </div>
                                                  </div>
                                                  <hr></hr>
                                                  <div class = "row">
                                                      <div class = "col-6">
                                                          Nombre:
                                                      </div>
                                                      <div class = "col-6">
                                                          <input></input>
                                                      </div>
                                                  </div>
                                              </div>
                                               <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>           
                                           </div>
                                      </div>
                                  </div> */}
                              </div>
                          </div>
                        </div>
                      </div>
              </div>
          </section>
            )
    }
}

export default Users;