import React from 'react';
const Contact=()=>
{
       return(
            <center>
                <center><bold><h1>Contact</h1></bold></center>
                <div class="contact-wrapper">
                    <form id="contact-form" class="form-horizontal" role="form">
                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required><br></br></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required><br></br></input>
                            </div>
                        </div>
                        <textarea class="form-control" rows="9" placeholder="MESSAGE" name="message" required><br></br></textarea>
                        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div class="alt-send-button">
                                <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                            </div>
                        </button>
                    </form>
                    <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                </div>
            </center>
        )
    };
export default Contact;