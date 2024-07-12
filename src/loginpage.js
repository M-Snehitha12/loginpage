import React from 'react';
const Login=()=>
{
     return(
            <div>
                <div className='bg-primary'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <label>UserName</label>
                            <input type='text'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <label>Password</label>
                            <input type='text'></input>
                        </div>

                    </div>
                </div>
            </div>
        );
};
export default Login;