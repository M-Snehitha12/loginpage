import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";;
const Signin=()=>
{
    return(
        <section class="vh-100">
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col col-xl-10">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">
                                        <form>
                                            <div class="d-flex align-items-center mb-3 pb-1">
                                                <div class="d-flex align-items-center mb-3 pb-1">
                                                    <span class="h1 fw-bold mb-0 text-primary">
                                                    </span>
                                                </div>
                                                <h5 class="fw-normal mb-3 pb-3">Sign into your account</h5>
                                                <div data-mdb-input-init class="form-outline mb-4">
                                                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form2Example17">Email address</label>
                                                </div>
                                                <div data-mdb-input-init class="form-outline mb-4">
                                                    <input type="password" id="form2Example27" class="form-control form-control-lg"/>
                                                    <label class="form-label" for="form2Example27">password</label>
                                                </div>

                                                <div class="pt-1 mb-4">
                                                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-bold">
                                                    type="button" Login</button>
                                                </div>
                                                <a class="small text-muted"href="#!">Forgot password?</a>
                                                <p class="mb-5 pb-lg-2">Don't have an account?<a href="#!">Register here</a></p>
                                                <a href="#!" class="small text-muted">Terms of use</a>
                                                <a href="#!" class="small text-muted">Privacy policy</a>
                                        

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Signin;